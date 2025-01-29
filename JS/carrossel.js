const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 3000);