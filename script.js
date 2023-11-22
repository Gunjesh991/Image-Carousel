const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 600;
  carousel.style.transform = `translateX(${offset}px)`;
}
