# PathToDev Brand Assets

Extracted from the uploaded brand sheet (1407 x 768 px). Nothing was redrawn or redesigned: every file is cut from the original artwork, with guide lines, grids, labels and borders removed.

## Contents

| File | Size | Background | Source on the sheet |
|---|---|---|---|
| primary/pathtodev-logo-primary.png | 816 x 659 | White | Large central logo |
| primary/pathtodev-logo-primary@2x-upscaled.png | 1632 x 1318 | White | Same file, upscaled 2x (see notes) |
| primary/pathtodev-logo-dark.png | 334 x 298 | Navy | Upper-right dark card |
| icons/pathtodev-icon.png | 400 x 400 | Transparent | Icon from the central logo |
| icons/pathtodev-icon-reverse.png | 280 x 280 | Navy | Bottom-right reverse icon |
| icons/pathtodev-icon-black.png | 121 x 121 | Transparent | Bottom-left black tile |
| icons/pathtodev-icon-white.png | 121 x 121 | Transparent | Bottom-left white tile |
| favicon/pathtodev-icon-16/32/64/128.png | as named | Transparent | Resized from pathtodev-icon.png |

## Resolution limits (please read)

The sheet is small, so some assets are only as sharp as their source area.

- **Primary logo @2x** is the same pixels upscaled with Lanczos resampling. It is bigger, not sharper. For a truly high-resolution header logo you need the original vector or a high-resolution export.
- **Dark logo, reverse icon, black and white icons** are extracted at the resolution they have on the sheet. The black and white icons are only about 100 px wide.
- **Black and white icons are a different cut of the icon**, not a recolour: the arrow is separated from the P by a white gap. Simply recolouring the standalone icon would merge the arrow into the P, so they were extracted as drawn.
- **Favicons** were generated from the standalone icon (the sheet's own 16/32/64/128 previews are far too small to reuse). At 16 px and 32 px the thin gaps between strokes soften, which is unavoidable at that size.

## Other notes

- **Reverse icon:** the grey sparkle was still present in the source despite the "Sparkle Removed" label. It was removed and the area filled with the flat navy background.
- **Transparency:** the three transparent icons use real alpha channels (no checkerboard). Black is pure #000000, white is pure #FFFFFF.
- **Colours:** icon navy is about #09213F and the arrow blue about #3280DE, sampled from the artwork.
- **SVG:** none provided. A faithful vector can't be produced reliably from a raster this small without redrawing it.
