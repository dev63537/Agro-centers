// Products page search and filter functionality

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const priceSlider = document.querySelector('.price-slider');
    const priceValue = document.getElementById('priceValue');
    const productCards = document.querySelectorAll('.product-card');

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            productCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const text = card.querySelector('.card-text').textContent.toLowerCase();
                if (title.includes(searchTerm) || text.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            updateProductCount();
        });
    }

    // Price filter
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            const maxPrice = e.target.value;
            priceValue.textContent = maxPrice;
            productCards.forEach(card => {
                const price = parseInt(card.getAttribute('data-price'));
                if (price <= maxPrice) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            updateProductCount();
        });
    }

    // Update visible product count
    function updateProductCount() {
        const visibleCount = Array.from(productCards).filter(card => card.style.display !== 'none').length;
        document.getElementById('productCount').textContent = visibleCount;
    }

    // Setup form handling
    AgroCenter.setupFormHandling('.contact-form');
});
