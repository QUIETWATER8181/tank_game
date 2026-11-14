"""Print an ASCII silhouette and brightness stats for a screenshot.

Usage: python tools/pseudo3d/silhouette.py <png> [--cols=110] [--rows=45] [--crop=l,t,r,b]
       [--threshold=110] [--invert]

Bright pixels become '#'. Useful when the reviewing model cannot see images:
the silhouette plus the stats below are enough to check that the barrel, turret,
running gear and ground contact read correctly.
"""
import sys
from PIL import Image

args = sys.argv[1:]
if not args:
    raise SystemExit(__doc__)
path = args[0]
opts = {}
for arg in args[1:]:
    if arg.startswith("--"):
        key, _, value = arg[2:].partition("=")
        opts[key] = value if value else True

cols = int(opts.get("cols", 110))
rows = int(opts.get("rows", 45))
threshold = float(opts.get("threshold", 110))
invert = "invert" in opts

img = Image.open(path).convert("RGB")
if "crop" in opts:
    img = img.crop(tuple(int(v) for v in opts["crop"].split(",")))
full = img
small = img.resize((cols, rows), Image.LANCZOS)

print(f"# {path}  {full.width}x{full.height}")
for y in range(rows):
    line = []
    for x in range(cols):
        r, g, b = small.getpixel((x, y))
        lum = (r + g + b) / 3
        lit = lum < threshold if invert else lum > threshold
        line.append("#" if lit else ".")
    print("".join(line))

pixels = list(full.getdata())
lum = [(r + g + b) / 3 for r, g, b in pixels]
lum.sort()
n = len(lum)
mean = sum(lum) / n
p = lambda q: lum[min(n - 1, int(q * n))]
print(
    "# stats mean=%.1f median=%.1f p05=%.1f p95=%.1f bright%%=%.2f dark%%=%.2f"
    % (mean, p(0.5), p(0.05), p(0.95),
       100.0 * sum(1 for v in lum if v > 235) / n,
       100.0 * sum(1 for v in lum if v < 16) / n)
)
