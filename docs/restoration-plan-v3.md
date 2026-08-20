# Jesko-23 卡通版 Reference-to-build map

## Build scope

- Branch: `codex/cartoon-portfolio`.
- Target runtime: `index.html`, `styles-v3.css`, `script-v3.js`, `assets/jesko-cartoon-avatar-v4.webp`.
- Build owner: identity skill bundled frontend app builder contract.
- Shared material: all gradients, hand-drawn trails, soft waves and icons remain code-native; no shared raster texture.
- Runtime image budget: one 640×640 WebP avatar, about 23KB. The 4000px portrait and architecture PNG are not loaded.

## 01 Hero · C3

- Reference: `references/locked/v3/01-hero.png`.
- Topology: section-specific asymmetric editorial grid.
- Code: header, career thesis, role transition, CTAs, three capability labels, idea trail and floating shapes.
- Independent media: `assets/jesko-cartoon-avatar-v4.webp`, source-derived original animation portrait on a pale-sky background.
- Must preserve: headline first; avatar max 300px and clearly secondary; BUSINESS PROBLEM → AI SYSTEM → PRODUCT OUTCOME as real work method.
- Mobile: one column; avatar 180—210px; idea trail becomes vertical.

## 02 Capabilities · C0

- Reference: `references/locked/v3/02-capabilities.png`.
- Topology: three different-weight storyboard panels converging into a process strip.
- Code: all copy, icons, mini input-decision-output diagrams, hover and route animation.
- Assets: none.
- Must preserve: AI tool use, operations and non-programmer business-led coding; UNDERSTAND → BUILD → VERIFY.

## 03 黑豆跨境集群 · C0

- Reference: `references/locked/v3/03-crossborder.png`.
- Topology: illustrated business journey with an explicit branch and a contribution sequence.
- Code: procurement → inventory → logistics → FBA / overseas warehouse, evidence line, contribution trail and placeholder boundary.
- Assets: none; product image is approved `replace-later` and must not be fabricated.
- Mobile: vertical road with retained fork semantics.

## 04 AI 量化基础设施 · C0

- Reference: `references/locked/v3/04-quant.png`.
- Topology: five ordered chapters plus parallel security guardrail.
- Code: all text, SVG icons, arrows, governance connectors, contribution and risk note.
- Source evidence: architecture PNG only verifies content; it is absent from runtime HTML.
- Mobile: five rows stack; security governance follows as a clearly linked rail.

## 05 Timeline + Contact · C0

- Reference: `references/locked/v3/05-timeline.png`.
- Topology: four priority-weighted storyboard chapters on an idea trail.
- Code: all career copy, chapter shapes, journey trail and contact links.
- Must preserve: 2023—2024 background conversion; 2025 method formation; 2026 H1 system landing; 2026 H2—NOW productization and continuous delivery.
- Mobile: vertical chapter path; current chapter stays largest.

## Asset manifest

| Asset | Placement | Source | Ratio | Status | Final path |
| --- | --- | --- | --- | --- | --- |
| Jesko cartoon avatar | hero independent-media | generated from user portrait; original Western feature-animation interpretation | 1:1 | ready | `assets/jesko-cartoon-avatar-v4.webp` |

## Gates

- Meaning: each section explains identity, capability, system, architecture or growth without relying on decoration.
- Consistency: one warm palette, rounded type, ink outlines, paper shadows and idea-trail motif.
- Rhythm: asymmetric hero; three storyboard panels; journey fork; architecture rows + guardrail; weighted timeline chapters.
- Rebuildability: only avatar is raster; all facts, relationships, interactions and responsive reflow are code-native.

## Implementation brief

- Use the exact palette and typography from `docs/content-style-brief-v3.md` as CSS tokens.
- Use transform/opacity for motion; ambient gradients 12—20s, hover 180—240ms, reveal 360—520ms; respect reduced motion.
- Use `content-visibility: auto` below the fold and stable sizes to reduce layout cost.
- Validate desktop 1672×941, ultrawide 2200×1200 and mobile 390×844 against the v3 references.
