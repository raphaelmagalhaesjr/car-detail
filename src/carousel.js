document.addEventListener('DOMContentLoaded', function () {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;

  function updateCarousel() {
    const width = images[currentIndex].clientWidth;
    carouselImages.style.transform = `translateX(-${width * currentIndex}px)`;
  }

  nextButton.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1;
    }
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);

  updateCarousel();
});
