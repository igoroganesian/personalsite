window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.opacity = '1';
    nav.style.pointerEvents = 'auto';
  } else {
    nav.style.opacity = '0';
    nav.style.pointerEvents = 'none';
  }
});