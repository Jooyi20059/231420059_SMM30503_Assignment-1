document.addEventListener('DOMContentLoaded', function() {
  // ===== Mobile Menu Toggle =====
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navSocial = document.querySelector('.nav-social');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      // Toggle mobile menu
      navLinks.classList.toggle('active');
      navSocial.classList.toggle('active');
      
      // Toggle icon
      const icon = this.querySelector('i');
      icon.classList.toggle('fa-times');
      icon.classList.toggle('fa-bars');
      
      // Toggle body scroll
      document.body.style.overflow = 
        document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
    });
  }

  // ===== Smooth Scrolling =====
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
      }
    });
  });

  // ===== Project Card Interactions =====
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const viewBtn = card.querySelector('.view-project-btn');
    const projectLink = card.querySelector('.project-link');
    
    // Make card clickable
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e) {
      // Ignore if clicking on buttons/links
      if (e.target.tagName === 'BUTTON' || 
          e.target.tagName === 'A' || 
          e.target.parentElement.tagName === 'A') {
        return;
      }
      window.location.href = projectLink.href;
    });
    
    // Hover effects
    card.addEventListener('mouseenter', function() {
      this.querySelector('.project-image').style.transform = 'scale(1.03)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.project-image').style.transform = 'scale(1)';
    });
  });

  // ===== Scroll Animations =====
  const animateOnScroll = function() {
    const elements = document.querySelectorAll(
      '.project-card, .section-title, .scenes-content > *'
    );
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initialize elements
  document.querySelectorAll('.project-card, .section-title, .scenes-content > *').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(var(--space-lg))';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Trigger animations
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);

  // ===== Current Year in Footer =====
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ===== Color System Console Log =====
  console.log('%cCOLOR SYSTEM', 'font-size:18px;font-weight:bold;color:#A239CA;');
  console.log('%cPrimary: #0E0B16', 'color:#0E0B16;font-weight:bold;');
  console.log('%cAccent: #A239CA', 'color:#A239CA;font-weight:bold;');
  console.log('%cSecondary: #4717F6', 'color:#4717F6;font-weight:bold;');
  console.log('%cLight: #E7DFDD', 'color:#E7DFDD;font-weight:bold;background:#0E0B16;padding:2px 5px;');
});