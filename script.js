// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Navbar background + active link
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) current = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});

// Duplicate marquee content for seamless loop
const track = document.getElementById('track');
track.innerHTML += track.innerHTML;
track.querySelectorAll('.tech-pill').forEach((p, i, all) => { if (i >= all.length / 2) p.setAttribute('aria-hidden', 'true'); });

// Section reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
}, { threshold: 0.12 });
document.querySelectorAll('section').forEach(s => revealObs.observe(s));

// Skill bars + counter
function animateCounter(el, target) {
  let cur = 0;
  const step = target / 50;
  const t = setInterval(() => {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(t); }
    el.textContent = Math.floor(cur) + (target > 10 ? '+' : '');
  }, 30);
}
const itemObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const bar = el.querySelector('.progress-bar');
    if (bar) setTimeout(() => bar.style.width = bar.dataset.width + '%', 200);
    const num = el.querySelector('.stat-number');
    if (num) animateCounter(num, parseInt(num.textContent));
    itemObs.unobserve(el);
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-card, .stat-item').forEach(el => itemObs.observe(el));

// Contact form (Formspree)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const btn = form.querySelector('.btn-primary');
  const original = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;
  try {
    const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (res.ok) { alert('Message sent successfully!'); form.reset(); }
    else alert('An error occurred, please try again');
  } catch { alert('An error occurred, please try again'); }
  finally { btn.textContent = original; btn.disabled = false; }
});
