window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// News Functionality
document.addEventListener('DOMContentLoaded', function() {
    // News Slider
    const newsSlider = document.querySelector('.news-slider');
    const newsItems = document.querySelectorAll('.news-item');
    const prevBtn = document.querySelector('.news-control.prev');
    const nextBtn = document.querySelector('.news-control.next');
    let currentNewsIndex = 0;
    let isAnimating = false;
    
    function showNews(index) {
        if (isAnimating) return;
        isAnimating = true;
        
        const currentItem = newsItems[currentNewsIndex];
        const nextItem = newsItems[index];
        
        // Ascunde itemul curent
        currentItem.style.opacity = '0';
        setTimeout(() => {
            currentItem.classList.remove('active');
            currentItem.style.display = 'none';
            
            // Arată următorul item
            nextItem.style.display = 'block';
            setTimeout(() => {
                nextItem.style.opacity = '1';
                nextItem.classList.add('active');
                isAnimating = false;
            }, 50);
        }, 300);
        
        currentNewsIndex = index;
    }
    
    prevBtn.addEventListener('click', () => {
        const newIndex = (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
        showNews(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = (currentNewsIndex + 1) % newsItems.length;
        showNews(newIndex);
    });
    
    // Auto-play pentru slider
    let autoPlayInterval = setInterval(() => {
        const newIndex = (currentNewsIndex + 1) % newsItems.length;
        showNews(newIndex);
    }, 5000);
    
    newsSlider.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    newsSlider.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(() => {
            const newIndex = (currentNewsIndex + 1) % newsItems.length;
            showNews(newIndex);
        }, 5000);
    });
}); 

// Actualizează numărul de produse din coș
        function updateCartCount() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
            const cartCount = document.getElementById('cart-count');
            if (cartCount) {
                cartCount.textContent = totalItems;
            }
        }

        // Actualizează numărul de produse din coș la încărcarea paginii
        document.addEventListener('DOMContentLoaded', updateCartCount);