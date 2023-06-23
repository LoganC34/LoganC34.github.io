document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".reviews__carousel");
    const prevBtn = document.querySelector(".reviews__prev-btn");
    const nextBtn = document.querySelector(".reviews__next-btn");
    
    let currentPosition = 0;
    const slideWidth = document.querySelector(".reviews__slide").offsetWidth;

    function goToSlide(position) {
      carousel.style.transform = `translateX(-${position}px)`;
    }
  
    function showNextSlide() {
        
      currentPosition += slideWidth;
      if (currentPosition >= carousel.offsetWidth) {
        currentPosition = 0;
      }
      goToSlide(currentPosition);
    }
  
    function showPrevSlide() {
      currentPosition -= slideWidth;
      if (currentPosition < 0) {
        currentPosition = carousel.offsetWidth - slideWidth;
      }
      goToSlide(currentPosition);
    }
  
    prevBtn.addEventListener("click", showPrevSlide);
    nextBtn.addEventListener("click", showNextSlide);
  });
  