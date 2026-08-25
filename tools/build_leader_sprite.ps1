param(
    [string]$SourcePath = (Join-Path $PSScriptRoot "..\assets\images\cinematic\leader.jpg"),
    [string]$OutputPath = (Join-Path $PSScriptRoot "..\assets\images\cinematic\helicopter-leader-body.png")
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$source = [System.Drawing.Bitmap]::new((Resolve-Path $SourcePath).Path)
$keyed = [System.Drawing.Bitmap]::new($source.Width, $source.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$canvas = [System.Drawing.Bitmap]::new(640, 320, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

try {
    for ($y = 0; $y -lt $source.Height; $y++) {
        for ($x = 0; $x -lt $source.Width; $x++) {
            $pixel = $source.GetPixel($x, $y)
            $dominance = $pixel.G - [Math]::Max($pixel.R, $pixel.B)
            $alpha = 255

            if ($pixel.G -gt 72 -and $dominance -gt 34) {
                $alpha = 0
            }
            elseif ($pixel.G -gt 52 -and $dominance -gt 12) {
                $alpha = [Math]::Max(0, [Math]::Min(255, [int](255 * (34 - $dominance) / 22)))
            }

            if ($alpha -gt 0) {
                # Suppress green spill on antialiased edges without changing opaque aircraft pixels.
                $green = if ($alpha -lt 255) { [Math]::Min($pixel.G, [Math]::Max($pixel.R, $pixel.B)) } else { $pixel.G }
                $keyed.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $pixel.R, $green, $pixel.B))
            }
        }
    }

    $graphics = [System.Drawing.Graphics]::FromImage($canvas)
    try {
        $graphics.Clear([System.Drawing.Color]::Transparent)
        $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

        # Keep the complete supplied frame and its proportions. The source is
        # 1344x768, so a 560x320 contain fit leaves 40px of horizontal padding.
        $scale = [Math]::Min($canvas.Width / $source.Width, $canvas.Height / $source.Height)
        $width = [int][Math]::Round($source.Width * $scale)
        $height = [int][Math]::Round($source.Height * $scale)
        $left = [int][Math]::Floor(($canvas.Width - $width) / 2)
        $top = [int][Math]::Floor(($canvas.Height - $height) / 2)
        $destination = [System.Drawing.Rectangle]::new($left, $top, $width, $height)
        $graphics.DrawImage($keyed, $destination, 0, 0, $source.Width, $source.Height, [System.Drawing.GraphicsUnit]::Pixel)

        # Remove the baked-in rotor blades. Keep the hubs and aircraft structure
        # intact so cinematic.js can draw both rotors at the original anchors.
        $transparentBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::Transparent)
        try {
            $rotorMasks = @(
                # Main rotor: four blades, stopping short of the central hub.
                @((278, 143), (151, 9), (139, 12), (136, 28), (270, 157)),
                @((297, 145), (390, 64), (391, 53), (383, 49), (287, 137)),
                @((272, 158), (99, 246), (99, 254), (108, 258), (281, 168)),
                @((293, 165), (350, 294), (359, 290), (361, 279), (304, 156)),
                # Tail rotor: remove the four diagonal blades while preserving
                # the vertical tail fin and horizontal tail-boom silhouette.
                @((535, 150), (486, 122), (482, 128), (531, 162)),
                @((551, 150), (579, 119), (585, 125), (555, 163)),
                @((532, 166), (486, 195), (492, 202), (545, 171)),
                @((551, 166), (578, 197), (584, 190), (556, 154))
            )

            foreach ($mask in $rotorMasks) {
                $points = [System.Drawing.Point[]]@(
                    $mask | ForEach-Object { [System.Drawing.Point]::new($_[0], $_[1]) }
                )
                $graphics.FillPolygon($transparentBrush, $points)
            }
        }
        finally {
            $transparentBrush.Dispose()
        }    }
    finally {
        $graphics.Dispose()
    }

    $resolvedOutput = [System.IO.Path]::GetFullPath($OutputPath)
    $canvas.Save($resolvedOutput, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "Generated $resolvedOutput (640x320 contain fit, chroma key and baked-in rotor removal)"
}
finally {
    $canvas.Dispose()
    $keyed.Dispose()
    $source.Dispose()
}
