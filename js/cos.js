window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Funcție pentru a încărca produsele din coș
function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartItems.length === 0) {
        emptyCartMessage.style.display = 'block';
        checkoutBtn.disabled = true;
        // Resetează sumele la 0 când coșul este gol
        document.getElementById('subtotal').textContent = '0.00€';
        document.getElementById('shipping').textContent = '0.00€';
        document.getElementById('total').textContent = '0.00€';
        return;
    }

    emptyCartMessage.style.display = 'none';
    checkoutBtn.disabled = false;
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = createCartItemElement(item);
        cartContainer.appendChild(cartItem);
    });

    updateCartSummary();
    updateCartCount();
}

// Funcție pentru a crea elementul HTML pentru un produs din coș
function createCartItemElement(item) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.id = `cart-item-${item.id}`;
    div.innerHTML = `
        <div class="cart-item-details">
            <h5>${item.name}</h5>
            <p class="text-muted">${item.category || ''}</p>
        </div>
        <div class="cart-item-quantity">
            <button class="quantity-btn minus-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
            <span class="quantity">${item.quantity || 1}</span>
            <button class="quantity-btn plus-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
        </div>
        <div class="cart-item-price">
            <span>${((item.price || 0) * (item.quantity || 1)).toFixed(2)}€</span>
        </div>
        <button class="remove-btn" onclick="removeFromCart('${item.id}')">
            <i class="fas fa-trash"></i>
        </button>
    `;
    return div;
}

// Funcție pentru a actualiza cantitatea unui produs
function updateQuantity(productId, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        const newQuantity = (cart[itemIndex].quantity || 1) + change;
        if (newQuantity > 0) {
            cart[itemIndex].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Actualizează doar elementul specific, nu reîncărca tot coșul
            const cartItem = document.getElementById(`cart-item-${productId}`);
            if (cartItem) {
                const quantityElement = cartItem.querySelector('.quantity');
                const priceElement = cartItem.querySelector('.cart-item-price span');
                
                quantityElement.textContent = newQuantity;
                priceElement.textContent = `${((cart[itemIndex].price || 0) * newQuantity).toFixed(2)}€`;
            }
            
            // Actualizează sumarul și numărul de produse
            updateCartSummary();
            updateCartCount();
            
            showNotification('The quantity has been updated');
        }
    }
}

// Funcție pentru a șterge un produs din coș
function removeFromCart(productId) {
    // Șterge elementul din DOM imediat
    const cartItem = document.getElementById(`cart-item-${productId}`);
    if (cartItem) {
        cartItem.style.opacity = '0';
        cartItem.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            cartItem.remove();
            
            // Actualizează localStorage
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const newCart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(newCart));
            
            // Verifică dacă mai sunt produse în coș
            if (newCart.length === 0) {
                document.getElementById('emptyCartMessage').style.display = 'block';
                document.getElementById('checkoutBtn').disabled = true;
                
                // Resetează sumele la 0
                document.getElementById('subtotal').textContent = '0.00€';
                document.getElementById('shipping').textContent = '0.00€';
                document.getElementById('total').textContent = '0.00€';
            }
            
            // Actualizează sumarul și numărul de produse
            updateCartSummary();
            updateCartCount();
            
            showNotification('The product has been removed from the cart');
        }, 300);
    }
}

// Funcție pentru a actualiza sumarul coșului
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((total, item) => total + ((item.price || 0) * (item.quantity || 1)), 0);
    const shipping = subtotal > 0 ? 20 : 0;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `${subtotal.toFixed(2)}€`;
    document.getElementById('shipping').textContent = `${shipping.toFixed(2)}€`;
    document.getElementById('total').textContent = `${total.toFixed(2)}€`;
}

// Funcție pentru a actualiza numărul de produse din coș
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Funcție pentru a afișa notificări
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Inițializare când pagina se încarcă
document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
}); 