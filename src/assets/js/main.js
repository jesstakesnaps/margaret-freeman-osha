// ── MARGARET FREEMAN OSHA ──

document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll behaviour
  const navbar = document.getElementById('navbar');
  if (navbar && !navbar.classList.contains('solid')) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

  // Netlify Identity redirect
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });
  }

});
