document.addEventListener('DOMContentLoaded', () => {
  const navTarget = document.getElementById('site-nav');

  if (!navTarget) return;

  fetch('components/nav.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Navigation component not found');
      }
      return response.text();
    })
    .then((html) => {
      navTarget.innerHTML = html;

      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const links = navTarget.querySelectorAll('a');

      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
          link.classList.add('active');
        }
      });
    })
    .catch((error) => {
      console.error('Unable to load navigation:', error);
      navTarget.innerHTML = '<nav class="main-nav"><a href="index.html">Home</a></nav>';
    });
});
