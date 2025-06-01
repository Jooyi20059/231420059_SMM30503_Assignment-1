// Inspirations Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles.js background
  initParticles();
  
  // Initialize card hover effects
  initInspirationCards();
  
  // Initialize table row animations
  initTableEffects();
  
  // Initialize newsletter form
  initNewsletterForm();
});

// Initialize particles.js background
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#A239CA"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4717F6",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

// Initialize inspiration card interactions
function initInspirationCards() {
  const cards = document.querySelectorAll('.inspiration-card');
  
  cards.forEach(card => {
    // Add click event to toggle details on mobile
    card.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        const details = this.querySelector('.card-details');
        if (details) {
          details.classList.toggle('active');
        }
      }
    });
    
    // Add category color coding
    const category = card.getAttribute('data-category');
    if (category) {
      const metaCategory = card.querySelector('.meta-category');
      if (metaCategory) {
        switch(category) {
          case 'designer':
            metaCategory.style.backgroundColor = 'rgba(162, 57, 202, 0.3)';
            break;
          case 'platform':
            metaCategory.style.backgroundColor = 'rgba(71, 23, 246, 0.3)';
            break;
          case 'brand':
            metaCategory.style.backgroundColor = 'rgba(231, 223, 221, 0.3)';
            metaCategory.style.color = '#0E0B16';
            break;
          case 'tool':
            metaCategory.style.backgroundColor = 'rgba(162, 57, 202, 0.5)';
            break;
        }
      }
    }
  });
}

// Initialize table row animations
function initTableEffects() {
  const tableRows = document.querySelectorAll('table tr');
  
  tableRows.forEach((row, index) => {
    // Skip header row
    if (index > 0) {
      row.style.opacity = '0';
      row.style.transform = 'translateX(-20px)';
      row.style.transition = `all 0.5s ease ${index * 0.1}s`;
      
      // Trigger animation when in view
      setTimeout(() => {
        row.style.opacity = '1';
        row.style.transform = 'translateX(0)';
      }, 100);
    }
  });
}

// Initialize newsletter form
function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const button = this.querySelector('button');
    
    if (emailInput.value) {
      // Here you would typically send the data to a server
      console.log('Subscribed with:', emailInput.value);
      
      // Visual feedback
      button.textContent = 'Subscribed!';
      button.style.background = 'linear-gradient(90deg, var(--color-secondary), var(--color-primary))';
      
      setTimeout(() => {
        emailInput.value = '';
        button.textContent = 'Subscribe';
      }, 2000);
    }
  });
}