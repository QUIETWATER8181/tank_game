"""Compose per-part silhouettes into one ASCII part map.

Render one screenshot per part with `?solo=<partId>` (the camera is locked to the
whole tank, so the images line up), then:

  python tools/pseudo3d/part-map.py --view=side --part=hull:H:path.png ...

Each cell shows the letter of the frontmost part covering it, so pass parts from
back to front (tracks, hull, engine, turret, weapon).
"""
import sys
from PIL import Image

args = sys.argv[1:]
opts = {"cols": 104, "rows": 34, "threshold": 110}
layers = []
for arg in args:
    if not arg.startswith("--"):
        continue
    key, _, value = arg[2:].partition("=")
    if key == "part":
        label, _, path = value.partition(":")
        layers.append((label[:1], path))
    elif key == "view":
        opts["view"] = value
    elif key in opts:
        opts[key] = int(value)

cols, rows, threshold = opts["cols"], opts["rows"], opts["threshold"]
grid = [["." for _ in range(cols)] for _ in range(rows)]
shares = {}
for label, path in layers:
    small = Image.open(path).convert("RGB").resize((cols, rows), Image.LANCZOS)
    hit = 0
    for y in range(rows):
        for x in range(cols):
            r, g, b = small.getpixel((x, y))
            if (r + g + b) / 3 > threshold:
                grid[y][x] = label
                hit += 1
    shares[label] = hit

print(f"# part map ({opts.get('view', '?')}) {cols}x{rows}  " + " ".join(f"{k}={v}" for k, v in shares.items()))
for row in grid:
    print("".join(row))
