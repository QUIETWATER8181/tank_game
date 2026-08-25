from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/images/cinematic/helicopter-leader-body-symmetric.png"
S = 4
W, H, MID = 640, 320, 152

def p(items):
    return [(round(x * S), round(y * S)) for x, y in items]

def mirror(items):
    return [(x, 2 * MID - y) for x, y in items]

def poly(draw, upper, fill, outline=None, width=1):
    shape = upper + list(reversed(mirror(upper[1:-1])))
    draw.polygon(p(shape), fill=fill)
    if outline:
        draw.line(p(shape + [shape[0]]), fill=outline, width=width * S, joint="curve")

def line(draw, upper, fill, width=1):
    draw.line(p(upper), fill=fill, width=width * S, joint="curve")
    draw.line(p(mirror(upper)), fill=fill, width=width * S, joint="curve")

def rect(draw, x1, y1, x2, y2, fill, outline=None, width=1):
    draw.rectangle((x1*S, y1*S, x2*S, y2*S), fill=fill, outline=outline, width=width*S)
    draw.rectangle((x1*S, (2*MID-y2)*S, x2*S, (2*MID-y1)*S), fill=fill, outline=outline, width=width*S)

def build():
    im = Image.new("RGBA", (W*S, H*S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    body = [(31,152),(43,132),(72,113),(118,99),(183,94),(237,98),(273,108),(314,112),(390,113),(456,118),(519,130),(556,143),(571,152)]
    poly(d, body, (27,34,33,255), (178,148,78,255), 3)
    poly(d, [(39,151),(69,124),(122,108),(203,105),(266,116),(317,121),(477,125),(548,145),(563,152)], (13,19,19,220))
    poly(d, [(43,151),(60,129),(93,115),(139,108),(180,112),(198,124),(202,151)], (12,20,20,255), (226,182,91,255), 3)
    poly(d, [(55,149),(70,131),(98,119),(128,115),(137,124),(137,149)], (43,62,61,255), (124,104,61,255), 2)
    for x,y in [(78,128),(103,118),(129,115)]: line(d, [(x,y),(x,149)], (205,178,107,190), 2)
    line(d, [(57,150),(136,150)], (237,207,122,210), 2)
    poly(d, [(205,151),(215,119),(246,106),(278,111),(292,134),(292,151)], (56,60,52,255), (218,175,78,255), 3)
    poly(d, [(224,148),(231,125),(251,116),(269,119),(279,148)], (116,88,39,255), (225,190,104,230), 2)
    rect(d, 244,91,300,108, (31,38,35,255), (183,145,67,255), 2)
    rect(d, 254,84,285,92, (16,22,21,255), (209,168,79,255), 2)
    poly(d, [(201,129),(171,107),(134,104),(127,115),(158,128)], (41,49,45,255), (177,142,71,255), 2)
    rect(d, 145,98,178,106, (19,26,24,255), (200,161,77,255), 2)
    line(d, [(159,104),(187,125),(203,135)], (238,198,105,220), 2)
    poly(d, [(288,137),(333,121),(454,123),(519,136),(552,148),(552,152)], (40,48,45,255), (181,146,71,255), 2)
    line(d, [(301,132),(391,130),(477,136),(539,149)], (225,184,87,230), 3)
    for x in [317,371,426,481]: line(d, [(x,126),(x,151)], (109,115,99,170), 2)
    rect(d, 343,126,371,136, (22,28,26,255), (198,159,77,220), 1)
    poly(d, [(493,133),(500,92),(519,91),(523,137),(520,151)], (34,42,39,255), (213,172,82,255), 3)
    line(d, [(505,97),(512,135)], (240,201,111,210), 2)
    line(d, [(72,116),(113,105),(178,101),(214,111)], (103,71,28,255), 8)
    line(d, [(72,116),(113,105),(178,101),(214,111)], (211,164,72,235), 2)
    line(d, [(290,116),(335,117),(416,120),(482,130)], (102,70,28,255), 8)
    line(d, [(290,116),(335,117),(416,120),(482,130)], (221,176,78,230), 2)
    line(d, [(221,126),(221,148)], (247,206,117,210), 2)
    line(d, [(286,113),(286,148)], (235,190,91,220), 2)
    d.polygon(p([(305,149),(318,139),(331,149),(318,151)]), fill=(214,178,86,240))
    d.polygon(p([(305,155),(318,165),(331,155),(318,153)]), fill=(214,178,86,240))
    d.ellipse((31*S,148*S,41*S,158*S), fill=(240,236,193,255), outline=(231,177,64,255), width=S)
    d.ellipse((547*S,148*S,557*S,158*S), fill=(229,46,34,255), outline=(214,161,63,255), width=S)
    im.resize((W,H), Image.Resampling.LANCZOS).filter(ImageFilter.GaussianBlur(0.12)).save(OUT, optimize=True)
    print(f"Generated {OUT}")

if __name__ == "__main__":
    build()
