# Website QA report

Date: 2026-08-19

Targets: Chromium, 1440 × 900 desktop and 390 × 844 mobile

Result: **Pass**

## Automated checks

- JavaScript syntax: passed (`node --check script.js`).
- Accessibility: 0 axe violations on desktop, mobile, and the open mobile menu.
- Performance snapshot: FCP 568 ms, TTFB 1 ms, CLS 0 on the local static server.
- Console: no JavaScript errors after the final pass.
- Assets: portrait, architecture graphic, CSS, JavaScript, and favicon returned successfully.

## Interaction checks

- Fixed navigation and anchored section jumps.
- Mobile full-screen menu, focus handling, close behavior, and content isolation.
- Architecture dialog open/close and focus return to the trigger.
- Reduced-motion behavior.
- Cross-border branch flow: FBA and overseas warehouse are represented as parallel branches.
- Mobile content order: project context → contribution → system layers.

## Findings resolved

1. Removed the white gap caused by a duplicated anchor offset below the fixed header.
2. Prevented page content from bleeding through the mobile navigation overlay.
3. Reordered the mobile quant section so personal contribution appears before architecture detail.
4. Corrected heading wrapping in the capabilities and quant sections.
5. Extended the timeline connector cleanly to the final `NOW` marker.
6. Increased dark-section cobalt contrast and added grouping semantics to labelled diagrams.

Local screenshots remain under `docs/qa/screenshots/` and are intentionally ignored by Git.

## 2026-08-20 quant architecture regression

The architecture thumbnail and expanded dialog were corrected after a fixed intrinsic height distorted the source image. Desktop, ultrawide, mobile, dialog interaction, horizontal overflow, and accessibility were rechecked. See `docs/qa/architecture-fix/report.md`.
