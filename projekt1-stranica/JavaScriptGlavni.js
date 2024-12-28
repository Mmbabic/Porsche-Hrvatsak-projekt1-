const images = document.querySelectorAll(".carousel-image");

let currentImageIndex = 0;

function changeImage() {
  images[currentImageIndex].classList.remove("active");

  currentImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].classList.add("active");
}

setInterval(changeImage, 3000); // 7000 ms = 7 seconds
