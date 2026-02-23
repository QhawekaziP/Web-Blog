
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.navbar ul');
  const body = document.body;

  // Toggle menu
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('show');
    body.classList.toggle('menu-open');
    
    // Animate hamburger icon (optional)
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar ul a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      body.classList.remove('menu-open');
      hamburger.classList.remove('active');
    });
  });


    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideNav.classList.toggle('show');     
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      body.classList.remove('menu-open');
      hamburger.classList.remove('active');
    }
  });
