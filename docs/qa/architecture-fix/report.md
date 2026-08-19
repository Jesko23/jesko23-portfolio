# Quant architecture UI regression report

Date: 2026-08-20

Scope: `#quant` architecture thumbnail and expanded dialog only

Result: **Fixed and verified**

## ISSUE-001: Architecture image distorted and clipped

- Severity: medium
- Category: visual / responsive
- Reproduction: the 1672 × 941 source diagram inherited a fixed HTML height while CSS changed only its width. The thumbnail became a tall, distorted column; the dialog clipped the lower part of the image.
- Before evidence:
  - `screenshots/before-desktop.png`
  - `screenshots/before-dialog-desktop.png`
- Fix:
  - Corrected the intrinsic dimensions to 1672 × 941.
  - Locked thumbnail and dialog media to the source aspect ratio.
  - Restored automatic image height and `object-fit: contain`.
  - Rebuilt the dialog as header / fitted image / note rows.
  - Kept the closed dialog out of document flow.
  - Compacted the mobile dialog to its content instead of stretching it to the full viewport.
  - Tightened the desktop quant section so the architecture card and five system layers remain visible in the reference viewport.

## Verification

- Desktop reference viewport: 1672 × 941 — pass.
- Ultrawide viewport: 2200 × 1200 — pass.
- Mobile viewport: 390 × 844 — pass, no horizontal overflow.
- Expanded dialog: complete image visible on desktop and mobile.
- Rendered media ratio: 1.7768, matching 1672 / 941.
- Dialog open, Escape close, focus return, and body scroll lock — pass.
- axe-core: 0 violations for the quant section and open dialog after animations settled.
- JavaScript syntax and `git diff --check` — pass.

Final evidence:

- `screenshots/final-desktop-1672x941-v2.png`
- `screenshots/final-ultrawide-2200x1200.png`
- `screenshots/final-mobile-390x844.png`
- `screenshots/after-dialog-desktop-final.png`
- `screenshots/after-dialog-mobile-v2.png`

The locked reference image and the source architecture asset were not modified.
