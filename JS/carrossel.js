const images = document.querySelectorAll('.carousel-images img');
const carousel = document.querySelector('.carousel-images');
let currentIndex = 0;

function showImage(index) {
  const offset = -index * 100; 
  carousel.style.transform = `translateX(${offset}%)`; //
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Avança para a próxima imagem
  

  if (currentIndex === 0) {
    carousel.style.transition = 'none'; 
    showImage(currentIndex);

   
    setTimeout(() => {
      carousel.style.transition = 'transform 1s ease-in-out';
    }, 20); 
  } else {
    showImage(currentIndex); 
  }
}

showImage(currentIndex); 
setInterval(nextImage, 3000);
