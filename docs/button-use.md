<!-- agent:filetype=guidance -->
<!-- name: button-behavior-guide -->

# Button Behavior Guide (Portable)

Design, semantics, and implementation notes for a modern, theme‑aware
button component. This guide is portable: drop into any project to have
Codex implement a consistent button system with solid/outline/ghost
variants, sizes, icon/badge support, loading and toggle states, optional
ripple and reveal animations, and accessible defaults.

## Goals

- Theme‑aware colors and strong contrast in light/dark modes.
- Smooth but subtle motion; honor reduced‑motion preferences.
- A11y: keyboard focus, ARIA for icon‑only, toggle, and busy states.
- Minimal API using class modifiers and CSS custom properties.

## Component API (Classes)

- `btn-modern`: base button (works on `a`, `button`, `input[type=button|submit]`).
- Variants: `btn-modern--outline`, `btn-modern--ghost`.
- Sizes: `btn-modern--sm`, `btn-modern--lg`.
- Shape/behavior: `btn-modern--icon` (icon‑only, circular), `btn-modern--block`
  (full‑width).
- Elements: `btn-modern__icon`, `btn-modern__icon--left`, `btn-modern__icon--right`,
  `btn-modern__badge`.
- States: `.is-loading` or `[aria-busy="true"]`, `[aria-pressed="true"]`.

## CSS Contract (Custom Properties)

- `--btn-bg`: base color of the button (defaults to theme link color).
- `--btn-bg-hover`: hover/active color (defaults to theme link hover).
- Theme variables expected upstream: `--c-link`, `--c-link-hover`, `--c-accent`.

If the host project lacks theme variables, set them at `:root` or per‑button:

```html
<a class="btn-modern" style="--btn-bg:#2d81e2;--btn-bg-hover:#5aacfD">Action</a>
```

## Visual Behavior

- Base: inline‑flex, bold label, subtle glossy overlay, drop shadow, and
  a light “sheen” sweep on hover/focus using `::before`.
- Hover/Focus: lift by `translateY(-1px)`, stronger shadow, background changes
  to `--btn-bg-hover`.
- Active/Pressed: reset lift, slightly tighter shadow.
- Focus Visible: 2px outline using `--c-accent` with 3px offset.
- Dark Mode: force high‑contrast label color (white), preserve brand color.

## Variants

- Solid (default): filled with `--btn-bg` and glossy overlay.
- Outline: transparent background, 2px border in `--btn-bg`; on hover/focus it
  becomes solid with white text.
- Ghost: translucent fill via `color-mix` with `--btn-bg`; on hover/focus the
  alpha increases subtly.

Note: `color-mix()` is progressive enhancement; older browsers gracefully fall
back to solid/transparent without breaking.

## Sizes and Layout

- `btn-modern--sm`: tighter padding and radius, slightly lighter weight.
- `btn-modern--lg`: larger padding, radius, and font size.
- `btn-modern--block`: `width:100%` with centered content.

## Icons and Badges

- Place icons inside with `btn-modern__icon`; use directional modifiers for
  spacing: `btn-modern__icon--left` or `btn-modern__icon--right`.
- Icon‑only: apply `btn-modern btn-modern--icon` and provide an `aria-label`.
- Badge: `btn-modern__badge` renders a small pill; variant styles adapt to
  outline/solid automatically.

## States and A11y

- Loading: add `.is-loading` and/or `aria-busy="true"`. CSS shows a centered
  spinner via `::after`; pointer events are disabled.
- Toggle: use `aria-pressed="true|false"`. CSS adjusts shadow/press state.
- Icon‑only: must include `aria-label` for the action.
- Choose correct element: use `<a>` for navigation (with `href`) and
  `<button>` for in‑page actions. Keep keyboard/focusable semantics intact.

## Optional Motion Enhancements

- Ripple: add a transient `<span.ripple>` on click, sized from the hit point.
  Works on `.btn-modern` (and other `.btn` aliases if desired).
  CSS (class `ripple`) uses a radial gradient and scale animation.
- Reveal on enter: add `reveal` to buttons/containers; JS toggles
  `is-revealed` when intersecting viewport. Use to stage button entrances.

Respect reduced motion with `prefers-reduced-motion: reduce` by disabling
reveal observers and heavy transforms.

## Minimal Implementation Checklist

1) Theme tokens: ensure `--c-link`, `--c-link-hover`, `--c-accent` exist.
2) Base + variants: implement `.btn-modern` + outline + ghost as below.
3) Sizes + layout: `--sm`, `--lg`, `--block`.
4) Elements: `__icon` (+ left/right), `__badge`.
5) States: `[aria-pressed]`, `.is-loading`/`[aria-busy]` and spinner.
6) Optional: ripple CSS+JS, reveal CSS+JS, reduced‑motion safeguards.

