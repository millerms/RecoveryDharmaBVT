# Minimal Mistakes: Reusable Glass + Reveal UI Snippets

This guide packages the glassmorphism styles and modern reveal/ripple effects into drop‑in snippets for Minimal Mistakes.

Sections
- Tokens: theming variables for glass surfaces
- CSS: glass utilities, reveal animations, ripple effect
- JS: IntersectionObserver reveal, button ripple
- HTML: usage examples
- Integration: add to Minimal Mistakes via SCSS/JS includes

Note: All motion respects `prefers-reduced-motion`.

## Tokens (Glass + Motion)

```css
:root {
  /* Glass base */
  --glass-tint: 220 55% 25%;
  --glass-alpha: 0.10;       /* surface opacity */
  --glass-stroke: 0.30;      /* border opacity */
  --glass-shadow: 0.35;      /* shadow opacity */

  /* Derived */
  --glass-bg: hsl(var(--glass-tint) / var(--glass-alpha));
  --glass-bg-strong: hsl(var(--glass-tint) / 0.35);
  --glass-border: hsl(var(--glass-tint) / var(--glass-stroke));
  --glass-shadow-light: rgba(0,0,0,var(--glass-shadow));

  /* Radii, blur, timing */
  --r-lg: 20px; --r-md: 14px; --r-sm: 10px;
  --blur-lg: 18px; --blur-md: 12px; --blur-sm: 4px;
  --t-fast: 0.18s; --t-med: 0.28s;
  --e-out: cubic-bezier(0.22, 0.61, 0.36, 1);

  /* Reveal system */
  --reveal-duration: 0.5s;
  --reveal-ease: cubic-bezier(0.215, 0.61, 0.355, 1);
  --reveal-offset: 12px;
  --reveal-blur: 0.25px;
}

@media (prefers-color-scheme: dark) {
  :root { --glass-shadow: 0.45; }
}

/* Fallback for browsers without backdrop-filter */
@supports not (backdrop-filter: blur(1px)) {
  .glass { background-color: var(--glass-bg-strong) !important; }
}
```

## CSS: Glass Utilities

```css
/* Core glass surface */
.glass {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-lg);
  box-shadow: 0 8px 30px var(--glass-shadow-light), inset 0 1px 0 rgba(255,255,255,0.06);
  -webkit-backdrop-filter: blur(var(--blur-lg)) saturate(115%);
  backdrop-filter: blur(var(--blur-lg)) saturate(115%);
}

/* Elevated card variant */
.glass.card { padding: clamp(14px, 2vw, 22px); border-radius: var(--r-lg); }

/* Optional: make Minimal Mistakes masthead glassy */
.masthead, .masthead__inner-wrap, .site-header, .greedy-nav, .greedy-nav .hidden-links {
  -webkit-backdrop-filter: blur(4px) saturate(120%);
  backdrop-filter: blur(4px) saturate(120%);
  background-color: hsla(221, 66%, 24%, 0.12) !important;
  border-bottom: 1px solid hsl(216 85% 13% / .28);
  box-shadow: 0 8px 26px rgba(0,0,0,.28);
}
```

## CSS: Reveal Animations

```css
/* Base reveal + state */
.reveal {
  opacity: 0;
  transform: translateY(var(--reveal-offset));
  filter: blur(var(--reveal-blur));
  transition: opacity var(--reveal-duration) var(--reveal-ease),
              transform var(--reveal-duration) var(--reveal-ease),
              filter var(--reveal-duration) var(--reveal-ease);
  will-change: opacity, transform, filter;
}

.reveal.is-revealed { opacity: 1; transform: none; filter: none; }

/* Modifiers */
.reveal--fade  { transform: none; }
.reveal--up    { transform: translateY(calc(var(--reveal-offset) * 1.33)); }
.reveal--scale { transform: scale(0.985); }

/* Stagger children without extra JS */
[data-reveal-stagger] > .reveal { transition-delay: calc(var(--i, 0) * 80ms); }
[data-reveal-stagger] > .reveal:nth-child(n) { --i: n; }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1 !important; transform: none !important; filter: none !important; }
}
```

## CSS: Button Ripple (optional)

```css
/* Ensure parent can contain the ripple */
.btn, .button, .zen-button { position: relative; overflow: hidden; }

.ripple {
  position: absolute; border-radius: 50%; pointer-events: none; mix-blend-mode: screen;
  background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 40%, transparent 60%);
  transform: scale(0); animation: ripple 0.45s ease-out forwards;
}

@keyframes ripple { to { transform: scale(1); opacity: 0; } }
```

## JS: Reveal on Scroll (IntersectionObserver)

Place as `assets/js/reveal.js` and include in footer scripts.

```js
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); obs.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
  els.forEach(el => io.observe(el));
});
```

## JS: Button Ripple (click feedback)

Place as `assets/js/tactile.js` and include in footer scripts.

```js
document.addEventListener('click', (e)=>{
  const t = e.target.closest('.btn,.button,.zen-button');
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

## HTML Usage Examples

```html
<!-- Glass card -->
<div class="glass card">
  <h3 class="reveal reveal--up">Weekly Meeting</h3>
  <p class="reveal">Tuesdays at 7pm, Community Center</p>
</div>

<!-- Staggered list (auto delays 0,80,160ms,...) -->
<ul data-reveal-stagger>
  <li class="reveal reveal--up">One</li>
  <li class="reveal reveal--up">Two</li>
  <li class="reveal reveal--up">Three</li>
  <!-- … -->
  
</ul>

<!-- Button with ripple -->
<a class="btn reveal reveal--up" href="#meetings">See Meetings</a>
```

## Minimal Mistakes Integration

1) Styles
- Add the Token + CSS blocks to your custom stylesheet:
  - If using SCSS: `assets/css/main.scss` or `assets/css/_custom.scss`
  - If using plain CSS: `assets/css/custom.css`

2) Scripts
- Save the JS snippets as:
  - `assets/js/reveal.js`
  - `assets/js/tactile.js`
- Include them via `_config.yml`:

```yaml
# _config.yml
footer_scripts:
  - /assets/js/reveal.js
  - /assets/js/tactile.js
```

3) Usage
- Add `glass` to containers and cards.
- Add `reveal` plus optional `reveal--up|reveal--fade|reveal--scale` to elements to animate.
- Wrap groups with `data-reveal-stagger` for auto staggering.
- Use `.btn` or your theme button class to get ripple on click.

Accessibility Notes
- All animations disable under `prefers-reduced-motion: reduce`.
- Glass has a solid color fallback when `backdrop-filter` is unsupported.

