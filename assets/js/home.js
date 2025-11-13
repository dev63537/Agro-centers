// ============================================
// HOME PAGE SPECIFIC JAVASCRIPT
// Slider, Newsletter, and Home Features
// ============================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideInterval;
let touchStartX = 0;
let touchEndX = 0;

// Initialize slider
function initSlider() {
    createDots();
    updateSlider();
    setupSwipeGestures();
    startAutoSlide();
}

// Create dot indicators
function createDots() {
    const dotsContainer = document.querySelector('.slider-dots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => {
            currentSlide = i;
            clearInterval(autoSlideInterval);
            updateSlider();
            startAutoSlide();
        };
        dotsContainer.appendChild(dot);
    }
}

// Update slider display
function updateSlider() {
    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    // Update dots
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Change slide on button click
function changeSlide(n) {
    clearInterval(autoSlideInterval);
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    updateSlider();
    startAutoSlide();
}

// Auto-advance slider every 5 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
}

// Setup swipe gestures for mobile
function setupSwipeGestures() {
    const sliderContainer = document.querySelector('.hero-slider');
    
    if (!sliderContainer) return;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    sliderContainer.addEventListener('mousedown', (e) => {
        touchStartX = e.clientX;
    });

    sliderContainer.addEventListener('mouseup', (e) => {
        touchEndX = e.clientX;
        handleSwipe();
    });
}

// Handle swipe direction
function handleSwipe() {
    const swipeThreshold = 50;
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
            // Swiped left - go to next slide
            changeSlide(1);
        } else {
            // Swiped right - go to previous slide
            changeSlide(-1);
        }
    }
}

// Newsletter signup
function handleNewsletterSignup(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    if (email) {
        AgroCenter.showMessage('Successfully subscribed! Check your email for updates.', 'success');
        form.reset();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        initSlider();
    }
    
    // Setup contact form if it exists
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        AgroCenter.setupFormHandling('.contact-form', 'Thank you! We will contact you soon.');
    }
});

console.log('Home page script loaded with swipe support');