## Copy/Paste CSS (Core)

```css
/* Base (theme-aware) */
.btn-modern,
a.btn-modern,
button.btn-modern,
input[type="button"].btn-modern,
input[type="submit"].btn-modern {
  display:inline-flex;align-items:center;gap:.5rem;padding:.65em 1.1em;
  border-radius:.75em;border:0;position:relative;overflow:hidden;
  --btn-bg: var(--c-link); --btn-bg-hover: var(--c-link-hover);
  background-color:var(--btn-bg);
  background-image:linear-gradient(180deg,rgba(255,255,255,.18),rgba(255,255,255,.10)45%,rgba(255,255,255,.06)60%,rgba(0,0,0,.08)100%);
  background-blend-mode:overlay;color:#fff!important;font-weight:800;letter-spacing:.01em;text-decoration:none!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.25),0 10px 20px rgba(0,0,0,.18);
  transition:transform var(--t-fast,.18s) var(--e-out,cubic-bezier(.22,.61,.36,1)),
             box-shadow var(--t-fast,.18s) var(--e-out,cubic-bezier(.22,.61,.36,1)),
             background-color var(--t-fast,.18s) var(--e-out,cubic-bezier(.22,.61,.36,1)),
             color var(--t-fast,.18s) var(--e-out,cubic-bezier(.22,.61,.36,1));
}
.btn-modern:hover,.btn-modern:focus{background-color:var(--btn-bg-hover);transform:translateY(-1px);box-shadow:inset 0 1px 0 rgba(255,255,255,.25),0 14px 24px rgba(0,0,0,.22)}
.btn-modern:active{transform:translateY(0);box-shadow:0 8px 16px rgba(0,0,0,.18)}
.btn-modern:focus-visible{outline:2px solid var(--c-accent);outline-offset:3px}
[data-theme='dark'] .btn-modern{color:#fff!important}

/* Sizes */
.btn-modern--sm{padding:.5em .9em;border-radius:.6em;font-weight:700}
.btn-modern--lg{padding:.8em 1.25em;border-radius:.9em;font-size:1.05em}

/* Sheen */
.btn-modern::before{content:"";position:absolute;inset:0 auto 0 -60%;width:50%;transform:translateX(-100%) skewX(-20deg);
  background:linear-gradient(120deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.35) 30%,rgba(255,255,255,0) 60%);
  pointer-events:none;opacity:0;transition:transform .55s var(--e-out),opacity .35s var(--e-out)}
.btn-modern:hover::before,.btn-modern:focus::before{opacity:.85;transform:translateX(260%) skewX(-20deg)}

/* Outline */
.btn-modern--outline{background:transparent;background-image:none;color:var(--btn-bg)!important;border:2px solid var(--btn-bg);box-shadow:inset 0 1px 0 rgba(255,255,255,.15)}
.btn-modern--outline:hover,.btn-modern--outline:focus{background-color:var(--btn-bg);color:#fff!important}

/* Ghost */
.btn-modern--ghost{background-color:color-mix(in srgb,var(--btn-bg) 14%,transparent);background-image:none;color:#fff!important;border:0}
.btn-modern--ghost:hover,.btn-modern--ghost:focus{background-color:color-mix(in srgb,var(--btn-bg) 22%,transparent)}

/* Icons */
.btn-modern__icon{display:inline-flex;align-items:center;justify-content:center;width:1em;height:1em;line-height:1;font-size:1em}
.btn-modern__icon--left{margin-right:.45em}.btn-modern__icon--right{margin-left:.45em}
.btn-modern svg.btn-modern__icon{width:1em;height:1em}

/* Badge */
.btn-modern__badge{display:inline-flex;align-items:center;justify-content:center;margin-left:.55em;padding:.15em .5em;font-weight:800;border-radius:999px;background-color:rgba(255,255,255,.22);color:#fff}
.btn-modern--outline .btn-modern__badge{background-color:var(--btn-bg);color:#fff}
.btn-modern--sm .btn-modern__badge{font-size:.85em;padding:.1em .45em}
.btn-modern--lg .btn-modern__badge{font-size:1em;padding:.18em .6em}

/* Icon-only */
.btn-modern--icon{width:2.75em;height:2.75em;padding:0;border-radius:50%;justify-content:center}
.btn-modern--icon.btn-modern--sm{width:2.25em;height:2.25em}
.btn-modern--icon.btn-modern--lg{width:3.1em;height:3.1em}

/* Block */
.btn-modern--block{width:100%;justify-content:center}

/* States */
.btn-modern[aria-pressed="true"]{transform:translateY(0);box-shadow:inset 0 2px 6px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.18)}
.btn-modern.is-loading,.btn-modern[aria-busy="true"]{pointer-events:none}
.btn-modern.is-loading::after,.btn-modern[aria-busy="true"]::after{content:"";position:absolute;width:1em;height:1em;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;border:2px solid rgba(255,255,255,.55);border-top-color:#fff;animation:btn-spin .7s linear infinite}
.btn-modern--outline.is-loading::after,.btn-modern--outline[aria-busy="true"]::after{border-color:color-mix(in srgb,var(--btn-bg) 55%,transparent);border-top-color:var(--btn-bg)}
@keyframes btn-spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
```

