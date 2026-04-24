// LAPS — main.js

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // Mobile: tap on nav-item with dropdown toggles it
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    });
  }
}

// Active nav link highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href.includes(currentPage) && currentPage !== 'index.html') {
    link.classList.add('active');
  }
});

// Sticky header shrink on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.paddingTop = '0';
  }
});
