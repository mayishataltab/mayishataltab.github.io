(function () {
  const root = document.documentElement;

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  const isDark = () =>
    root.getAttribute('data-theme') === 'dark' ||
    (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  themeBtn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });

  // Nav border on scroll
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // Active nav link
  const navAnchors = [...links.querySelectorAll('a')];
  const sections = navAnchors.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => so.observe(s));
  }

  // Copy citation
  const toast = document.getElementById('toast');
  let tId;
  const showToast = (msg) => {
    toast.textContent = msg; toast.classList.add('show');
    clearTimeout(tId); tId = setTimeout(() => toast.classList.remove('show'), 1800);
  };
  document.querySelectorAll('.copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(btn.dataset.cite); showToast(btn.dataset.msg || 'Citation copied'); }
      catch (e) { showToast('Copy not available'); }
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
