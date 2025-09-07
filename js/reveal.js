document.addEventListener('DOMContentLoaded', () => {
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduce) return;

  // Automatically tag common page content for reveal within _pages
  const scopes = document.querySelectorAll('.page__content');
  scopes.forEach(scope => {
    scope.setAttribute('data-reveal-stagger', '');
    const targets = scope.querySelectorAll([
      'h1','h2','h3','h4','h5','h6',
      'p','ul','ol','blockquote','hr',
      'details.accordion',
      '.feature__wrapper .archive__item',
      '.feature__item',
      'a.btn','a.btn-modern','.btn-modern',
      '.notice','.card','.refs .ref-item'
    ].join(','));
    targets.forEach(el => { if (!el.classList.contains('reveal')) el.classList.add('reveal'); });
  });

  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); obs.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
  els.forEach(el => io.observe(el));
});
