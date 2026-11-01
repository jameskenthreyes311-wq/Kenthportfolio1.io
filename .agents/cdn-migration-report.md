# CDN Migration Report

**Date generated:** 2025  
**Portfolio file:** `kenth_portfolio (1).html` (3425 lines)  
**CDN base URL:** `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/`  
**Asset repo:** https://github.com/kjthe3rd/portfolio-assets  
**Main portfolio repo:** https://github.com/kjthe3rd/Kenthportfolio1.io

---

## Files Modified

| File | Change |
|---|---|
| `kenth_portfolio (1).html` | All local image and video asset references replaced with jsDelivr CDN URLs. Performance attributes (lazy loading, `preload="metadata"`, `alt`, `onerror` fallbacks) applied. |

No other files were modified. Interactive project directories, secondary HTML files (`kenth-dungeon-crawler.html`, `stickman-warrior-combat-video.html`), and all CSS/JS source files were left unchanged.

---

## Asset References Migrated

**Total CDN URL instances inserted: 36** (some assets appear in both an HTML attribute and a matching JS onclick argument — each counts separately; unique assets = 20).

| CDN URL | Original local path | Context |
|---|---|---|
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/kjr-3d-logo.png` | `kjr-3d-logo.png` | `<img>` nav logo (line 2041) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/kjr-3d-logo.png` | `kjr-3d-logo.png` | `<img>` footer logo (line 3008/3014) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/libraria-gallery/cover.png` | `libraria-gallery/cover.png` | inline `style` background-image (line 2627) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/vid3.mp4` | `vid3.mp4` | `<video src>` AI video card (line 2640) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/vid3.mp4` | `vid3.mp4` | `onclick openVideoLightbox()` argument (line 2639) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/vid1.mp4` | `vid1.mp4` | `<video src>` AI video card (line 2655) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/vid1.mp4` | `vid1.mp4` | `onclick openVideoLightbox()` argument (line 2654) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assets/video/asset.mp4` | `assets/video/asset.mp4` | `<video src>` AI video card (line 2668) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assets/video/asset.mp4` | `assets/video/asset.mp4` | `onclick openVideoLightbox()` argument (line 2667) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assets/video/asset%20(1).mp4` | `assets/video/asset (1).mp4` | `<video src>` AI video card — space encoded (line 2681) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assets/video/asset%20(1).mp4` | `assets/video/asset (1).mp4` | `onclick openVideoLightbox()` argument — space encoded (line 2680) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assets/video/Woman_holding_product_and_speaking_907cff08.mp4` | `assets/video/Woman_holding_product_and_speaking_907cff08.mp4` | `<video src>` AI video card (line 2694) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assets/video/Woman_holding_product_and_speaking_907cff08.mp4` | `assets/video/Woman_holding_product_and_speaking_907cff08.mp4` | `onclick openVideoLightbox()` argument (line 2693) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/darbc1.mp4` | `darbc1.mp4` | `<video src>` AI video card (line 2707) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/darbc1.mp4` | `darbc1.mp4` | `onclick openVideoLightbox()` argument (line 2706) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/tiktok1.jpg` | `tiktok1.jpg` | `<img src>` TikTok card (line 2721) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/tiktok1.jpg` | `tiktok1.jpg` | JS `tiktokGallery` array (line 3191) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/instagram-profile.jpg` | `instagram-profile.jpg` | `<img src>` Instagram card (line 2744/2746) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/instagram-profile.jpg` | `instagram-profile.jpg` | JS `instagramGallery` array (line 3194) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/instagram-grid.jpg` | `instagram-grid.jpg` | `<img src>` Instagram card (line 2748/2752) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/root-images/instagram-grid.jpg` | `instagram-grid.jpg` | JS `instagramGallery` array (line 3195) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assessment-quiz-gallery/01-dashboard.png` | `assessment-quiz-gallery/01-dashboard.png` | JS `assessmentQuizGallery` array (line 3168/3174) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assessment-quiz-gallery/02-quiz-overview.png` | `assessment-quiz-gallery/02-quiz-overview.png` | JS `assessmentQuizGallery` array (line 3169/3175) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assessment-quiz-gallery/03-final-checklist.png` | `assessment-quiz-gallery/03-final-checklist.png` | JS `assessmentQuizGallery` array (line 3170/3176) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assessment-quiz-gallery/04-quiz-taking.png` | `assessment-quiz-gallery/04-quiz-taking.png` | JS `assessmentQuizGallery` array (line 3171/3177) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assessment-quiz-gallery/05-badges.png` | `assessment-quiz-gallery/05-badges.png` | JS `assessmentQuizGallery` array (line 3172/3178) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/assessment-quiz-gallery/06-leaderboard.png` | `assessment-quiz-gallery/06-leaderboard.png` | JS `assessmentQuizGallery` array (line 3173/3179) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/blotter-management-gallery/01-dashboard.png` | `blotter-management-gallery/01-dashboard.png` | JS `blotterManagementGallery` array (line 3176/3182) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/blotter-management-gallery/02-new-blotter.png` | `blotter-management-gallery/02-new-blotter.png` | JS `blotterManagementGallery` array (line 3177/3183) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/blotter-management-gallery/03-select-location.png` | `blotter-management-gallery/03-select-location.png` | JS `blotterManagementGallery` array (line 3178/3184) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/blotter-management-gallery/04-report-details.png` | `blotter-management-gallery/04-report-details.png` | JS `blotterManagementGallery` array (line 3179/3185) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/darbc-homes-gallery/01-browse-homes.png` | `darbc-homes-gallery/01-browse-homes.png` | JS `darbcHomesGallery` array (line 3182/3188) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/darbc-homes-gallery/02-estate-availability.png` | `darbc-homes-gallery/02-estate-availability.png` | JS `darbcHomesGallery` array (line 3183/3189) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/darbc-homes-gallery/03-selected-lot.png` | `darbc-homes-gallery/03-selected-lot.png` | JS `darbcHomesGallery` array (line 3184/3190) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/libraria-gallery/01-home.png` | `libraria-gallery/01-home.png` | JS `librariaGallery` array (line 3187/3193) |
| `https://cdn.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/libraria-gallery/02-dashboard.png` | `libraria-gallery/02-dashboard.png` | JS `librariaGallery` array (line 3188/3194) |

