// Main JavaScript file for global functionality

// Preloader functionality
document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.preloader');
  const percentage = document.querySelector('.preloader-percentage');
  
  if(preloader) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;
      if (progress > 100) progress = 100;
      percentage.textContent = progress + '%';
      
      if (progress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.visibility = 'hidden';
        }, 500);
      }
    }, 100);
  }
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  
  if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if(mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if(mobileMenu.classList.contains('active') && 
       !mobileMenu.contains(e.target) && 
       !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Active link highlighting
  const currentLocation = location.href;
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu-content a');
  
  navLinks.forEach(link => {
    if(link.href === currentLocation) {
      link.classList.add('active');
    }
  });
});