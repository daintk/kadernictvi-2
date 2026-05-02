// Navigation scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Mobile menu toggle (basic)
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('open');
    }
  });
});

// Booking form
const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    // Replace with your backend / email service
    alert('Děkujeme! Vaše rezervace byla odeslána. Ozveme se do 24 hodin na číslo ' + (data.phone || '...') + '.');
    form.reset();
  });
}

// Reveal on scroll (intersection observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.section, .section-dark').forEach(s => {
  observer.observe(s);
});

// Current year in footer
document.querySelectorAll('.footer-bottom p').forEach(p => {
  if (p.textContent.includes('2025')) {
    p.textContent = p.textContent.replace('2025', new Date().getFullYear());
  }
});
