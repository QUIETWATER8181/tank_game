from pathlib import Path
import math
import struct
import wave

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/audio/page-turn.wav"
RATE = 44100

def build():
    samples = []
    for i in range(round(RATE * 0.18)):
        t = i / RATE
        a = math.sin(2 * math.pi * (520 + 180 * t / 0.075) * t) * math.exp(-t * 36)
        u = max(0.0, t - 0.065)
        b = math.sin(2 * math.pi * (720 + 130 * u / 0.105) * u) * math.exp(-u * 28) if t >= 0.065 else 0
        samples.append(struct.pack("<h", int(max(-1, min(1, a * 0.42 + b * 0.32)) * 32767)))
    with wave.open(str(OUT), "wb") as sound:
        sound.setnchannels(1)
        sound.setsampwidth(2)
        sound.setframerate(RATE)
        sound.writeframes(b"".join(samples))
    print(f"Generated {OUT} ({len(samples)} samples)")

if __name__ == "__main__":
    build()
