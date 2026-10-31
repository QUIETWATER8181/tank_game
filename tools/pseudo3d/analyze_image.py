"""参考图分析：把任意一张参考截图（PNG/JPG）拆成可复用的数字。

用途：拿到别的游戏/别的美术的截图时，不用「感觉像不像」，
直接量出调色板、明度分布、局部对比、边缘密度，再拿我们的渲染图对同一组数字。

用法：
    python tools/pseudo3d/analyze_image.py <图片> [<图片2> ...]
    python tools/pseudo3d/analyze_image.py --map <图片>      # 额外打一张字符图
"""

import sys
import warnings
from collections import Counter

from PIL import Image

warnings.filterwarnings("ignore", category=DeprecationWarning)


def load(path):
    image = Image.open(path)
    if image.mode in ("RGBA", "LA", "P"):
        image = image.convert("RGBA")
        background = Image.new("RGBA", image.size, (0, 0, 0, 0))
        background.alpha_composite(image)
        image = background
    return image.convert("RGB")


def luma(pixel):
    return 0.2126 * pixel[0] + 0.7152 * pixel[1] + 0.0722 * pixel[2]


def palette(image, count=8, bucket=24):
    """按 bucket 量化后取占比最高的颜色（跳过近黑，避免把透明底算进去）。"""
    pixels = image.resize((min(image.width, 320), min(image.height, 320))).getdata()
    counter = Counter()
    for pixel in pixels:
        if luma(pixel) < 6:
            continue
        key = (pixel[0] // bucket * bucket, pixel[1] // bucket * bucket, pixel[2] // bucket * bucket)
        counter[key] += 1
    total = sum(counter.values()) or 1
    return [(key, value / total) for key, value in counter.most_common(count)]


def stats(image):
    pixels = list(image.resize((min(image.width, 480), min(image.height, 480))).getdata())
    values = [luma(pixel) for pixel in pixels]
    mean = sum(values) / len(values)
    variance = sum((value - mean) ** 2 for value in values) / len(values)
    return {
        "mean": mean,
        "sd": variance ** 0.5,
        "dark": sum(1 for value in values if value < 40) / len(values),
        "bright": sum(1 for value in values if value > 180) / len(values),
    }


def local_contrast(image, step=1):
    """相邻像素亮度差的平均值，越小越「平」。"""
    small = image.resize((min(image.width, 480), min(image.height, 480)))
    width, height = small.size
    pixels = small.load()
    total = 0.0
    samples = 0
    for y in range(0, height - step, step):
        for x in range(0, width - step, step):
            here = luma(pixels[x, y])
            total += abs(here - luma(pixels[x + step, y])) + abs(here - luma(pixels[x, y + step]))
            samples += 2
    return total / max(1, samples)


def hue_histogram(image, bins=12):
    small = image.resize((min(image.width, 320), min(image.height, 320)))
    counter = [0] * bins
    for pixel in small.getdata():
        if luma(pixel) < 18:
            continue
        red, green, blue = [value / 255 for value in pixel]
        high = max(red, green, blue)
        low = min(red, green, blue)
        if high == low:
            continue
        delta = high - low
        if high == red:
            hue = ((green - blue) / delta) % 6
        elif high == green:
            hue = (blue - red) / delta + 2
        else:
            hue = (red - green) / delta + 4
        counter[int(hue / 6 * bins) % bins] += 1
    total = sum(counter) or 1
    return [value / total for value in counter]


def ascii_map(image, columns=72):
    small = image.resize((columns, max(1, int(columns * image.height / image.width / 2.1))))
    ramp = " .:-=+*#%@"
    lines = []
    for y in range(small.height):
        line = []
        for x in range(small.width):
            value = luma(small.getpixel((x, y))) / 255
            line.append(ramp[min(len(ramp) - 1, int(value * len(ramp)))])
        lines.append("".join(line))
    return lines


def report(path, show_map=False):
    image = load(path)
    print("=== " + path + "  (%dx%d)" % image.size)
    values = stats(image)
    print("  平均明度 %.1f   明度标准差 %.1f   暗部占比 %.1f%%   亮部占比 %.1f%%"
          % (values["mean"], values["sd"], values["dark"] * 100, values["bright"] * 100))
    print("  局部对比 %.2f" % local_contrast(image))
    hues = hue_histogram(image)
    print("  色相分布 " + " ".join("%d°:%.0f%%" % (index * 30, value * 100) for index, value in enumerate(hues) if value > 0.02))
    print("  主要颜色")
    for color, share in palette(image):
        print("    #%02x%02x%02x  %.1f%%" % (color[0], color[1], color[2], share * 100))
    if show_map:
        for line in ascii_map(image):
            print("  " + line)
    print()


if __name__ == "__main__":
    arguments = [item for item in sys.argv[1:] if item != "--map"]
    show_map = "--map" in sys.argv
    if not arguments:
        print(__doc__)
        raise SystemExit(1)
    for item in arguments:
        report(item, show_map)