---

## Assets That Need to Be Uploaded to GitHub

Every URL listed below must exist in the `kjthe3rd/portfolio-assets` repository at  
`https://github.com/kjthe3rd/portfolio-assets` for the links to resolve. Upload files preserving the exact folder paths shown.

### `root-images/`
- `root-images/kjr-3d-logo.png`
- `root-images/vid3.mp4`
- `root-images/vid1.mp4`
- `root-images/darbc1.mp4`
- `root-images/tiktok1.jpg`
- `root-images/instagram-profile.jpg`
- `root-images/instagram-grid.jpg`

### `assets/video/`
- `assets/video/asset.mp4`
- `assets/video/asset (1).mp4` *(upload with the space in the filename; jsDelivr handles the `%20` encoding)*
- `assets/video/Woman_holding_product_and_speaking_907cff08.mp4`

### `libraria-gallery/`
- `libraria-gallery/cover.png`
- `libraria-gallery/01-home.png`
- `libraria-gallery/02-dashboard.png`

### `assessment-quiz-gallery/`
- `assessment-quiz-gallery/01-dashboard.png`
- `assessment-quiz-gallery/02-quiz-overview.png`
- `assessment-quiz-gallery/03-final-checklist.png`
- `assessment-quiz-gallery/04-quiz-taking.png`
- `assessment-quiz-gallery/05-badges.png`
- `assessment-quiz-gallery/06-leaderboard.png`

### `blotter-management-gallery/`
- `blotter-management-gallery/01-dashboard.png`
- `blotter-management-gallery/02-new-blotter.png`
- `blotter-management-gallery/03-select-location.png`
- `blotter-management-gallery/04-report-details.png`

### `darbc-homes-gallery/`
- `darbc-homes-gallery/01-browse-homes.png`
- `darbc-homes-gallery/02-estate-availability.png`
- `darbc-homes-gallery/03-selected-lot.png`

