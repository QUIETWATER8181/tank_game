from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "images" / "cinematic" / "helicopter-reference-primary.jpg"
OUTPUT = ROOT / "assets" / "images" / "cinematic" / "helicopter-body.png"


BODY_POLYGONS = [
    [
        (39, 307), (89, 288), (111, 276), (362, 278), (383, 255), (403, 245),
        (409, 231), (474, 219), (552, 219), (585, 225), (641, 225), (685, 242),
        (737, 278), (739, 310), (717, 337), (680, 354), (596, 364), (536, 378),
        (468, 374), (407, 351), (362, 347), (111, 350), (91, 337), (40, 325),
    ],
    [(111, 228), (148, 225), (150, 278), (153, 280), (153, 350), (150, 402), (113, 403), (112, 351), (108, 349), (108, 279)],
    [(474, 195), (523, 194), (523, 221), (545, 221), (548, 272), (533, 289), (466, 290), (451, 277), (456, 224), (474, 224)],
    [(456, 315), (472, 301), (537, 301), (548, 316), (545, 370), (523, 370), (523, 434), (476, 434), (476, 370), (455, 370)],
]


def build_mask(size):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    for polygon in BODY_POLYGONS:
        draw.polygon(polygon, fill=255)
    return mask.filter(ImageFilter.GaussianBlur(1.15))


def suppress_background(source, mask):
    source_pixels = source.load()
    mask_pixels = mask.load()
    for y in range(source.height):
        for x in range(source.width):
            alpha = mask_pixels[x, y]
            if alpha == 0:
                continue
            r, g, b, _ = source_pixels[x, y]
            green_background = g > 48 and g - r > 19 and g - b > 8
            water_background = b > 72 and b - r > 35 and b - g > 18
            if green_background or water_background:
                mask_pixels[x, y] = 0
    return mask.filter(ImageFilter.GaussianBlur(0.55))


def build():
    source = Image.open(SOURCE).convert("RGBA")
    if source.width != 807 or source.height < 539:
        raise ValueError(f"Unexpected reference size: {source.size}")

    mask = suppress_background(source, build_mask(source.size))
    extracted = source.copy()
    extracted.putalpha(mask)
    extracted = extracted.crop((30, 185, 750, 445))
    extracted = ImageOps.mirror(extracted)
    extracted.thumbnail((620, 228), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (640, 320), (0, 0, 0, 0))
    x = (canvas.width - extracted.width) // 2
    y = (canvas.height - extracted.height) // 2
    canvas.alpha_composite(extracted, (x, y))
    canvas.save(OUTPUT, optimize=True)
    print(f"{OUTPUT.relative_to(ROOT)} size={canvas.size} source={SOURCE.name}")


if __name__ == "__main__":
    build()
