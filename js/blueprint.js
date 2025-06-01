// Blueprint Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize skills radar chart
  initSkillsChart();
  
  // Initialize milestone animations
  initMilestoneAnimations();
  
  // Initialize music player
  initMusicPlayer();
  
  // Initialize design process interactions
  initProcessSteps();
});

// Initialize skills radar chart
function initSkillsChart() {
  const ctx = document.getElementById('skillsChart');
  if (!ctx) return;
  
  const data = {
    labels: [
      'UI Design',
      'UX Research',
      'Typography',
      'Branding',
      'Illustration',
      'Motion Design',
      '3D Modeling',
      'Frontend Dev'
    ],
    datasets: [
      {
        label: 'Current Skills',
        data: [85, 70, 90, 80, 75, 65, 50, 60],
        fill: true,
        backgroundColor: 'rgba(162, 57, 202, 0.2)',
        borderColor: 'rgba(162, 57, 202, 1)',
        pointBackgroundColor: 'rgba(162, 57, 202, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(162, 57, 202, 1)'
      },
      {
        label: '2025 Goals',
        data: [95, 90, 95, 95, 85, 85, 75, 80],
        fill: true,
        backgroundColor: 'rgba(71, 23, 246, 0.2)',
        borderColor: 'rgba(71, 23, 246, 1)',
        pointBackgroundColor: 'rgba(71, 23, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(71, 23, 246, 1)'
      }
    ]
  };
  
  const config = {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
        r: {
          angleLines: {
            color: 'rgba(231, 223, 221, 0.1)'
          },
          grid: {
            color: 'rgba(231, 223, 221, 0.1)'
          },
          pointLabels: {
            color: '#E7DFDD',
            font: {
              family: 'Space Grotesk, sans-serif',
              size: 14
            }
          },
          ticks: {
            backdropColor: 'transparent',
            color: 'rgba(231, 223, 221, 0.5)',
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(14, 11, 22, 0.9)',
          titleColor: '#E7DFDD',
          bodyColor: '#E7DFDD',
          borderColor: 'rgba(162, 57, 202, 0.5)',
          borderWidth: 1,
          displayColors: false,
          padding: 12,
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw}%`;
            }
          }
        }
      }
    }
  };
  
  new Chart(ctx, config);
}

// Initialize milestone animations
function initMilestoneAnimations() {
  const milestones = document.querySelectorAll('.milestone');
  if (!milestones.length) return;
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  }
  
  function handleScroll() {
    milestones.forEach(milestone => {
      if (isInViewport(milestone)) {
        milestone.classList.add('animate');
      }
    });
  }
  
  // Initial check
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
}

// Initialize music player
function initMusicPlayer() {
  const playBtn = document.querySelector('.play-btn');
  if (!playBtn) return;
  
  let isPlaying = false;
  
  playBtn.addEventListener('click', function() {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
      playBtn.innerHTML = '<i class="fas fa-pause"></i>';
      playBtn.style.background = 'var(--color-secondary)';
    } else {
      playBtn.innerHTML = '<i class="fas fa-play"></i>';
      playBtn.style.background = 'var(--color-primary)';
    }
  });
}

// Initialize design process steps interactions
function initProcessSteps() {
  const steps = document.querySelectorAll('.process-step');
  if (!steps.length) return;
  
  steps.forEach(step => {
    step.addEventListener('mouseenter', function() {
      const number = this.querySelector('.step-number');
      if (number) {
        number.style.transform = 'scale(1.1) rotate(10deg)';
      }
    });
    
    step.addEventListener('mouseleave', function() {
      const number = this.querySelector('.step-number');
      if (number) {
        number.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });
}

