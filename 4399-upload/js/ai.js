(function () {
  "use strict";

  var TankGame = window.TankGame = window.TankGame || {};

  function angleDifference(target, current) {
    var difference = target - current;
    while (difference > Math.PI) { difference -= Math.PI * 2; }
    while (difference < -Math.PI) { difference += Math.PI * 2; }
    return difference;
  }

  function hasLineOfSight(enemy, player, worldMap) {
    return !TankGame.Map.findSegmentObstacle(worldMap, enemy.x, enemy.y, player.x, player.y, 3);
  }

  function isTankPositionBlocked(enemy, enemies, x, y) {
    return enemies.some(function (other) {
      if (other === enemy || (!other.alive && !other.wreck)) { return false; }
      var dx = x - other.x;
      var dy = y - other.y;
      var minimumDistance = enemy.radius + other.radius + 6;
      return dx * dx + dy * dy < minimumDistance * minimumDistance;
    });
  }

  function isFriendlyFireBlocked(enemy, player, enemies) {
    return enemies.some(function (other) {
      return other !== enemy && other.alive && TankGame.Collision.segmentIntersectsCircle(
        enemy.x, enemy.y, player.x, player.y, other, 8
      );
    });
  }

  function tryMove(enemy, worldMap, enemies, distance) {
    var nextX = enemy.x + Math.cos(enemy.bodyAngle) * distance;
    var nextY = enemy.y + Math.sin(enemy.bodyAngle) * distance;
    var moved = false;
    if (!TankGame.Map.circleCollides(worldMap, { x: nextX, y: enemy.y, radius: enemy.radius }) &&
        !isTankPositionBlocked(enemy, enemies, nextX, enemy.y)) {
      enemy.x = nextX;
      moved = true;
    }
    if (!TankGame.Map.circleCollides(worldMap, { x: enemy.x, y: nextY, radius: enemy.radius }) &&
        !isTankPositionBlocked(enemy, enemies, enemy.x, nextY)) {
      enemy.y = nextY;
      moved = true;
    }
    return moved;
  }

  function toCell(x, y) {
    return {
      column: Math.max(0, Math.min(TankGame.Map.columns - 1, Math.floor(x / TankGame.Map.tileSize))),
      row: Math.max(0, Math.min(TankGame.Map.rows - 1, Math.floor(y / TankGame.Map.tileSize)))
    };
  }

  function cellKey(column, row) {
    return column + "," + row;
  }

  function isWalkable(worldMap, column, row) {
    if (row < 0 || row >= TankGame.Map.rows || column < 0 || column >= TankGame.Map.columns) { return false; }
    return ["#", "B", "I", "W"].indexOf(worldMap.cells[row][column]) === -1;
  }

  function chooseTacticalGoal(game, enemy) {
    var playerCell = toCell(game.player.x, game.player.y);
    var offsets = [[0, 0], [2, 0], [-2, 0], [0, 2], [0, -2], [2, 2], [-2, 2], [2, -2], [-2, -2]];
    var startIndex = enemy.tacticalSlot % offsets.length;
    for (var i = 0; i < offsets.length; i += 1) {
      var offset = offsets[(startIndex + i) % offsets.length];
      var column = playerCell.column + offset[0];
      var row = playerCell.row + offset[1];
      if (isWalkable(game.worldMap, column, row)) { return { column: column, row: row }; }
    }
    return playerCell;
  }

  function reconstructPath(nodes, endKey) {
    var path = [];
    var current = nodes[endKey];
    while (current && current.parent) {
      path.push({
        x: (current.column + 0.5) * TankGame.Map.tileSize,
        y: (current.row + 0.5) * TankGame.Map.tileSize
      });
      current = nodes[current.parent];
    }
    path.reverse();
    return path;
  }

  function pushHeap(heap, node) {
    var index = heap.length;
    heap.push(node);
    while (index > 0) {
      var parent = Math.floor((index - 1) / 2);
      if (heap[parent].f <= heap[index].f) { break; }
      var swap = heap[parent];
      heap[parent] = heap[index];
      heap[index] = swap;
      index = parent;
    }
  }

  function popHeap(heap) {
    if (!heap.length) { return null; }
    var result = heap[0];
    var last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      var index = 0;
      while (true) {
        var left = index * 2 + 1;
        var right = left + 1;
        var smallest = index;
        if (left < heap.length && heap[left].f < heap[smallest].f) { smallest = left; }
        if (right < heap.length && heap[right].f < heap[smallest].f) { smallest = right; }
        if (smallest === index) { break; }
        var swap = heap[index];
        heap[index] = heap[smallest];
        heap[smallest] = swap;
        index = smallest;
      }
    }
    return result;
  }

  function findPath(worldMap, start, goal) {
    var open = [];
    var nodes = Object.create(null);
    var closed = Object.create(null);
    var startKey = cellKey(start.column, start.row);
    var goalKey = cellKey(goal.column, goal.row);
    var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    nodes[startKey] = { column: start.column, row: start.row, g: 0, f: 0, parent: null };
    pushHeap(open, nodes[startKey]);

    while (open.length > 0) {
      var current = popHeap(open);
      var currentKey = cellKey(current.column, current.row);
      if (current !== nodes[currentKey]) { continue; }
      if (currentKey === goalKey) { return reconstructPath(nodes, goalKey); }
      closed[currentKey] = true;

      directions.forEach(function (direction) {
        var column = current.column + direction[0];
        var row = current.row + direction[1];
        var key = cellKey(column, row);
        if (!isWalkable(worldMap, column, row) || closed[key]) { return; }
        var nextG = current.g + 1;
        if (!nodes[key] || nextG < nodes[key].g) {
          nodes[key] = {
            column: column,
            row: row,
            g: nextG,
            f: nextG + Math.abs(goal.column - column) + Math.abs(goal.row - row),
            parent: currentKey
          };
          pushHeap(open, nodes[key]);
        }
      });
    }
    return [];
  }

  var AI = {
    states: Object.freeze({ PATROL: "PATROL", CHASE: "CHASE", ATTACK: "ATTACK", AVOID: "AVOID" }),

    initialize: function (enemy, index, mode) {
      enemy.aiState = this.states.PATROL;
      enemy.patrolAngle = enemy.bodyAngle + (index % 2 === 0 ? 0.7 : -0.7);
      enemy.avoidTimer = 0;
      enemy.stuckTimer = 0;
      enemy.lastX = enemy.x;
      enemy.lastY = enemy.y;
      enemy.path = [];
      enemy.pathIndex = 0;
      enemy.pathTimer = Math.random() * mode.pathInterval;
      enemy.reactionTimer = mode.reactionTime * (0.7 + Math.random() * 0.5);
      enemy.tacticalSlot = index;
      enemy.strafeDirection = index % 2 === 0 ? 1 : -1;
      enemy.strafeTimer = 0.7 + Math.random() * 0.8;
      enemy.attackManeuver = "hold";
      enemy.attackMoveTimer = 0;
      enemy.mode = mode;
    },

    update: function (game, deltaTime) {
      var self = this;
      game.enemies.forEach(function (enemy) { self.updateEnemy(game, enemy, deltaTime); });
    },

    updateEnemy: function (game, enemy, deltaTime) {
      if (enemy.wreck) { return; }
      var player = game.player;
      var mode = enemy.mode;
      var dx = player.x - enemy.x;
      var dy = player.y - enemy.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var sight = player.alive && hasLineOfSight(enemy, player, game.worldMap);
      var attackRange = game.getEnemyAttackRange ? game.getEnemyAttackRange(enemy, mode) : mode.attackRange;
      var breakableWall = player.alive && distance <= attackRange ?
        TankGame.Map.findBreakableWallBetween(game.worldMap, enemy.x, enemy.y, player.x, player.y, 3) : null;
      var targetAngle;
      var fireTarget;
      var moved = false;
      var slowEndlessAI = game.selectedMode === "endless" && game.endlessLevel <= 10;
      var reactionTime = slowEndlessAI ? Math.max(mode.reactionTime, TankGame.Config.modes.normal.reactionTime) : mode.reactionTime;
      if ((enemy.isElite && (enemy.eliteState === "charging_prepare" || enemy.eliteState === "charging")) || enemy.specialMovementLocked) {
        enemy.fireCooldown = Math.max(0, enemy.fireCooldown - deltaTime);
        enemy.hitFlash = Math.max(0, enemy.hitFlash - deltaTime);
        return;
      }
      if (slowEndlessAI) {
        if (!enemy.endlessReactionAdjusted) {
          enemy.reactionTimer = reactionTime * (0.7 + Math.random() * 0.5);
          enemy.endlessReactionAdjusted = true;
        }
      }
      enemy.jammedTimer = Math.max(0, (enemy.jammedTimer || 0) - deltaTime);
      if (enemy.jammedTimer > 0) {
        if (!enemy.isTurret) {
          enemy.bodyAngle = Math.atan2(enemy.y - player.y, enemy.x - player.x);
          tryMove(enemy, game.worldMap, game.enemies, enemy.mode.enemySpeed * 0.62 * deltaTime);
        }
        return;
      }

      enemy.fireCooldown = Math.max(0, enemy.fireCooldown - deltaTime);
      enemy.hitFlash = Math.max(0, enemy.hitFlash - deltaTime);
      enemy.reactionTimer -= deltaTime;
      enemy.pathTimer -= deltaTime;
      enemy.strafeTimer -= deltaTime;
      enemy.attackMoveTimer -= deltaTime;

      if (enemy.reactionTimer <= 0) {
        var canAttack = player.alive && distance <= attackRange && (sight || Boolean(breakableWall));
        if (enemy.avoidTimer > 0) {
          enemy.aiState = this.states.AVOID;
        } else if (canAttack) {
          enemy.aiState = this.states.ATTACK;
        } else if (player.alive && (distance <= mode.detectionRange || game.worldMap.isLargeWorld)) {
          enemy.aiState = this.states.CHASE;
        } else {
          enemy.aiState = this.states.PATROL;
        }
        enemy.reactionTimer = reactionTime;
      }

      if (enemy.aiState === this.states.ATTACK) {
        fireTarget = sight ? { type: "player", x: player.x, y: player.y, radius: player.radius } :
          (breakableWall ? {
            type: "breakableWall",
            obstacle: breakableWall,
            radius: 0,
            x: breakableWall.x + breakableWall.width / 2,
            y: breakableWall.y + breakableWall.height / 2
          } : null);
        enemy.fireTarget = fireTarget;
        targetAngle = fireTarget ? Math.atan2(fireTarget.y - enemy.y, fireTarget.x - enemy.x) : Math.atan2(dy, dx);
        enemy.turretAngle += angleDifference(targetAngle, enemy.turretAngle) * Math.min(1, mode.enemyTurnSpeed * deltaTime * 2);
        moved = this.updateAttackMovement(game, enemy, distance, targetAngle, deltaTime);
        if (enemy.fireCooldown <= 0 && enemy.jammedTimer <= 0 && fireTarget && distance <= attackRange &&
            Math.abs(angleDifference(targetAngle, enemy.turretAngle)) < Math.max(0.08, mode.aimError * 1.8) &&
            !isFriendlyFireBlocked(enemy, fireTarget, game.enemies) &&
            (!game.canEnemyFire || game.canEnemyFire(enemy))) {
          enemy.turretAngle = targetAngle + (Math.random() - 0.5) * mode.aimError * 2;
          game.fire(enemy);
          enemy.fireCooldown = (game.getEnemyFireCooldown ? game.getEnemyFireCooldown(enemy, mode) : mode.fireCooldown) * (0.85 + Math.random() * 0.3);
        }
      } else if (enemy.aiState === this.states.CHASE) {
        enemy.fireTarget = null;
        if (!enemy.isTurret) {
          if (enemy.pathTimer <= 0 || enemy.pathIndex >= enemy.path.length) {
            enemy.path = findPath(game.worldMap, toCell(enemy.x, enemy.y), chooseTacticalGoal(game, enemy));
            enemy.pathIndex = 0;
            enemy.pathTimer = mode.pathInterval;
          }
          moved = this.followPath(enemy, game.worldMap, game.enemies, deltaTime);
          if (!moved && enemy.path.length === 0) { this.beginAvoid(enemy); }
        }
        enemy.turretAngle += angleDifference(Math.atan2(dy, dx), enemy.turretAngle) * Math.min(1, mode.enemyTurnSpeed * deltaTime);
      } else if (enemy.aiState === this.states.AVOID) {
        enemy.fireTarget = null;
        if (!enemy.isTurret) {
          enemy.avoidTimer -= deltaTime;
          enemy.bodyAngle += enemy.avoidDirection * mode.enemyTurnSpeed * deltaTime;
          moved = tryMove(enemy, game.worldMap, game.enemies, mode.enemySpeed * 0.72 * deltaTime);
          if (enemy.avoidTimer <= 0) { enemy.pathTimer = 0; }
        }
      } else {
        enemy.fireTarget = null;
        if (!enemy.isTurret) {
          enemy.bodyAngle += Math.max(-0.7, Math.min(0.7, angleDifference(enemy.patrolAngle, enemy.bodyAngle))) * mode.enemyTurnSpeed * 0.55 * deltaTime;
          enemy.turretAngle = enemy.bodyAngle;
          moved = tryMove(enemy, game.worldMap, game.enemies, mode.enemySpeed * 0.48 * deltaTime);
          if (!moved || Math.random() < 0.002) {
            enemy.patrolAngle += (Math.random() - 0.5) * Math.PI * 1.6;
            this.beginAvoid(enemy);
          }
        }
      }

      if (!enemy.isTurret) { this.updateStuckState(enemy, moved, deltaTime); }
    },

    updateAttackMovement: function (game, enemy, distance, targetAngle, deltaTime) {
      var mode = enemy.mode;
      if (enemy.isTurret) { return false; }
      var preferredRange = mode.preferredRange || mode.attackRange * 0.62;
      var desiredAngle = targetAngle;
      var speedScale = 0;
      if (enemy.attackMoveTimer <= 0) {
        if (distance < preferredRange * 0.72) {
          enemy.attackManeuver = "retreat";
        } else if (distance > preferredRange * 1.18) {
          enemy.attackManeuver = "advance";
        } else {
          enemy.attackManeuver = Math.random() < (mode.strafeChance || 0) ? "strafe" : "hold";
        }
        enemy.attackMoveTimer = 0.55 + Math.random() * 0.55;
      }
      if (enemy.attackManeuver === "retreat") {
        desiredAngle = targetAngle + Math.PI;
        speedScale = 0.52;
      } else if (enemy.attackManeuver === "advance") {
        speedScale = 0.45;
      } else if (enemy.attackManeuver === "strafe") {
        speedScale = 0.5;
        desiredAngle = targetAngle + enemy.strafeDirection * Math.PI / 2;
      }
      if (enemy.strafeTimer <= 0) {
        enemy.strafeDirection *= -1;
        enemy.strafeTimer = 0.75 + Math.random() * 0.9;
      }
      enemy.bodyAngle += Math.max(-1, Math.min(1, angleDifference(desiredAngle, enemy.bodyAngle))) * mode.enemyTurnSpeed * deltaTime;
      if (speedScale > 0 && Math.abs(angleDifference(desiredAngle, enemy.bodyAngle)) < 0.72) {
        return tryMove(enemy, game.worldMap, game.enemies, mode.enemySpeed * speedScale * deltaTime);
      }
      return false;
    },

    followPath: function (enemy, worldMap, enemies, deltaTime) {
      var waypoint = enemy.path[enemy.pathIndex];
      if (!waypoint) { return false; }
      var dx = waypoint.x - enemy.x;
      var dy = waypoint.y - enemy.y;
      if (dx * dx + dy * dy < 20 * 20) {
        enemy.pathIndex += 1;
        waypoint = enemy.path[enemy.pathIndex];
        if (!waypoint) { return false; }
        dx = waypoint.x - enemy.x;
        dy = waypoint.y - enemy.y;
      }
      var targetAngle = Math.atan2(dy, dx);
      enemy.bodyAngle += Math.max(-1, Math.min(1, angleDifference(targetAngle, enemy.bodyAngle))) * enemy.mode.enemyTurnSpeed * deltaTime;
      if (Math.abs(angleDifference(targetAngle, enemy.bodyAngle)) > 0.8) { return true; }
      if (!tryMove(enemy, worldMap, enemies, enemy.mode.enemySpeed * deltaTime)) {
        enemy.pathTimer = 0;
        return false;
      }
      return true;
    },

    updateStuckState: function (enemy, expectedMovement, deltaTime) {
      var displacement = Math.abs(enemy.x - enemy.lastX) + Math.abs(enemy.y - enemy.lastY);
      if (expectedMovement && displacement < 0.2) {
        enemy.stuckTimer += deltaTime;
      } else {
        enemy.stuckTimer = 0;
        enemy.lastX = enemy.x;
        enemy.lastY = enemy.y;
      }
      if (enemy.stuckTimer > enemy.mode.reactionTime + 0.45 && enemy.aiState !== this.states.ATTACK) {
        this.beginAvoid(enemy);
        enemy.stuckTimer = 0;
      }
    },

    beginAvoid: function (enemy) {
      enemy.aiState = this.states.AVOID;
      enemy.avoidTimer = 0.45 + Math.random() * 0.45;
      enemy.avoidDirection = Math.random() < 0.5 ? -1 : 1;
      enemy.path = [];
      enemy.pathIndex = 0;
    },

    isFriendlyFireBlocked: isFriendlyFireBlocked
  };

  TankGame.AI = AI;
}());
