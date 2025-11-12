document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let current = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
      });
    }
  
    prevButton.addEventListener('click', () => {
      current = (current === 0) ? slides.length - 1 : current - 1;
      showSlide(current);
    });
  
    nextButton.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000);
  });
  