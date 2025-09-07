Custom SCSS Modules
===================

This folder splits the former `assets/css/custom.css` into focused SCSS
partials to make styles easier to navigate and scale without changing any
visual behavior.

Files
- _globals.scss: Theme tokens, glass variables, global fallbacks.
- _layout.scss: Base structure, grids, spacing, layout utilities.
- _typography.scss: Links, selection, content text treatments.
- _components.scss: Glass cards, buttons, nav/footer, quotes, vt-break,
  contact/events, hero banner, and modern button system.
- _animations.scss: Reveal/ripple utilities, keyframes, gradient text,
  parallax helpers.
- _overrides.scss: Minimal Mistakes overrides (greedy-nav textures,
  hamburger toggle, meetings page hero icon).
- _responsive.scss: All @media queries consolidated (breakpoints, a11y,
  print/high-contrast).

How It Builds
- `assets/css/custom.scss` imports these partials and compiles to
  `/assets/css/custom.css` consumed by pages via `css: custom` in front
  matter/defaults.

Notes
- The refactor is structural only. Class names, selectors, and property
  values are unchanged to avoid regressions.
- If you spot unused rules, annotate with `// unused?` and we can prune in
  a follow-up pass after a visual diff.

