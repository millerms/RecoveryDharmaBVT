# Image Optimization Report

This report inventories raster images in `assets/images` and compares
original formats (JPG/PNG/HEIC) with their optimized WebP counterparts
where available. Dimensions come from `sips`; sizes from `ls -lh`.

Notes
- Entries showing negative savings indicate the PNG is smaller than WebP — keep PNG.
- Files under `assets/images/_site/**` appear to be build artifacts accidentally committed. Recommend removing to reduce repo size and potential duplicate downloads.

| Original | Dim | Size | WebP | Dim | Size | Savings |
|---|---:|---:|---|---:|---:|---:|
| assets/images/vt/misty-lake.JPG | 5712x4284 | 9767 KB | assets/images/vt/misty-lake.webp | 4284x5712 | 1757 KB | 82% |
| assets/images/vt/tree-reflection.JPG | 5712x4284 | 9742 KB | assets/images/vt/tree-reflection.webp | 4284x5712 | 1855 KB | 81% |
| assets/images/rice-paper-2.jpg | 6834x8781 | 7018 KB | assets/images/rice-paper-2.webp | 6834x8781 | 3029 KB | 57% |
| assets/images/vt/fall-road.jpg | 3648x4560 | 5452 KB | assets/images/vt/fall-road.webp | 3648x4560 | 4035 KB | 26% |
| assets/images/vt/fall-mountains.jpg | 3328x4160 | 5292 KB | assets/images/vt/fall-mountains.webp | 3328x4160 | 4182 KB | 21% |
| assets/images/vt/willoughby-fall.jpg | 3024x4032 | 4401 KB | assets/images/vt/willoughby-fall.webp | 3024x4032 | 3392 KB | 23% |
| assets/images/paper-texture.jpg | 5000x7000 | 3764 KB | assets/images/paper-texture.webp | 1400x1400 | 31 KB | 99% |
| assets/images/vt/burl-whales.jpg | 6000x4000 | 3629 KB | assets/images/vt/burl-whales.webp | 6000x4000 | 1729 KB | 52% |
| assets/images/rice-paper-3.jpg | 3101x4462 | 3535 KB | assets/images/rice-paper-3.webp | 3101x4462 | 2402 KB | 32% |
| assets/images/vt/fall-lake.jpg | 3936x2624 | 3030 KB | assets/images/vt/fall-lake.webp | 3936x2624 | 2234 KB | 26% |
| assets/images/rice-paper-1.jpg | 3247x4599 | 2752 KB | assets/images/rice-paper-1.webp | 1200x1200 | 36 KB | 99% |
| assets/images/vt/mountain-sunset.jpg | 5184x3456 | 2485 KB | assets/images/vt/mountain-sunset.webp | 5184x3456 | 740 KB | 70% |
| assets/images/vt/river-woods.jpg | 2565x3848 | 1955 KB | assets/images/vt/river-woods.webp | 2565x3848 | 1135 KB | 42% |
| assets/images/vt/sunset-lake.HEIC | 4032x3024 | 970 KB | assets/images/vt/sunset-lake.webp | 4032x3024 | 445 KB | 54% |
| assets/images/buddha-quote.jpg | 4785x3184 | 442 KB | assets/images/buddha-quote.webp | 4785x3184 | 156 KB | 65% |
| assets/images/rd-icons/rdvt-icon.png | 1024x1024 | 1896 KB | assets/images/rd-icons/rdvt-icon.webp | 1024x1024 | 124 KB | 93% |
| assets/images/rd-icons/rdvt-icon-rdvt.png | 964x623 | 420 KB | assets/images/rd-icons/rdvt-icon-rdvt.webp | 964x623 | 55 KB | 87% |
| assets/images/rd-icons/rd-black-ring.png | 2000x2000 | 41 KB | assets/images/rd-icons/rd-black-ring.webp | 2000x2000 | 66 KB | -62% |
| assets/images/rd-icons/rd-tower.png | 1000x2000 | 7 KB | assets/images/rd-icons/rd-tower.webp | 1000x2000 | 5 KB | 26% |

## Summary
- Top wins: `paper-texture.webp` (−99%), `rice-paper-1.webp` (−99%), `mountain-sunset.webp` (−70%), rotated portrait images (−81% to −82%).
- Keep PNG for `rd-black-ring` — it’s smaller than WebP at current settings.
- Recommend removing `assets/images/_site/**` duplicates from the repo.

