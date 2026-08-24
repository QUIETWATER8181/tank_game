(function () {
  "use strict";

  var TankGame = window.TankGame = window.TankGame || {};
  var Config = TankGame.Config;

  function createRng(seed) {
    var value = seed >>> 0;
    return function () {
      value += 0x6D2B79F5;
      var result = value;
      result = Math.imul(result ^ result >>> 15, result | 1);
      result ^= result + Math.imul(result ^ result >>> 7, result | 61);
      return ((result ^ result >>> 14) >>> 0) / 4294967296;
    };
  }

  function hash2(x, y, salt) {
    var value = Math.imul((x | 0) ^ 0x45D9F3B, 0x27D4EB2D);
    value = Math.imul(value ^ (y | 0), 0x165667B1);
    value = Math.imul(value ^ (salt | 0), 0x9E3779B1);
    value ^= value >>> 15;
    return (value >>> 0) / 4294967296;
  }

  function rect(context, x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(Math.round(x), Math.round(y), Math.max(1, Math.round(width)), Math.max(1, Math.round(height)));
  }

  function makeGrid(rows, columns, initialValue) {
    return Array.from({ length: rows }, function () {
      return Array.from({ length: columns }, function () { return initialValue; });
    });
  }

  function reserveArea(reserved, left, top, right, bottom) {
    for (var row = Math.max(1, top); row <= Math.min(reserved.length - 2, bottom); row += 1) {
      for (var column = Math.max(1, left); column <= Math.min(reserved[0].length - 2, right); column += 1) {
        reserved[row][column] = true;
      }
    }
  }

  function reserveCorridor(reserved, from, to, width) {
    var half = Math.max(0, Math.floor((width - 1) / 2));
    reserveArea(reserved, Math.min(from.column, to.column), from.row - half, Math.max(from.column, to.column), from.row + width - half - 1);
    reserveArea(reserved, to.column - half, Math.min(from.row, to.row), to.column + width - half - 1, Math.max(from.row, to.row));
  }

  function isBlockedCell(cells, column, row, bossMap) {
    if (row < 0 || row >= cells.length || column < 0 || column >= cells[0].length) { return true; }
    var blocked = ["#", "B", "I", "W"];
    return blocked.indexOf(cells[row][column]) !== -1;
  }

  function cellKey(cell) {
    return cell.column + "," + cell.row;
  }

  var Map = {
    tileSize: Config.tileSize,
    columns: Config.worldWidth / Config.tileSize,
    rows: Config.worldHeight / Config.tileSize,
    legend: Object.freeze({
      ".": "ground",
      "#": "wall",
      "B": "brick",
      "P": "playerSpawn",
      "E": "enemySpawn",
      "I": "identityWall",
      "S": "stonePlatform",
      "W": "water"
    }),

    create: function (options) {
      options = options || {};
      var baseSeed = Number.isFinite(Number(options.seed)) ? Number(options.seed) >>> 0 : 1;
      var level = Math.max(1, Math.floor(Number(options.level) || 1));
      var bossMap = Boolean(options.bossMap || options.mode === "brave" || (options.mode === "endless" && level % 10 === 0));
      var result = null;
      for (var attempt = 0; attempt < 8; attempt += 1) {
        result = this.generate(baseSeed, level, attempt, false, bossMap);
        if (this.validate(result).valid) { return result; }
      }
      result = this.generate(baseSeed, level, 8, true, bossMap);
      result.usedFallback = true;
      return result;
    },

    generate: function (baseSeed, level, attempt, fallback, bossMap) {
      var columns = this.columns;
      var rows = this.rows;
      var cells = makeGrid(rows, columns, ".");
      var reserved = makeGrid(rows, columns, false);
      var seed = (baseSeed + Math.imul(attempt + 1, 0x9E3779B1)) >>> 0;
      var random = createRng(seed);
      var centerColumn = Math.floor(columns / 2);
      var centerRow = Math.floor(rows / 2);
      var arenaCells = { left: centerColumn - 7, right: centerColumn + 6, top: centerRow - 5, bottom: centerRow + 4 };
      var playerCell = { column: centerColumn, row: rows - 4 };
      var enemyCells = [
        { column: centerColumn - 13, row: rows - 8 },
        { column: centerColumn + 13, row: rows - 8 },
        { column: centerColumn, row: 8 },
        { column: 8, row: centerRow },
        { column: columns - 9, row: centerRow },
        { column: 9, row: rows - 5 },
        { column: columns - 10, row: rows - 5 },
        { column: centerColumn - 7, row: 8 }
      ];
      var bossCell = { column: centerColumn, row: centerRow };
      var anchors = [playerCell, bossCell].concat(enemyCells);

      for (var row = 0; row < rows; row += 1) {
        for (var column = 0; column < columns; column += 1) {
          if (row === 0 || row === rows - 1 || column === 0 || column === columns - 1) {
            cells[row][column] = "#";
            reserved[row][column] = true;
          }
        }
      }

      reserveArea(reserved, arenaCells.left - 1, arenaCells.top - 1, arenaCells.right + 1, arenaCells.bottom + 1);
      reserveArea(reserved, 1, 1, columns - 2, 2);
      reserveArea(reserved, centerColumn - 1, 1, centerColumn, rows - 2);
      reserveArea(reserved, 1, centerRow - 1, columns - 2, centerRow);
      anchors.forEach(function (anchor) {
        reserveArea(reserved, anchor.column - 2, anchor.row - 2, anchor.column + 2, anchor.row + 2);
        reserveCorridor(reserved, anchor, bossCell, 2);
        reserveCorridor(reserved, anchor, { column: centerColumn, row: anchor.row }, 2);
      });

      if (!fallback) {
        // Water is placed as complete blobs before walls. This keeps a pool
        // visually continuous instead of letting obstacle placement punch
        // holes through its center.
        var poolCount = 6 + Math.min(4, Math.floor(level / 20));
        var placedPools = 0;
        for (var poolTry = 0; poolTry < poolCount * 24 && placedPools < poolCount; poolTry += 1) {
          var poolColumn = 4 + Math.floor(random() * (columns - 12));
          var poolRow = 5 + Math.floor(random() * (rows - 14));
          var poolWidth = 4 + Math.floor(random() * 4);
          var poolHeight = 3 + Math.floor(random() * 3);
          var candidate = [];
          var candidateValid = true;
          for (var poolRowOffset = 0; poolRowOffset < poolHeight; poolRowOffset += 1) {
            for (var poolColumnOffset = 0; poolColumnOffset < poolWidth; poolColumnOffset += 1) {
              var normalizedX = (poolColumnOffset + 0.5) / poolWidth * 2 - 1;
              var normalizedY = (poolRowOffset + 0.5) / poolHeight * 2 - 1;
              var edgeNoise = hash2(poolColumn + poolColumnOffset, poolRow + poolRowOffset, seed + 191) * 0.28;
              if (normalizedX * normalizedX + normalizedY * normalizedY > 1.18 + edgeNoise) { continue; }
              var waterColumn = poolColumn + poolColumnOffset;
              var waterRow = poolRow + poolRowOffset;
              if (reserved[waterRow][waterColumn] || cells[waterRow][waterColumn] !== ".") {
                candidateValid = false;
                break;
              }
              candidate.push({ column: waterColumn, row: waterRow });
            }
            if (!candidateValid) { break; }
          }
          if (!candidateValid || candidate.length < 8) { continue; }
          candidate.forEach(function (cell) { cells[cell.row][cell.column] = "W"; });
          placedPools += 1;
        }

        var density = Math.min(0.17, 0.09 + level * 0.0025);
        var targetCount = Math.floor(columns * rows * density);
        var placed = 0;
        var nearWater = function (column, row) {
          return [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]].some(function (direction) {
            return cells[row + direction[1]] && cells[row + direction[1]][column + direction[0]] === "W";
          });
        };
        for (var tries = 0; tries < targetCount * 8 && placed < targetCount; tries += 1) {
          var obstacleColumn = 1 + Math.floor(random() * (columns - 2));
          var obstacleRow = 1 + Math.floor(random() * (rows - 2));
          if (reserved[obstacleRow][obstacleColumn] || cells[obstacleRow][obstacleColumn] !== "." ||
              nearWater(obstacleColumn, obstacleRow)) { continue; }
          cells[obstacleRow][obstacleColumn] = random() < 0.46 ? "B" : "#";
          placed += 1;
          if (random() < 0.38) {
            var direction = [[1, 0], [-1, 0], [0, 1], [0, -1]][Math.floor(random() * 4)];
            var nextColumn = obstacleColumn + direction[0];
            var nextRow = obstacleRow + direction[1];
            if (!reserved[nextRow][nextColumn] && cells[nextRow][nextColumn] === "." &&
                !nearWater(nextColumn, nextRow)) {
              cells[nextRow][nextColumn] = random() < 0.52 ? "B" : "#";
              placed += 1;
            }
          }
        }

      }

      // A fallback still gets water, but in fixed side pockets away from lanes.
      if (fallback) {
        [[3, 4, 5, 3], [columns - 9, rows - 8, 6, 3], [columns - 15, 10, 5, 3]].forEach(function (poolSpec) {
          for (var fallbackRow = poolSpec[1]; fallbackRow < poolSpec[1] + poolSpec[3]; fallbackRow += 1) {
            for (var fallbackColumn = poolSpec[0]; fallbackColumn < poolSpec[0] + poolSpec[2]; fallbackColumn += 1) {
              if (!reserved[fallbackRow][fallbackColumn] && cells[fallbackRow][fallbackColumn] === ".") {
                cells[fallbackRow][fallbackColumn] = "W";
              }
            }
          }
        });
      }

      // The central arena is a real stone floor, rather than a dashed overlay.
      for (var platformRow = arenaCells.top; platformRow <= arenaCells.bottom; platformRow += 1) {
        for (var platformColumn = arenaCells.left; platformColumn <= arenaCells.right; platformColumn += 1) {
          cells[platformRow][platformColumn] = "S";
        }
      }

      var decorations = [];
      var decorationDensity = bossMap ? 0.029 : 0.012;
      var decorationKinds = bossMap ? ["deadGrass", "deadGrass", "scorchedRoot", "rock", "crate", "sandbag"] : ["rock", "bush", "crate", "sandbag"];
      for (var decorationIndex = 0; decorationIndex < Math.floor(columns * rows * decorationDensity); decorationIndex += 1) {
        var decorationColumn = 2 + Math.floor(random() * (columns - 4));
        var decorationRow = 3 + Math.floor(random() * (rows - 6));
        if (reserved[decorationRow][decorationColumn] || cells[decorationRow][decorationColumn] !== ".") { continue; }
        decorations.push({
          x: (decorationColumn + 0.5) * this.tileSize,
          y: (decorationRow + 0.5) * this.tileSize,
          kind: decorationKinds[Math.floor(random() * decorationKinds.length)],
          scale: 0.72 + random() * 0.42
        });
      }

      var firePatches = [];
      if (bossMap && !fallback) {
        for (var fireTry = 0; fireTry < 420 && firePatches.length < 22; fireTry += 1) {
          var fireColumn = 2 + Math.floor(random() * (columns - 4));
          var fireRow = 3 + Math.floor(random() * (rows - 6));
          if (reserved[fireRow][fireColumn] || cells[fireRow][fireColumn] !== ".") { continue; }
          var fireX = (fireColumn + 0.5) * this.tileSize;
          var fireY = (fireRow + 0.5) * this.tileSize;
          if (firePatches.some(function (patch) { return Math.hypot(patch.x - fireX, patch.y - fireY) < 82; })) { continue; }
          firePatches.push({ x: fireX, y: fireY, radius: 26 + Math.floor(random() * 10), seed: Math.floor(random() * 100000) });
        }
      }

      cells[2][12] = "B";

      cells[playerCell.row][playerCell.column] = "P";
      enemyCells.forEach(function (cell) { cells[cell.row][cell.column] = "E"; });
      cells[bossCell.row][bossCell.column] = "E";
      var worldMap = {
        cells: cells,
        decorations: decorations,
        obstacles: [],
        driedGround: [],
        obstacleGrid: makeGrid(rows, columns, null),
        navigationRevision: 0,
        seed: seed,
        baseSeed: baseSeed,
        generationAttempt: attempt,
        usedFallback: Boolean(fallback),
        isLargeWorld: true,
        isBossMap: Boolean(bossMap),
        terrainStyle: bossMap ? "battlefield-wasteland" : "pixel-campus",
        firePatches: firePatches,
        bossArena: {
          x: arenaCells.left * this.tileSize,
          y: arenaCells.top * this.tileSize,
          width: (arenaCells.right - arenaCells.left + 1) * this.tileSize,
          height: (arenaCells.bottom - arenaCells.top + 1) * this.tileSize,
          centerX: (centerColumn + 0.5) * this.tileSize,
          centerY: (centerRow + 0.5) * this.tileSize
        },
        playerSpawn: this.cellCenter(playerCell),
        bossSpawn: this.cellCenter(bossCell),
        enemySpawns: enemyCells.map(this.cellCenter.bind(this))
      };
      this.rebuildObstacles(worldMap);
      return worldMap;
    },

    cellCenter: function (cell) {
      return { x: (cell.column + 0.5) * this.tileSize, y: (cell.row + 0.5) * this.tileSize };
    },

    rebuildObstacles: function (worldMap) {
      worldMap.obstacles = [];
      worldMap.obstacleGrid = makeGrid(this.rows, this.columns, null);
      for (var row = 0; row < this.rows; row += 1) {
        for (var column = 0; column < this.columns; column += 1) {
          var kind = worldMap.cells[row][column];
          if (["#", "B", "I", "W"].indexOf(kind) === -1) { continue; }
          var obstacle = {
            x: column * this.tileSize,
            y: row * this.tileSize,
            width: this.tileSize,
            height: this.tileSize,
            kind: kind,
            column: column,
            row: row
          };
          worldMap.obstacles.push(obstacle);
          worldMap.obstacleGrid[row][column] = obstacle;
        }
      }
      worldMap._obstacleGridCount = worldMap.obstacles.length;
    },

    validate: function (worldMap) {
      var start = {
        column: Math.floor(worldMap.playerSpawn.x / this.tileSize),
        row: Math.floor(worldMap.playerSpawn.y / this.tileSize)
      };
      var queue = [start];
      var visited = Object.create(null);
      visited[cellKey(start)] = true;
      for (var index = 0; index < queue.length; index += 1) {
        var current = queue[index];
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (direction) {
          var column = current.column + direction[0];
          var row = current.row + direction[1];
          var next = { column: column, row: row };
          if (!visited[cellKey(next)] && !isBlockedCell(worldMap.cells, column, row)) {
            visited[cellKey(next)] = true;
            queue.push(next);
          }
        });
      }
      var anchors = [worldMap.bossSpawn].concat(worldMap.enemySpawns).map(function (point) {
        return { column: Math.floor(point.x / this.tileSize), row: Math.floor(point.y / this.tileSize) };
      }, this);
      var allReachable = anchors.every(function (anchor) { return Boolean(visited[cellKey(anchor)]); });
      var arenaClear = this.queryObstacles(worldMap, worldMap.bossArena.x, worldMap.bossArena.y,
        worldMap.bossArena.x + worldMap.bossArena.width, worldMap.bossArena.y + worldMap.bossArena.height).length === 0;
      var minimumReachable = Math.floor(this.columns * this.rows * 0.48);
      return {
        valid: allReachable && arenaClear && queue.length >= minimumReachable,
        allReachable: allReachable,
        arenaClear: arenaClear,
        reachableCells: queue.length
      };
    },

    queryObstacles: function (worldMap, minX, minY, maxX, maxY) {
      if (!worldMap.obstacleGrid || worldMap._obstacleGridCount !== worldMap.obstacles.length) {
        return (worldMap.obstacles || []).filter(function (obstacle) {
          return obstacle.x + obstacle.width >= minX && obstacle.x <= maxX &&
            obstacle.y + obstacle.height >= minY && obstacle.y <= maxY;
        });
      }
      var left = Math.max(0, Math.floor(minX / this.tileSize));
      var right = Math.min(this.columns - 1, Math.floor(maxX / this.tileSize));
      var top = Math.max(0, Math.floor(minY / this.tileSize));
      var bottom = Math.min(this.rows - 1, Math.floor(maxY / this.tileSize));
      var result = [];
      for (var row = top; row <= bottom; row += 1) {
        for (var column = left; column <= right; column += 1) {
          var obstacle = worldMap.obstacleGrid[row][column];
          if (obstacle) { result.push(obstacle); }
        }
      }
      return result;
    },

    circleCollides: function (worldMap, circle) {
      return this.queryObstacles(worldMap, circle.x - circle.radius, circle.y - circle.radius,
        circle.x + circle.radius, circle.y + circle.radius).some(function (obstacle) {
        return TankGame.Collision.circleIntersectsRectangle(circle, obstacle);
      });
    },

    findSegmentObstacle: function (worldMap, x1, y1, x2, y2, padding, ignoredObstacles) {
      var dx = x2 - x1;
      var dy = y2 - y1;
      var nearest = null;
      var nearestProgress = Infinity;
      this.queryObstacles(worldMap, Math.min(x1, x2) - padding, Math.min(y1, y2) - padding,
        Math.max(x1, x2) + padding, Math.max(y1, y2) + padding).forEach(function (obstacle) {
        if (obstacle.kind === "W" || (ignoredObstacles && ignoredObstacles.indexOf(obstacle) !== -1) ||
            !TankGame.Collision.segmentIntersectsRectangle(x1, y1, x2, y2, obstacle, padding)) { return; }
        var centerX = obstacle.x + obstacle.width / 2;
        var centerY = obstacle.y + obstacle.height / 2;
        var progress = dx * dx + dy * dy > 0 ? ((centerX - x1) * dx + (centerY - y1) * dy) / (dx * dx + dy * dy) : 0;
        if (progress < nearestProgress) {
          nearest = obstacle;
          nearestProgress = progress;
        }
      });
      return nearest;
    },

    findBreakableWallBetween: function (worldMap, x1, y1, x2, y2, padding) {
      var obstacle = this.findSegmentObstacle(worldMap, x1, y1, x2, y2, padding || 0);
      return obstacle && obstacle.kind === "B" ? obstacle : null;
    },

    removeObstacle: function (worldMap, obstacle) {
      var index = worldMap.obstacles.indexOf(obstacle);
      if (index !== -1) {
        worldMap.obstacles.splice(index, 1);
        worldMap.cells[obstacle.row][obstacle.column] = ".";
        if (worldMap.obstacleGrid && worldMap.obstacleGrid[obstacle.row]) {
          worldMap.obstacleGrid[obstacle.row][obstacle.column] = null;
        }
        worldMap.navigationRevision += 1;
        worldMap._obstacleGridCount = worldMap.obstacles.length;
      }
    },

    draw: function (context, worldMap, bounds) {
      var self = this;
      this.drawWater(context, worldMap, bounds);
      this.drawDriedGround(context, worldMap, bounds);
      this.drawDecorations(context, worldMap, bounds);
      this.drawStonePlatform(context, worldMap);
      var obstacles = bounds ? this.queryObstacles(worldMap, bounds.left, bounds.top, bounds.right, bounds.bottom) : worldMap.obstacles;
      obstacles.forEach(function (obstacle) {
        if (obstacle.kind !== "W") { self.drawObstacle(context, obstacle, worldMap); }
      });
      this.drawFirePatches(context, worldMap, bounds);
      this.drawSpawnMarkers(context, worldMap);
    },

    drawOverview: function (context, worldMap, bounds) {
      var self = this;
      var obstacles = this.queryObstacles(worldMap, bounds.left, bounds.top, bounds.right, bounds.bottom);
      context.save();
      context.globalAlpha = 0.88;
      context.fillStyle = worldMap.isBossMap ? "#514b44" : "#717970";
      if (worldMap.bossArena) {
        context.fillRect(worldMap.bossArena.x, worldMap.bossArena.y, worldMap.bossArena.width, worldMap.bossArena.height);
      }
      obstacles.forEach(function (obstacle) {
        if (obstacle.kind === "W") {
          context.fillStyle = worldMap.isBossMap ? "#554238" : "#3d7180";
        } else if (obstacle.kind === "B") {
          context.fillStyle = worldMap.isBossMap ? "#6b4432" : "#8a493d";
        } else if (obstacle.kind === "#" || obstacle.kind === "I") {
          context.fillStyle = worldMap.isBossMap ? "#3d3d3a" : "#6a7778";
        } else {
          context.fillStyle = "#56615e";
        }
        context.fillRect(obstacle.x + 2, obstacle.y + 2, obstacle.width - 4, obstacle.height - 4);
      });
      if (worldMap.bossArena) {
        context.strokeStyle = worldMap.isBossMap ? "#c29a6f" : "#d9e2d4";
        context.lineWidth = 12;
        context.strokeRect(worldMap.bossArena.x, worldMap.bossArena.y, worldMap.bossArena.width, worldMap.bossArena.height);
      }
      context.restore();
    },

    drawFirePatches: function (context, worldMap, bounds) {
      if (!worldMap.isBossMap) { return; }
      (worldMap.firePatches || []).forEach(function (patch) {
        if (bounds && (patch.x + patch.radius < bounds.left || patch.x - patch.radius > bounds.right || patch.y + patch.radius < bounds.top || patch.y - patch.radius > bounds.bottom)) { return; }
        var now = performance.now();
        context.save();
        context.globalAlpha = 0.42; context.fillStyle = "#7a2419"; context.shadowColor = "#ff4d1f"; context.shadowBlur = 18;
        context.beginPath(); context.arc(patch.x, patch.y, patch.radius * (0.9 + Math.sin(now / 150 + patch.seed) * 0.08), 0, Math.PI * 2); context.fill();
        for (var flameIndex = 0; flameIndex < 9; flameIndex += 1) {
          var angle = flameIndex * 0.73 + patch.seed; var distance = patch.radius * (0.22 + (flameIndex % 4) * 0.15);
          var flameX = patch.x + Math.cos(angle) * distance; var flameY = patch.y + Math.sin(angle) * distance;
          var flameHeight = 10 + (flameIndex % 3) * 5 + Math.sin(now / 110 + flameIndex) * 3;
          context.globalAlpha = 0.72; context.fillStyle = flameIndex % 2 ? "#ff9a32" : "#ffd166"; context.beginPath();
          context.moveTo(flameX, flameY + 9); context.quadraticCurveTo(flameX - 8, flameY - flameHeight * 0.1, flameX - 1, flameY - flameHeight); context.quadraticCurveTo(flameX + 8, flameY - flameHeight * 0.35, flameX, flameY + 9); context.fill();
        }
        context.restore();
      });
    },

    drawDriedGround: function (context, worldMap, bounds) {
      var size = this.tileSize;
      (worldMap.driedGround || []).forEach(function (cell) {
        if (bounds && (cell.x + size < bounds.left || cell.x > bounds.right ||
            cell.y + size < bounds.top || cell.y > bounds.bottom)) { return; }
        context.save();
        context.fillStyle = "#a88a4f";
        context.fillRect(cell.x, cell.y, size, size);
        context.fillStyle = "rgba(221, 190, 103, 0.5)";
        context.fillRect(cell.x + 5, cell.y + 7, size - 10, 4);
        context.strokeStyle = "rgba(86, 65, 38, 0.7)";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(cell.x + 10, cell.y + 18);
        context.lineTo(cell.x + 24, cell.y + 26);
        context.lineTo(cell.x + 17, cell.y + 39);
        context.moveTo(cell.x + 39, cell.y + 22);
        context.lineTo(cell.x + 31, cell.y + 34);
        context.lineTo(cell.x + 46, cell.y + 48);
        context.stroke();
        context.fillStyle = "rgba(231, 207, 126, 0.55)";
        context.fillRect(cell.x + 8, cell.y + 47, 4, 3);
        context.fillRect(cell.x + 42, cell.y + 11, 3, 3);
        context.restore();
      });
    },

    drawWater: function (context, worldMap, bounds) {
      var size = this.tileSize;
      var cells = worldMap.cells;
      var waterCells = (worldMap.obstacles || []).filter(function (obstacle) {
        return obstacle.kind === "W";
      });
      if (!waterCells.length) { return; }
      if (worldMap.isBossMap) { this.drawDriedRiverbed(context, worldMap, waterCells, bounds); return; }

      var waterAt = function (column, row) {
        return cells[row] && cells[row][column] === "W";
      };
      var minX = waterCells[0].x;
      var minY = waterCells[0].y;
      var maxX = waterCells[0].x + size;
      var maxY = waterCells[0].y + size;
      waterCells.forEach(function (cell) {
        minX = Math.min(minX, cell.x);
        minY = Math.min(minY, cell.y);
        maxX = Math.max(maxX, cell.x + size);
        maxY = Math.max(maxY, cell.y + size);
      });

      // Paint the whole water body as one clipped surface. Internal cell edges
      // never receive a bank or a separate wave line, so adjacent cells merge.
      context.save();
      context.beginPath();
      waterCells.forEach(function (cell) {
        context.rect(cell.x - 0.5, cell.y - 0.5, size + 1, size + 1);
      });
      context.clip();
      var gradient = context.createLinearGradient(0, minY, 0, maxY);
      gradient.addColorStop(0, "#2d89a5");
      gradient.addColorStop(0.5, "#176e90");
      gradient.addColorStop(1, "#0d5274");
      context.fillStyle = "#0b4668";
      context.fillRect(minX - 2, minY - 2, maxX - minX + 4, maxY - minY + 4);
      context.fillStyle = gradient;
      context.fillRect(minX - 2, minY - 2, maxX - minX + 4, maxY - minY + 4);

      context.lineCap = "round";
      for (var waveY = Math.floor(minY / 28) * 28 + 12; waveY <= maxY + 8; waveY += 28) {
        context.strokeStyle = waveY % 56 === 12 ? "rgba(170, 235, 229, 0.28)" : "rgba(94, 190, 205, 0.22)";
        context.lineWidth = waveY % 56 === 12 ? 2.2 : 1.5;
        context.beginPath();
        for (var waveX = minX - 12; waveX <= maxX + 12; waveX += 8) {
          var rippleY = waveY + Math.sin((waveX + worldMap.seed * 0.13 + waveY * 0.4) * 0.075) * 3.2;
          if (waveX === minX - 12) { context.moveTo(waveX, rippleY); } else { context.lineTo(waveX, rippleY); }
        }
        context.stroke();
      }
      context.fillStyle = "rgba(211, 244, 225, 0.18)";
      waterCells.forEach(function (cell) {
        if (hash2(cell.column, cell.row, worldMap.seed + 313) > 0.58) {
          context.fillRect(cell.x + 14, cell.y + 11, 14, 2);
          context.fillRect(cell.x + 33, cell.y + 11, 7, 2);
        }
      });
      context.restore();

      var bankDepth = function (column, row, salt) {
        return 8 + Math.round(hash2(column, row, worldMap.seed + salt) * 5);
      };
      var drawHorizontalBank = function (cell, top) {
        var edgeY = cell.y + (top ? 0 : size);
        var direction = top ? 1 : -1;
        var points = [];
        for (var offset = 0; offset <= size; offset += 10) {
          points.push({
            x: cell.x + offset,
            y: edgeY + direction * bankDepth(cell.column * 7 + offset, cell.row, 701)
          });
        }
        context.fillStyle = "#34382f";
        context.beginPath();
        context.moveTo(cell.x, edgeY - direction * 3);
        context.lineTo(cell.x + size, edgeY - direction * 3);
        for (var index = points.length - 1; index >= 0; index -= 1) { context.lineTo(points[index].x, points[index].y); }
        context.closePath();
        context.fill();
        context.fillStyle = "#756449";
        context.beginPath();
        context.moveTo(cell.x, edgeY - direction);
        context.lineTo(cell.x + size, edgeY - direction);
        for (var inner = points.length - 1; inner >= 0; inner -= 1) {
          context.lineTo(points[inner].x, points[inner].y - direction * 4);
        }
        context.closePath();
        context.fill();
        context.strokeStyle = "rgba(177, 231, 211, 0.58)";
        context.lineWidth = 2.5;
        context.beginPath();
        points.forEach(function (point, pointIndex) {
          if (pointIndex === 0) { context.moveTo(point.x, point.y); } else { context.lineTo(point.x, point.y); }
        });
        context.stroke();
      };
      var drawVerticalBank = function (cell, left) {
        var edgeX = cell.x + (left ? 0 : size);
        var direction = left ? 1 : -1;
        var points = [];
        for (var offset = 0; offset <= size; offset += 10) {
          points.push({
            x: edgeX + direction * bankDepth(cell.column, cell.row * 7 + offset, 907),
            y: cell.y + offset
          });
        }
        context.fillStyle = "#34382f";
        context.beginPath();
        context.moveTo(edgeX - direction * 3, cell.y);
        context.lineTo(edgeX - direction * 3, cell.y + size);
        for (var index = points.length - 1; index >= 0; index -= 1) { context.lineTo(points[index].x, points[index].y); }
        context.closePath();
        context.fill();
        context.fillStyle = "#756449";
        context.beginPath();
        context.moveTo(edgeX - direction, cell.y);
        context.lineTo(edgeX - direction, cell.y + size);
        for (var inner = points.length - 1; inner >= 0; inner -= 1) {
          context.lineTo(points[inner].x - direction * 4, points[inner].y);
        }
        context.closePath();
        context.fill();
        context.strokeStyle = "rgba(177, 231, 211, 0.52)";
        context.lineWidth = 2.5;
        context.beginPath();
        points.forEach(function (point, pointIndex) {
          if (pointIndex === 0) { context.moveTo(point.x, point.y); } else { context.lineTo(point.x, point.y); }
        });
        context.stroke();
      };

      context.save();
      context.lineJoin = "round";
      waterCells.forEach(function (cell) {
        if (!waterAt(cell.column, cell.row - 1)) { drawHorizontalBank(cell, true); }
        if (!waterAt(cell.column + 1, cell.row)) { drawVerticalBank(cell, false); }
        if (!waterAt(cell.column, cell.row + 1)) { drawHorizontalBank(cell, false); }
        if (!waterAt(cell.column - 1, cell.row)) { drawVerticalBank(cell, true); }
      });
      context.restore();
    },

    drawDriedRiverbed: function (context, worldMap, waterCells, bounds) {
      var size = this.tileSize;
      var cells = worldMap.cells;
      var isRiver = function (column, row) { return cells[row] && cells[row][column] === "W"; };
      var hash = function (column, row, salt) { return hash2(column, row, worldMap.seed + salt); };
      var minX = waterCells[0].x;
      var minY = waterCells[0].y;
      var maxX = waterCells[0].x + size;
      var maxY = waterCells[0].y + size;
      waterCells.forEach(function (cell) {
        minX = Math.min(minX, cell.x); minY = Math.min(minY, cell.y);
        maxX = Math.max(maxX, cell.x + size); maxY = Math.max(maxY, cell.y + size);
      });

      // Fill the connected riverbed as one clipped surface. Internal cell edges
      // never receive a border, so neighboring cells remain visually seamless.
      context.save();
      context.beginPath();
      waterCells.forEach(function (cell) { context.rect(cell.x, cell.y, size, size); });
      context.clip();
      context.fillStyle = "#28221f";
      context.fillRect(minX - 2, minY - 2, maxX - minX + 4, maxY - minY + 4);
      context.fillStyle = "#896b4f";
      context.fillRect(minX, minY, maxX - minX, maxY - minY);
      waterCells.forEach(function (cell) {
        context.fillStyle = hash(cell.column, cell.row, 817) > 0.5 ? "#a88763" : "#795b45";
        context.fillRect(cell.x + 1, cell.y + 1, size - 2, size - 2);
        context.strokeStyle = "rgba(67, 45, 34, 0.78)";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(cell.x + 7, cell.y + 25);
        context.lineTo(cell.x + 18, cell.y + 19);
        context.lineTo(cell.x + 28, cell.y + 31);
        context.lineTo(cell.x + 39, cell.y + 21);
        context.lineTo(cell.x + 52, cell.y + 29);
        context.moveTo(cell.x + 18, cell.y + 52);
        context.lineTo(cell.x + 25, cell.y + 40);
        context.lineTo(cell.x + 37, cell.y + 43);
        context.stroke();
        if (hash(cell.column, cell.row, 881) > 0.42) {
          context.fillStyle = "#4b382d";
          context.beginPath();
          context.moveTo(cell.x + 8, cell.y + 48);
          context.lineTo(cell.x + 19, cell.y + 38);
          context.lineTo(cell.x + 27, cell.y + 49);
          context.lineTo(cell.x + 42, cell.y + 39);
          context.lineTo(cell.x + 52, cell.y + 51);
          context.closePath();
          context.fill();
        }
      });
      context.restore();

      // Only the outside perimeter gets the recessed vertical bank.
      context.save();
      context.lineJoin = "round";
      waterCells.forEach(function (cell) {
        var north = !isRiver(cell.column, cell.row - 1);
        var east = !isRiver(cell.column + 1, cell.row);
        var south = !isRiver(cell.column, cell.row + 1);
        var west = !isRiver(cell.column - 1, cell.row);
        var drawHorizontalBank = function (top) {
          var edgeY = cell.y + (top ? 0 : size);
          var direction = top ? -1 : 1;
          var depth = 12 + Math.round(hash(cell.column * 7 + 1, cell.row * 5 + 2, top ? 991 : 997) * 7);
          context.fillStyle = "#2b211c";
          context.beginPath();
          context.moveTo(cell.x, edgeY);
          context.lineTo(cell.x + size, edgeY);
          context.lineTo(cell.x + size, edgeY + direction * depth);
          context.lineTo(cell.x, edgeY + direction * (depth - 3));
          context.closePath();
          context.fill();
          context.strokeStyle = "#9b7653";
          context.lineWidth = 3;
          context.beginPath();
          context.moveTo(cell.x, edgeY + direction * 2);
          context.lineTo(cell.x + 14, edgeY + direction * 5);
          context.lineTo(cell.x + 28, edgeY + direction * 3);
          context.lineTo(cell.x + 44, edgeY + direction * 7);
          context.lineTo(cell.x + size, edgeY + direction * 4);
          context.stroke();
        };
        var drawVerticalBank = function (left) {
          var edgeX = cell.x + (left ? 0 : size);
          var direction = left ? -1 : 1;
          var depth = 12 + Math.round(hash(cell.column * 3 + 4, cell.row * 9 + 3, left ? 1001 : 1007) * 7);
          context.fillStyle = "#2b211c";
          context.beginPath();
          context.moveTo(edgeX, cell.y);
          context.lineTo(edgeX, cell.y + size);
          context.lineTo(edgeX + direction * depth, cell.y + size);
          context.lineTo(edgeX + direction * (depth - 3), cell.y);
          context.closePath();
          context.fill();
          context.strokeStyle = "#9b7653";
          context.lineWidth = 3;
          context.beginPath();
          context.moveTo(edgeX + direction * 3, cell.y);
          context.lineTo(edgeX + direction * 6, cell.y + 14);
          context.lineTo(edgeX + direction * 3, cell.y + 30);
          context.lineTo(edgeX + direction * 7, cell.y + 46);
          context.lineTo(edgeX + direction * 4, cell.y + size);
          context.stroke();
        };
        if (north) { drawHorizontalBank(true); }
        if (east) { drawVerticalBank(false); }
        if (south) { drawHorizontalBank(false); }
        if (west) { drawVerticalBank(true); }
      });
      context.restore();
    },

    drawStonePlatform: function (context, worldMap) {
      var arena = worldMap.bossArena;
      var size = this.tileSize;
      context.save();
      context.fillStyle = "#26312f";
      context.fillRect(arena.x - 3, arena.y + 6, arena.width + 6, arena.height + 5);
      context.fillStyle = worldMap.isBossMap ? "#514b44" : "#717970";
      context.fillRect(arena.x, arena.y, arena.width, arena.height);
      context.fillStyle = worldMap.isBossMap ? "#84786a" : "#9da095";
      context.fillRect(arena.x + 5, arena.y + 5, arena.width - 10, arena.height - 10);
      for (var row = 0; row < arena.height / size; row += 1) {
        for (var column = 0; column < arena.width / size; column += 1) {
          var tileX = arena.x + column * size;
          var tileY = arena.y + row * size;
          var tone = hash2(column, row, worldMap.seed + 71);
          context.fillStyle = tone > 0.66 ? "rgba(230, 224, 198, 0.16)" : "rgba(48, 57, 54, 0.08)";
          context.fillRect(tileX + 8, tileY + 8, size - 16, size - 16);
          context.strokeStyle = "rgba(46, 54, 51, 0.42)";
          context.lineWidth = 2;
          context.beginPath();
          context.moveTo(tileX + 1, tileY + size - 2);
          context.lineTo(tileX + size - 2, tileY + size - 2);
          context.moveTo(tileX + size - 2, tileY + 2);
          context.lineTo(tileX + size - 2, tileY + size - 2);
          context.stroke();
          context.strokeStyle = "rgba(246, 241, 215, 0.44)";
          context.beginPath();
          context.moveTo(tileX + 4, tileY + 3);
          context.lineTo(tileX + size - 4, tileY + 3);
          context.moveTo(tileX + 3, tileY + 4);
          context.lineTo(tileX + 3, tileY + size - 5);
          context.stroke();
          if (tone < (worldMap.isBossMap ? 0.64 : 0.32)) {
            context.strokeStyle = worldMap.isBossMap ? "rgba(42, 29, 24, 0.8)" : "rgba(54, 61, 57, 0.42)";
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(tileX + 14, tileY + 19);
            context.lineTo(tileX + 20, tileY + 25);
            context.lineTo(tileX + 17, tileY + 34);
            context.lineTo(tileX + 27, tileY + 41);
            context.stroke();
          }
        }
      }
      context.strokeStyle = worldMap.isBossMap ? "rgba(211, 165, 108, 0.42)" : "rgba(231, 237, 224, 0.75)";
      context.lineWidth = 3;
      context.strokeRect(arena.x + 4.5, arena.y + 4.5, arena.width - 9, arena.height - 9);
      context.strokeStyle = worldMap.isBossMap ? "rgba(31, 23, 20, 0.86)" : "rgba(29, 37, 35, 0.6)";
      context.lineWidth = 5;
      context.strokeRect(arena.x + 1.5, arena.y + 1.5, arena.width - 3, arena.height - 3);
      context.restore();
    },

    drawDecorations: function (context, worldMap, bounds) {
      (worldMap.decorations || []).forEach(function (decoration) {
        if (bounds && (decoration.x < bounds.left || decoration.x > bounds.right ||
            decoration.y < bounds.top || decoration.y > bounds.bottom)) { return; }
        var scale = decoration.scale || 1;
        context.save();
        context.translate(decoration.x, decoration.y);
        context.scale(scale, scale);
        context.shadowColor = "rgba(0, 0, 0, 0.5)";
        context.shadowBlur = 7;
        context.shadowOffsetY = 6;
        if (decoration.kind === "rock") {
          context.fillStyle = "#202a29";
          context.beginPath();
          context.moveTo(-19, 13); context.lineTo(-16, -7); context.lineTo(-4, -16);
          context.lineTo(8, -14); context.lineTo(19, -3); context.lineTo(14, 14);
          context.lineTo(-4, 17); context.closePath(); context.fill();
          context.fillStyle = "#52605a";
          context.beginPath();
          context.moveTo(-13, -5); context.lineTo(-4, -12); context.lineTo(7, -10);
          context.lineTo(12, -2); context.lineTo(4, 3); context.lineTo(-7, 2); context.closePath(); context.fill();
          context.fillStyle = "rgba(181, 191, 169, 0.48)";
          context.fillRect(-7, -9, 8, 3);
          context.fillRect(5, -5, 5, 3);
        } else if (decoration.kind === "bush") {
          context.fillStyle = "#112b20";
          context.beginPath(); context.arc(-10, 3, 13, 0, Math.PI * 2); context.arc(7, 1, 15, 0, Math.PI * 2); context.arc(0, -9, 12, 0, Math.PI * 2); context.fill();
          context.fillStyle = "#2f6338";
          context.beginPath(); context.arc(-9, 0, 8, 0, Math.PI * 2); context.arc(3, -8, 8, 0, Math.PI * 2); context.arc(10, 4, 8, 0, Math.PI * 2); context.fill();
          context.fillStyle = "#68a047";
          context.fillRect(-9, -8, 5, 3); context.fillRect(1, -14, 5, 3); context.fillRect(7, -1, 5, 3);
          context.fillStyle = "rgba(9, 34, 21, 0.8)";
          context.fillRect(-14, 8, 25, 5);
        } else if (decoration.kind === "deadGrass") {
          context.shadowBlur = 5;
          context.strokeStyle = "#9e845e";
          context.lineWidth = 3;
          context.beginPath();
          context.moveTo(-14, 15); context.lineTo(-7, -14);
          context.moveTo(-4, 16); context.lineTo(1, -19);
          context.moveTo(5, 15); context.lineTo(13, -13);
          context.moveTo(12, 15); context.lineTo(19, -7);
          context.stroke();
        } else if (decoration.kind === "scorchedRoot") {
          context.strokeStyle = "#3a2922";
          context.lineWidth = 5;
          context.beginPath();
          context.moveTo(-3, 18); context.lineTo(-5, -4); context.lineTo(-19, -19);
          context.moveTo(-5, 0); context.lineTo(10, -17);
          context.moveTo(-4, 8); context.lineTo(15, 1);
          context.stroke();
        } else if (decoration.kind === "crate") {
          context.fillStyle = "#573b2c"; context.fillRect(-16, -16, 32, 32);
          context.fillStyle = "#8f5f3d"; context.fillRect(-13, -13, 26, 26);
          context.strokeStyle = "#d39a5f"; context.lineWidth = 2; context.strokeRect(-13, -13, 26, 26);
          context.strokeStyle = "rgba(48, 30, 23, 0.8)"; context.lineWidth = 4;
          context.beginPath(); context.moveTo(-12, -12); context.lineTo(12, 12); context.moveTo(12, -12); context.lineTo(-12, 12); context.stroke();
          context.fillStyle = "rgba(245, 183, 104, 0.4)"; context.fillRect(-11, -11, 7, 3); context.fillRect(5, 5, 6, 3);
        } else {
          context.fillStyle = "#5a3829"; context.fillRect(-17, -12, 34, 24);
          context.fillStyle = "#9b6546"; context.fillRect(-15, -10, 30, 20);
          context.strokeStyle = "#ddb075"; context.lineWidth = 2; context.strokeRect(-14, -9, 28, 18);
          context.strokeStyle = "rgba(55, 35, 26, 0.8)";
          context.beginPath(); context.moveTo(-8, -9); context.lineTo(-8, 9); context.moveTo(0, -9); context.lineTo(0, 9); context.moveTo(8, -9); context.lineTo(8, 9); context.stroke();
          context.fillStyle = "#d9a06b"; context.fillRect(-12, -7, 4, 3); context.fillRect(0, -7, 4, 3); context.fillRect(8, -7, 4, 3);
        }
        context.restore();
      });
    },

    drawBossFence: function (context, obstacle, breakable) {
      var x = obstacle.x;
      var y = obstacle.y;
      var size = this.tileSize;
      context.save();
      context.shadowColor = "rgba(0, 0, 0, 0.7)";
      context.shadowBlur = 0;
      context.shadowOffsetX = 5;
      context.shadowOffsetY = 7;
      context.fillStyle = "#241c19";
      context.fillRect(x + 3, y + 7, size - 4, size - 5);
      context.shadowColor = "transparent";
      if (breakable) {
        context.fillStyle = "#6d4930";
        context.fillRect(x + 5, y + 5, size - 10, size - 11);
        context.strokeStyle = "#c18a52";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(x + 9, y + 52); context.lineTo(x + 20, y + 8);
        context.moveTo(x + 30, y + 54); context.lineTo(x + 35, y + 6);
        context.moveTo(x + 50, y + 52); context.lineTo(x + 46, y + 8);
        context.stroke();
        context.strokeStyle = "rgba(39, 26, 20, 0.8)";
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(x + 4, y + 22); context.lineTo(x + 56, y + 29);
        context.moveTo(x + 4, y + 40); context.lineTo(x + 56, y + 34);
        context.stroke();
        context.strokeStyle = "rgba(236, 179, 105, 0.5)";
        context.lineWidth = 1.5;
        context.strokeRect(x + 7, y + 7, size - 14, size - 14);
      } else {
        context.fillStyle = "#3d4545";
        context.fillRect(x + 6, y + 6, size - 12, size - 12);
        context.strokeStyle = "#9da6a2";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(x + 10, y + 54); context.lineTo(x + 10, y + 6);
        context.moveTo(x + 30, y + 54); context.lineTo(x + 30, y + 6);
        context.moveTo(x + 50, y + 54); context.lineTo(x + 50, y + 6);
        context.stroke();
        context.strokeStyle = "#202827";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(x + 5, y + 18); context.lineTo(x + 55, y + 18);
        context.moveTo(x + 5, y + 39); context.lineTo(x + 55, y + 39);
        context.stroke();
        context.strokeStyle = "rgba(223, 233, 222, 0.42)";
        context.lineWidth = 1.5;
        context.strokeRect(x + 7, y + 7, size - 14, size - 14);
      }
      context.restore();
    },

    drawObstacle: function (context, obstacle, worldMap) {
      var x = obstacle.x;
      var y = obstacle.y;
      var size = this.tileSize;
      context.save();
      if (worldMap && worldMap.isBossMap && ["#", "B", "I"].indexOf(obstacle.kind) !== -1) {
        context.restore();
        this.drawBossFence(context, obstacle, obstacle.kind === "B");
        return;
      }
      if (obstacle.kind === "#") {
        context.shadowColor = "rgba(0, 0, 0, 0.6)"; context.shadowBlur = 0; context.shadowOffsetX = 5; context.shadowOffsetY = 6;
        context.fillStyle = "#253137"; context.fillRect(x + 2, y + 4, size - 4, size - 4);
        context.shadowColor = "transparent";
        context.fillStyle = "#9aa6a7"; context.fillRect(x + 2, y + 2, size - 4, size - 7);
        context.fillStyle = "#5e6c70"; context.fillRect(x + 7, y + 9, size - 14, size - 16);
        context.fillStyle = "#77868a"; context.fillRect(x + 10, y + 12, size - 20, 4);
        context.strokeStyle = "rgba(232, 245, 241, 0.72)"; context.lineWidth = 2;
        context.strokeRect(x + 3.5, y + 3.5, size - 7, size - 8);
        context.strokeStyle = "rgba(29, 42, 46, 0.65)"; context.lineWidth = 2;
        context.strokeRect(x + 7.5, y + 9.5, size - 15, size - 17);
        context.strokeStyle = "rgba(194, 210, 207, 0.5)";
        context.beginPath(); context.moveTo(x + 16, y + 25); context.lineTo(x + 26, y + 17); context.moveTo(x + 35, y + 41); context.lineTo(x + 47, y + 30); context.stroke();
      } else if (obstacle.kind === "B") {
        context.fillStyle = "rgba(37, 25, 22, 0.68)"; context.fillRect(x + 4, y + 8, size - 2, size - 4);
        context.fillStyle = "#773b30"; context.fillRect(x + 3, y + 3, size - 7, size - 7);
        context.fillStyle = "#ad5a43"; context.fillRect(x + 6, y + 6, size - 13, size - 13);
        context.fillStyle = "rgba(225, 132, 88, 0.5)"; context.fillRect(x + 7, y + 7, size - 15, 4);
        context.strokeStyle = "#e18b61"; context.lineWidth = 2; context.strokeRect(x + 4.5, y + 4.5, size - 10, size - 10);
        context.strokeStyle = "rgba(82, 38, 31, 0.85)"; context.lineWidth = 3;
        context.beginPath();
        context.moveTo(x + 5, y + 30); context.lineTo(x + 55, y + 30);
        context.moveTo(x + 30, y + 5); context.lineTo(x + 30, y + 30);
        context.moveTo(x + 12, y + 55); context.lineTo(x + 12, y + 31);
        context.moveTo(x + 45, y + 55); context.lineTo(x + 45, y + 31);
        context.stroke();
        context.fillStyle = "rgba(69, 35, 30, 0.42)"; context.fillRect(x + 9, y + 16, 6, 3); context.fillRect(x + 35, y + 42, 9, 3);
      } else if (obstacle.kind === "S") {
        context.fillStyle = "#3d4745";
        context.fillRect(x + 1, y + 1, size - 2, size - 2);
        context.fillStyle = "#9a9d95";
        context.fillRect(x + 5, y + 5, size - 10, size - 10);
        context.strokeStyle = "rgba(241, 238, 216, 0.3)";
        context.lineWidth = 2;
        context.strokeRect(x + 7, y + 7, size - 14, size - 14);
        context.fillStyle = "rgba(57, 66, 63, 0.2)";
        context.fillRect(x + 14, y + 20, 14, 3);
        context.fillRect(x + 35, y + 40, 10, 3);
      } else if (obstacle.kind === "W") {
        var cells = worldMap && worldMap.cells;
        var row = obstacle.row;
        var column = obstacle.column;
        var waterAt = function (nextColumn, nextRow) {
          return cells && cells[nextRow] && cells[nextRow][nextColumn] === "W";
        };
        var northEdge = !waterAt(column, row - 1);
        var eastEdge = !waterAt(column + 1, row);
        var southEdge = !waterAt(column, row + 1);
        var westEdge = !waterAt(column - 1, row);
        var waterGradient = context.createLinearGradient(0, 0, 0, Config.worldHeight);
        waterGradient.addColorStop(0, "#267f9c");
        waterGradient.addColorStop(0.55, "#176b8d");
        waterGradient.addColorStop(1, "#0f5679");

        // Fill every water cell edge-to-edge. Only the outside perimeter receives
        // a bank, so connected cells read as one continuous body of water.
        context.fillStyle = "#0c496b";
        context.fillRect(x, y, size, size);
        context.fillStyle = waterGradient;
        context.fillRect(x, y, size, size);
        context.fillStyle = "rgba(91, 185, 195, 0.08)";
        context.fillRect(x, y + 2, size, size - 4);

        context.strokeStyle = "rgba(139, 226, 226, 0.48)";
        context.lineWidth = 2;
        [19, 43].forEach(function (waveOffset, waveIndex) {
          var waveY = y + waveOffset;
          context.beginPath();
          for (var pointX = x; pointX <= x + size; pointX += 6) {
            var pointY = waveY + Math.sin((pointX + waveY * 0.35 + worldMap.seed * 0.07 + waveIndex * 31) * 0.105) * 3;
            if (pointX === x) { context.moveTo(pointX, pointY); } else { context.lineTo(pointX, pointY); }
          }
          context.stroke();
        });

        context.fillStyle = "rgba(150, 225, 217, 0.25)";
        if (hash2(column, row, worldMap.seed + 313) > 0.48) {
          context.fillRect(x + 17, y + 10, 11, 2);
          context.fillRect(x + 31, y + 10, 5, 2);
        }

        var drawHorizontalBank = function (top) {
          var edgeY = top ? y : y + size;
          var direction = top ? 1 : -1;
          context.fillStyle = "#3b352c";
          context.fillRect(x, edgeY - (top ? 0 : 7), size, 7);
          context.fillStyle = "#776044";
          context.fillRect(x, edgeY + direction * 2 - (top ? 0 : 6), size, 5);
          context.strokeStyle = "#ae9465";
          context.lineWidth = 2;
          context.beginPath();
          context.moveTo(x, edgeY + direction * 7);
          context.lineTo(x + 13, edgeY + direction * 9);
          context.lineTo(x + 27, edgeY + direction * 7);
          context.lineTo(x + 43, edgeY + direction * 10);
          context.lineTo(x + size, edgeY + direction * 7);
          context.stroke();
          context.strokeStyle = "rgba(132, 208, 194, 0.52)";
          context.lineWidth = 3;
          context.beginPath();
          context.moveTo(x, edgeY + direction * 12);
          context.lineTo(x + size, edgeY + direction * 12);
          context.stroke();
        };
        var drawVerticalBank = function (left) {
          var edgeX = left ? x : x + size;
          var direction = left ? 1 : -1;
          context.fillStyle = "#3b352c";
          context.fillRect(edgeX - (left ? 0 : 7), y, 7, size);
          context.fillStyle = "#776044";
          context.fillRect(edgeX + direction * 2 - (left ? 0 : 6), y, 5, size);
          context.strokeStyle = "#9f865d";
          context.lineWidth = 2;
          context.beginPath();
          context.moveTo(edgeX + direction * 7, y);
          context.lineTo(edgeX + direction * 9, y + 14);
          context.lineTo(edgeX + direction * 7, y + 30);
          context.lineTo(edgeX + direction * 10, y + 45);
          context.lineTo(edgeX + direction * 7, y + size);
          context.stroke();
          context.strokeStyle = "rgba(132, 208, 194, 0.46)";
          context.lineWidth = 3;
          context.beginPath();
          context.moveTo(edgeX + direction * 12, y);
          context.lineTo(edgeX + direction * 12, y + size);
          context.stroke();
        };

        if (northEdge) { drawHorizontalBank(true); }
        if (eastEdge) { drawVerticalBank(false); }
        if (southEdge) { drawHorizontalBank(false); }
        if (westEdge) { drawVerticalBank(true); }
      }
      context.restore();
    },

    drawSpawnMarkers: function (context, worldMap) {
      context.save();
      context.strokeStyle = "rgba(140, 246, 195, 0.42)";
      context.lineWidth = 2;
      context.beginPath();
      context.arc(worldMap.playerSpawn.x, worldMap.playerSpawn.y, 31, 0, Math.PI * 2);
      context.stroke();
      context.fillStyle = "rgba(140, 246, 195, 0.12)";
      context.fill();
      context.restore();
    }
  };

  TankGame.Map = Map;
}());
