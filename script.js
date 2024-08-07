const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  const updateCarousel = () => {
    const cardWidth = document.querySelector('.carousel-card').offsetWidth;
    carouselContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  };

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselContainer.children.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
});