// DNA Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Preloader animation
  const preloader = document.querySelector('.preloader');
  const percentage = document.querySelector('.preloader-percentage');
  
  if (preloader) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.visibility = 'hidden';
          animateElements();
        }, 500);
      }
      percentage.textContent = `${progress}%`;
    }, 100);
  }

  // Animate elements on scroll
  function animateElements() {
    const elements = document.querySelectorAll('.keyword-bubble, .palette-stroke');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => {
      observer.observe(element);
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // Parallax effect for hero section
  const heroSection = document.querySelector('.dna-hero');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }

  // Tooltip for tools
  const toolPlanets = document.querySelectorAll('.tool-planet');
  toolPlanets.forEach(planet => {
    planet.addEventListener('mouseenter', () => {
      planet.style.transform = 'scale(1.1)';
      planet.style.boxShadow = '0 10px 30px rgba(162, 57, 202, 0.5)';
    });
    
    planet.addEventListener('mouseleave', () => {
      planet.style.transform = '';
      planet.style.boxShadow = '';
    });
  });
});