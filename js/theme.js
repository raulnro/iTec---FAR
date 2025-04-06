// Funcție pentru inițializarea și gestionarea temei
function initThemeToggle() {
    // Setează tema implicită la 'light' și verifică localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Creează butonul de toggle dacă nu există
    let toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) {
        toggleButton = document.createElement('button');
        toggleButton.id = 'theme-toggle';
        toggleButton.setAttribute('aria-label', 'Toggle theme');
        updateToggleButton(toggleButton, savedTheme);
        document.body.appendChild(toggleButton);
    }

    // Adaugă event listener pentru schimbarea temei
    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        updateToggleButton(toggleButton, newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Animație pentru tranziție
        document.documentElement.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    });

    // Ascultă pentru schimbări în preferințele sistemului
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
            updateToggleButton(toggleButton, newTheme);
        }
    });
}

// Funcție pentru aplicarea temei
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Setează stilurile pentru navbar și footer indiferent de temă
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = '#000';
        navbar.style.color = '#fff';
        // Setează culoarea albă pentru toate elementele din navbar
        const navbarElements = navbar.querySelectorAll('a, .nav-link, .navbar-brand');
        navbarElements.forEach(element => {
            element.style.color = '#fff';
        });
    }

    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.backgroundColor = '#000';
        footer.style.color = '#fff';
        // Setează culoarea albă pentru toate elementele din footer
        const footerElements = footer.querySelectorAll('a, p, h1, h2, h3, h4, h5, h6');
        footerElements.forEach(element => {
            element.style.color = '#fff';
        });
    }
    
    // Stiluri pentru dark mode
    if (theme === 'dark') {
        // Schimbă doar fundalul body-ului
        document.body.style.backgroundColor = '#000';

        // Verifică dacă suntem pe pagina coșului
        if (window.location.pathname.includes('cos.html')) {
            // Păstrează tot textul negru în pagina coșului
            const cartElements = document.querySelectorAll('.cart-container h1, .cart-container h2, .cart-container p, .cart-container .card-title, .cart-container .card-text, #order-summary h2, #order-summary p');
            cartElements.forEach(element => {
                element.style.color = '#000';
            });
            // Setează fundalul alb pentru containerele din coș
            const cartContainers = document.querySelectorAll('.cart-container, #order-summary');
            cartContainers.forEach(container => {
                container.style.backgroundColor = '#fff';
            });
            return; // Ieși din funcție pentru a nu aplica alte stiluri
        }

        // Popular Categories din index.html - doar fundalul se schimbă
        const popularCategories = document.querySelector('.categories-section');
        if (popularCategories) {
            popularCategories.style.backgroundColor = '#000';
            // Păstrează cardurile albe
            const categoryCards = popularCategories.querySelectorAll('.card');
            categoryCards.forEach(card => {
                card.style.backgroundColor = '#fff';
                card.style.color = '#000';
            });
            // Păstrează textele din carduri negre
            const cardTexts = popularCategories.querySelectorAll('.card-title, .card-text');
            cardTexts.forEach(text => {
                text.style.color = '#000';
            });
        }
        
        // About Us din index.html rămâne alb
        const aboutUs = document.querySelector('.team-section');
        if (aboutUs) {
            aboutUs.style.backgroundColor = '#fff';
            aboutUs.style.color = '#000';
        }
        
        // FAQ din index.html
        const faq = document.querySelector('.faq-section');
        if (faq) {
            faq.style.backgroundColor = '#000';
            faq.style.color = '#fff';
        }

        // Contact page sections
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.style.backgroundColor = '#000';
            contactForm.style.color = '#fff';
        }

        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            contactInfo.style.backgroundColor = '#000';
            contactInfo.style.color = '#fff';
        }
        
        // Schimbă culoarea textului pentru elementele principale, exceptând navbar și secțiunile specificate
        const mainTexts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .card-title, .card-text, .product-title, .product-price, .product-description');
        mainTexts.forEach(element => {
            if (!element.closest('.navbar') && 
                !element.closest('.categories-section') && 
                !element.closest('.team-section')) {
                element.style.color = '#fff';
            }
        });
        
    } else {
        // Resetare la light mode
        document.body.style.backgroundColor = '#fff';
        
        // Resetare pentru secțiunile specificate
        const popularCategories = document.querySelector('.categories-section');
        if (popularCategories) {
            popularCategories.style.backgroundColor = '';
            const categoryCards = popularCategories.querySelectorAll('.card');
            categoryCards.forEach(card => {
                card.style.backgroundColor = '';
                card.style.color = '';
            });
            const cardTexts = popularCategories.querySelectorAll('.card-title, .card-text');
            cardTexts.forEach(text => {
                text.style.color = '';
            });
        }
        
        // About Us rămâne neschimbat în light mode
        const aboutUs = document.querySelector('.team-section');
        if (aboutUs) {
            aboutUs.style.backgroundColor = '#fff';
            aboutUs.style.color = '#000';
        }
        
        // FAQ din index.html
        const faq = document.querySelector('.faq-section');
        if (faq) {
            faq.style.backgroundColor = '';
            faq.style.color = '';
        }

        // Contact page sections
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.style.backgroundColor = '';
            contactForm.style.color = '';
        }

        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            contactInfo.style.backgroundColor = '';
            contactInfo.style.color = '';
        }
        
        // Resetare pentru texte
        const mainTexts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .card-title, .card-text, .product-title, .product-price, .product-description');
        mainTexts.forEach(element => {
            if (!element.closest('.navbar') && 
                !element.closest('.categories-section') && 
                !element.closest('.team-section')) {
                element.style.color = '';
            }
        });
    }

    // Actualizează meta theme-color pentru mobile
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#121212' : '#ffffff');
    }
}

// Funcție pentru actualizarea butonului de toggle
function updateToggleButton(button, theme) {
    button.innerHTML = theme === 'light' 
        ? '<i class="fas fa-moon" style="font-size: 1.2em;"></i>' 
        : '<i class="fas fa-sun" style="font-size: 1.2em;"></i>';
    
    // Adaugă un efect de rotație la schimbarea iconului
    button.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        button.style.transform = '';
    }, 300);
}

// Inițializează tema când DOM-ul este încărcat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
    initThemeToggle();
}