## Optional: Ripple CSS + JS

```css
/* Ripple effect container */
.btn-modern{position:relative;overflow:hidden}
.ripple{position:absolute;border-radius:50%;pointer-events:none;mix-blend-mode:screen;background:radial-gradient(circle,rgba(255,255,255,.35) 0%,rgba(255,255,255,.12) 40%,transparent 60%);transform:scale(0);animation:ripple .45s ease-out forwards}
@keyframes ripple{to{transform:scale(1);opacity:0}}
```

```js
// Lightweight ripple on click
document.addEventListener('click',(e)=>{
  const t = e.target.closest('.btn-modern');
  if(!t) return;
  const r = document.createElement('span');
  const rect = t.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  r.style.width = r.style.height = size + 'px';
  r.style.left = (e.clientX - rect.left - size/2) + 'px';
  r.style.top  = (e.clientY - rect.top  - size/2) + 'px';
  r.className = 'ripple';
  t.appendChild(r);
  setTimeout(()=> r.remove(), 450);
});
```

## Optional: Reveal CSS + JS

```css
.reveal{opacity:0;transform:translateY(var(--reveal-offset,12px));filter:blur(var(--reveal-blur,.25px));transition:opacity .5s cubic-bezier(.215,.61,.355,1),transform .5s cubic-bezier(.215,.61,.355,1),filter .5s cubic-bezier(.215,.61,.355,1);will-change:opacity,transform,filter}
.reveal.is-revealed{opacity:1;transform:none;filter:none}
@media (prefers-reduced-motion: reduce){.reveal{opacity:1!important;transform:none!important;filter:none!important}}
```

```js
document.addEventListener('DOMContentLoaded',()=>{
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els=[...document.querySelectorAll('.reveal')]; if(!els.length) return;
  const io=new IntersectionObserver((entries,obs)=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-revealed');obs.unobserve(en.target)}}),{rootMargin:'0px 0px -10% 0px',threshold:.15});
  els.forEach(el=>io.observe(el));
});
```

## Usage Examples (HTML)

```html
<!-- Solid + left icon -->
<a class="btn-modern" href="/path" aria-label="Go">
  <i class="fas fa-arrow-right btn-modern__icon btn-modern__icon--left" aria-hidden="true"></i>
  Go
  <span class="btn-modern__badge">New</span>
  
</a>

<!-- Outline + right icon -->
<a class="btn-modern btn-modern--outline" href="#">Outline
  <i class="fas fa-external-link-alt btn-modern__icon btn-modern__icon--right" aria-hidden="true"></i>
</a>

<!-- Ghost (large) -->
<a class="btn-modern btn-modern--ghost btn-modern--lg" href="#">Ghost</a>

<!-- Icon-only (aria-label required) -->
<a class="btn-modern btn-modern--icon" href="#" aria-label="Play">
  <i class="fas fa-play" aria-hidden="true"></i>
</a>

<!-- Block (full width) -->
<a class="btn-modern btn-modern--block" href="#">Full Width</a>

<!-- Loading state -->
<button class="btn-modern is-loading" aria-busy="true" disabled>Loading…</button>

<!-- Toggle/Pressed -->
<button class="btn-modern" aria-pressed="true">Following</button>
```

## Notes & Trade‑offs

- Shadows and sheen add depth; tune for your brand’s flatness or depth.
- `color-mix()` is optional; fallback is acceptable (transparent/solid).
- Prefer SVG icons; Font Awesome works as shown.
- For long labels, ensure adequate horizontal padding and allow wrapping if
  needed.
- Keep motion subtle; avoid large jumps on hover/active.

## References (from source project)

- `_sass/custom/_buttons.scss` — full reference styles.
- `_pages/home.md` — examples of solid/outline/ghost, icon‑only, block,
  loading, badges.
- `assets/js/tactile.js` — ripple implementation.
- `assets/js/reveal.js` and `_sass/custom/_reveal.scss` — reveal animation.
- `assets/css/theme.css` — theme tokens (`--c-link`, `--c-link-hover`, `--c-accent`).

