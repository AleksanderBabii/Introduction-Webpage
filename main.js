document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button-right');
  const prevButton = document.querySelector('.carousel-button-left');
  const navDots = Array.from(document.querySelectorAll('.carousel-indicator'));

  // Move a slide and update classes
  const moveToSlide = (currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.offsetLeft + 'px)';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  // Update navigation dots
  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  // Next button click
  nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    let nextDot;

    if (!nextSlide) {
      nextSlide = slides[0]; // Loop to the first slide
      nextDot = navDots[0];
    } else {
      nextDot = document.querySelector('.carousel-indicator.current-slide').nextElementSibling;
    }
    
    moveToSlide(currentSlide, nextSlide);
    updateDots(document.querySelector('.carousel-indicator.current-slide'), nextDot);
  });

  // Previous button click
  prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    let prevDot;

    if (!prevSlide) {
      prevSlide = slides[slides.length - 1]; // Loop to the last slide
      prevDot = navDots[navDots.length - 1];
    } else {
      prevDot = document.querySelector('.carousel-indicator.current-slide').previousElementSibling;
    }

    moveToSlide(currentSlide, prevSlide);
    updateDots(document.querySelector('.carousel-indicator.current-slide'), prevDot);
  });

  // Navigation dots click
  navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide');
      const targetSlide = slides[index];
      const currentDot = document.querySelector('.carousel-indicator.current-slide');

      moveToSlide(currentSlide, targetSlide);
      updateDots(currentDot, dot);
    });
  });
});
