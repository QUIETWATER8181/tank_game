from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "assets" / "images" / "tanks" / "source"
OUTPUT_DIR = ROOT / "assets" / "images" / "tanks"
CANVAS_SIZE = 512
CANVAS_CENTER = CANVAS_SIZE // 2


TANKS = {
    "enemy": {
        "source": "enemy-normal.jpg",
        "pivot": (116, 76),
        "hull_polygon": [(3, 26), (18, 14), (166, 14), (190, 30), (194, 123), (175, 139), (17, 139), (2, 126)],
        "turret_polygons": [
            [(75, 38), (139, 31), (164, 47), (170, 91), (151, 114), (90, 113), (70, 95), (69, 55)],
            [(139, 65), (245, 65), (245, 81), (139, 81)],
        ],
        "deck_shape": (71, 37, 169, 115),
        "deck_color": (190, 183, 161, 255),
        "deck_line": (112, 108, 97, 220),
    },
    "boss": {
        "source": "enemy-boss.jpg",
        "pivot": (198, 113),
        "hull_polygon": [(9, 49), (46, 29), (278, 31), (313, 57), (319, 169), (282, 199), (43, 199), (4, 172)],
        "turret_polygons": [
            [(121, 51), (237, 38), (288, 66), (300, 139), (260, 169), (140, 169), (105, 135), (104, 78)],
            [(248, 92), (385, 93), (385, 127), (248, 130)],
        ],
        "deck_shape": (104, 45, 296, 174),
        "deck_color": (127, 128, 120, 255),
        "deck_line": (76, 77, 72, 230),
        "remove_green": True,
    },
    "elite": {
        "source": "enemy-elite.jpg",
        "pivot": (245, 205),
        "hull_polygon": [(24, 75), (77, 42), (402, 43), (457, 83), (468, 315), (414, 363), (79, 363), (24, 319)],
        "turret_polygons": [
            [(143, 86), (326, 75), (376, 126), (378, 277), (326, 326), (158, 326), (112, 276), (112, 139)],
            [(318, 176), (492, 176), (492, 207), (318, 207)],
            [(318, 238), (492, 238), (492, 272), (318, 272)],
        ],
        "deck_shape": (111, 82, 380, 329),
        "deck_color": (49, 60, 68, 255),
        "deck_line": (19, 24, 28, 255),
        "remove_green": True,
    },
    "player": {
        "source": "player-abrams.jpg",
        "pivot": (401, 165),
        "hull_polygon": [(112, 49), (154, 37), (554, 38), (613, 71), (627, 238), (575, 278), (151, 277), (105, 251), (104, 77)],
        "turret_polygons": [
            [(274, 74), (430, 61), (528, 101), (574, 142), (570, 198), (492, 242), (306, 244), (255, 205), (255, 116)],
            [(493, 139), (722, 139), (722, 169), (493, 171)],
        ],
        "deck_shape": (253, 70, 574, 247),
        "deck_color": (205, 194, 166, 255),
        "deck_line": (128, 119, 99, 220),
    },
}


def polygon_mask(size, polygons, blur=1.25):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    for polygon in polygons:
        draw.polygon(polygon, fill=255)
    return mask.filter(ImageFilter.GaussianBlur(blur))


def remove_green_background(image, mask):
    pixels = image.load()
    mask_pixels = mask.load()
    for y in range(image.height):
        for x in range(image.width):
            if mask_pixels[x, y] == 0:
                continue
            r, g, b = pixels[x, y][:3]
            green_bias = g - max(r, b)
            if g > 42 and green_bias > 11:
                mask_pixels[x, y] = max(0, mask_pixels[x, y] - min(255, (green_bias - 8) * 14))
    return mask


def place_on_center(image, pivot):
    canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    canvas.alpha_composite(image, (CANVAS_CENTER - pivot[0], CANVAS_CENTER - pivot[1]))
    return canvas


def repair_deck(hull, config):
    x1, y1, x2, y2 = config["deck_shape"]
    draw = ImageDraw.Draw(hull, "RGBA")
    width = x2 - x1
    height = y2 - y1
    radius = max(8, min(width, height) // 6)
    draw.rounded_rectangle((x1, y1, x2, y2), radius=radius, fill=config["deck_color"], outline=config["deck_line"], width=max(2, width // 65))
    inset_x = max(8, width // 8)
    inset_y = max(7, height // 7)
    draw.rounded_rectangle(
        (x1 + inset_x, y1 + inset_y, x2 - inset_x, y2 - inset_y),
        radius=max(5, radius // 2),
        outline=config["deck_line"],
        width=max(1, width // 90),
    )
    draw.line((x1 + width * 0.22, y1 + inset_y, x1 + width * 0.22, y2 - inset_y), fill=config["deck_line"], width=max(1, width // 110))
    draw.line((x2 - width * 0.22, y1 + inset_y, x2 - width * 0.22, y2 - inset_y), fill=config["deck_line"], width=max(1, width // 110))


def build_tank(name, config):
    source_path = SOURCE_DIR / config["source"]
    source = Image.open(source_path).convert("RGBA")

    hull_mask = polygon_mask(source.size, [config["hull_polygon"]])
    if config.get("remove_green"):
        hull_mask = remove_green_background(source, hull_mask)
    hull = source.copy()
    hull.putalpha(hull_mask)
    repair_deck(hull, config)
    hull = place_on_center(hull, config["pivot"])

    turret_mask = polygon_mask(source.size, config["turret_polygons"], blur=0.8)
    if config.get("remove_green"):
        turret_mask = remove_green_background(source, turret_mask)
    turret = source.copy()
    turret.putalpha(turret_mask)
    turret = place_on_center(turret, config["pivot"])

    hull.save(OUTPUT_DIR / f"{name}-hull.png", optimize=True)
    turret.save(OUTPUT_DIR / f"{name}-turret.png", optimize=True)
    return hull, turret


def build_preview(results):
    preview = Image.new("RGBA", (768, 768), (18, 22, 21, 255))
    draw = ImageDraw.Draw(preview)
    positions = {
        "enemy": (0, 0),
        "boss": (384, 0),
        "elite": (0, 384),
        "player": (384, 384),
    }
    for name, (hull, turret) in results.items():
        composite = Image.alpha_composite(hull, turret).resize((320, 320), Image.Resampling.LANCZOS)
        px, py = positions[name]
        preview.alpha_composite(composite, (px + 32, py + 34))
        draw.text((px + 16, py + 12), name.upper(), fill=(236, 242, 234, 255))
    preview.convert("RGB").save(OUTPUT_DIR / "tank-sprite-preview.jpg", quality=92)


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    results = {name: build_tank(name, config) for name, config in TANKS.items()}
    build_preview(results)
    print("Built tank sprite layers:")
    for path in sorted(OUTPUT_DIR.glob("*-hull.png")):
        print(path.relative_to(ROOT))
    for path in sorted(OUTPUT_DIR.glob("*-turret.png")):
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
