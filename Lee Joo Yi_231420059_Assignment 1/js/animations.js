// Animation specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Hero title animation
  const words = document.querySelectorAll('.word');
  
  if(words.length > 0) {
    words.forEach((word, index) => {
      word.style.animationDelay = `${index * 0.2}s`;
      word.style.animation = 'slideUp 0.8s forwards';
    });
  }
  
  // Like button functionality
  const likeButtons = document.querySelectorAll('.like-btn');
  
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const heartIcon = this.querySelector('i');
      const countSpan = this.querySelector('span');
      let count = parseInt(countSpan.textContent);
      
      if (heartIcon.classList.contains('far')) {
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
        countSpan.textContent = count + 1;
        this.style.color = '#A239CA';
        
        // Add animation effect
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 300);
      } else {
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');
        countSpan.textContent = count - 1;
        this.style.color = '#E7DFDD';
      }
    });
  });
});