document.documentElement.classList.add('js');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const header = document.querySelector('[data-header]');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('[data-nav-links] a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('load', updateHeader);

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: '0px 0px -70px 0px' }
);

revealElements.forEach((element) => revealObserver.observe(element));