> **Note on video file size:** GitHub has a 100 MB per-file hard limit and recommends Git LFS for files over 50 MB. Video files (`vid1.mp4`, `vid3.mp4`, `darbc1.mp4`, `asset.mp4`, `asset (1).mp4`, `Woman_holding_product_and_speaking_907cff08.mp4`) may exceed this limit. If any video is larger than 50 MB, use [Git LFS](https://git-lfs.github.com/) or a dedicated video host (Cloudinary, Vimeo, etc.) and update the `src` attributes accordingly.

---

## Intentionally Skipped References

| File | Line | Value | Reason |
|---|---|---|---|
| `kenth_portfolio (1).html` | 6 | `data:image/svg+xml,...` | Favicon is a data URI embedded directly in HTML — no file to migrate |
| `kenth_portfolio (1).html` | 2106 | `data:image/png;base64,...` | Base64 project card thumbnail in `src` attribute — no external file |
| `kenth_portfolio (1).html` | 2584 | `data:image/png;base64,...` | Base64 project card thumbnail in `onclick` handler — no external file |
| `kenth_portfolio (1).html` | 2875 | `src=""` | Lightbox `<img>` placeholder — src is set dynamically by JS, not a static asset |
| `kenth_portfolio (1).html` | 3259 | `player.src = ''` | JS video player reset statement — not an asset reference |
| `kenth-dungeon-crawler.html` | — | (none) | File contains no image or video asset references |
| `stickman-warrior-combat-video.html` | — | (none) | File contains no image or video asset references |

### Root-level image files present on disk but not referenced in HTML
These files were not migrated because nothing in the HTML links to them:
- `bms.png`
- `darbc.png`
- `seait.png`
- `youtube.png`
- `assessment-quiz-gallery/07-portfolio-preview.png`

---

## Broken or Unresolvable References

None detected. Every local path found in the source had a clear, deterministic CDN mapping. All 36 CDN URL instances were verified to be present in the modified `kenth_portfolio (1).html`.

> The CDN URLs themselves cannot be live-tested until the asset files are uploaded to the `portfolio-assets` GitHub repository. The URLs are structurally correct and will resolve once the files are in place.

---

## Interactive Projects Preserved (Unchanged)

These directories and their contents were not modified:

- `kenth-memory-game/`
- `snake-game/`
- `typing-test-game/`
- `kenth-dungeon-crawler.html` (standalone page, unchanged)
- `stickman-warrior-combat-video.html` (standalone page, unchanged)

All scripts, styles, navigation, and game logic in these projects remain intact.

---

## Performance Improvements Applied

| Improvement | Where applied |
|---|---|
| `loading="lazy"` | All gallery `<img>` tags except the nav logo (which uses `loading="eager"` as it is above the fold) |
| `preload="metadata"` | All `<video>` elements in the AI & Video section — loads only duration/dimensions on page load, not the full video |
| Descriptive `alt` attributes | All `<img>` elements — e.g. `alt="KJR"`, `alt="TikTok profile screenshot"`, `alt="Instagram profile screenshot"`, `alt="Instagram posts screenshot"` |
| `onerror` fallback | All `<img>` elements — on load failure, renders an inline SVG placeholder reading "Image unavailable" with matching dark background color (`#2D4A52`) |
| `autoplay muted loop playsinline` | All AI video cards — ensures silent autoplay works cross-browser including iOS Safari |

---

## Remaining Manual Steps

1. **Upload all asset files to GitHub.**  
   Go to https://github.com/kjthe3rd/portfolio-assets and upload every file listed in the "Assets That Need to Be Uploaded" section above, preserving the exact folder structure.

2. **Check video file sizes before uploading.**  
   Files over 50 MB should be added with Git LFS (`git lfs track "*.mp4"`) or hosted on a video platform (Cloudinary, Vimeo, Bunny.net) and the `src` attributes updated to those URLs instead.

3. **Commit and push `kenth_portfolio (1).html`** to the main portfolio repository at https://github.com/kjthe3rd/Kenthportfolio1.io so the live site picks up the changes.

4. **Purge jsDelivr cache** if assets were previously served and you are replacing files.  
   Use: `https://purge.jsdelivr.net/gh/kjthe3rd/portfolio-assets@main/<path-to-file>`

5. **Verify live URLs** in a browser after upload — open the portfolio, open DevTools (F12 → Network → Img/Media), confirm no 404 errors appear for CDN resources.

6. **Optional — add missing root-level images** (`bms.png`, `darbc.png`, `seait.png`, `youtube.png`) to `root-images/` in the asset repo if you want them available via CDN in future (they are currently unreferenced in HTML).
