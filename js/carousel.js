const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showCarousel(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
}

function nextCarousel() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarousel(currentIndex);
}

// Auto-advance carousel every 8 seconds (duration of zoom animation + transition)
setInterval(nextCarousel, 8000);

// Initialize first slide
showCarousel(0);