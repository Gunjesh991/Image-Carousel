const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentIndex * 300; // Adjust 300 to match the image container width
  carousel.style.transform = `translateX(${offset}px)`;
}
