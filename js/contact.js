window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Funcție simplă pentru animații la încărcarea paginii
document.addEventListener('DOMContentLoaded', function() {
    // Selectează toate elementele care trebuie animate
    const animatedElements = document.querySelectorAll('.animated-element');
    
    // Funcție pentru verificarea dacă un element este în viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
        );
    }
    
    // Funcție pentru animarea elementelor vizibile
    function animateElements() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Animează elementele vizibile la încărcare
    setTimeout(animateElements, 100);
    
    // Animează elemente la scroll
    window.addEventListener('scroll', animateElements);
    
    // Validare formular și animație de succes
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        showThankYouPopup(); // Folosim pop-up-ul în loc de alert
    });
    
    // Inițializăm toggle-ul de temă
    initThemeToggle();
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

// Funcție pentru afișarea pop-up-ului de mulțumire
function showThankYouPopup() {
    const popup = document.createElement('div');
    popup.className = 'thank-you-popup';
    popup.innerHTML = `
        <h3>Mulțumim pentru mesaj!</h3>
        <p>Vă mulțumim că ne-ați contactat. Vom răspunde în cel mai scurt timp posibil.</p>
        <button class="close-btn">OK</button>
    `;
    
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    
    // Adăugăm clasa show după un mic delay pentru animație
    setTimeout(() => {
        overlay.classList.add('show');
        popup.classList.add('show');
    }, 10);
    
    // Adăugăm event listener pentru butonul de închidere
    const closeBtn = popup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
        overlay.classList.remove('show');
        
        // Ștergem elementele după ce animația s-a terminat
        setTimeout(() => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            // Resetăm formularul
            document.getElementById('contactForm').reset();
        }, 300);
    });
    
    // Adăugăm event listener pentru overlay
    overlay.addEventListener('click', () => {
        closeBtn.click();
    });
}

// Email.js 
function sendEmail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_gt04qzx', 'template_xkq3gej', params)
    .then(function(response) {
        console.log('Email sent successfully:', response);
        showThankYouPopup(); // Apelăm funcția de pop-up după trimiterea cu succes
    }, function(error) {
        console.log('Email sending failed:', error);
        alert('A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.');
    });
}


