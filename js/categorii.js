// Datele produselor (în practică, acestea ar veni de la un server)
const products = [
    {
        id: 'chitara-electrica',
        name: "Schecter C-8 Evil Twin",
        price: 1200,
        category: "chitare",
        image: "/imagini/guitar1.png"
    },
    {
        id: 'chitara-acustica',
        name: "Gibson Acoustic Guitar",
        price: 900,
        category: "chitare",
        image: "/imagini/guitar2.png"
    },
    {
        id: 'chitara-bass',
        name: "Ibanez GSR200",
        price: 500,
        category: "chitare",
        image: "/imagini/guitar3.png"
    },
    {
        id: 'mic-shure',
        name: "Shure SM58",
        price: 170,
        category: "microfoane",
        image: "/imagini/microfon1.jpg"
    },
    {
        id: 'mic-tbone',
        name: "The tbone microphone",
        price: 80,
        category: "microfoane",
        image: "/imagini/microfon2.jpg"
    },
    {
        id: 'mic-sennheiser',
        name: "Sennheiser E835",
        price: 200,
        category: "microfoane",
        image: "/imagini/microfon3.jpg"
    },
    {
        id: 'piano-clasic',
        name: "Classical Piano",
        price: 3000,
        category: "piano",
        image: "/imagini/pian1.jpg"
    },
    {
        id: 'pian-electronic',
        name: "Yamaha P-125",
        price: 500,
        category: "piano",
        image: "/imagini/pian2.jpg"
    },
    {
        id: 'pian-electronic2',
        name: "Yamaha PSR-F52",
        price: 400,
        category: "piano",
        image: "/imagini/pian3.jpg"
    },
    {
        id: 'boxa1',
        name: "Martin Audio Speaker",
        price: 400,
        category: "boxe",
        image: "/imagini/boxa1.jpg"
    },
    {
        id: 'boxa2',
        name: "Behringer Active Speaker",
        price: 250,
        category: "boxe",
        image: "/imagini/boxa2.jpg"
    },
    {
        id: 'boxa3',
        name: "RCF Passive Speaker",
        price: 350,
        category: "boxe",
        image: "/imagini/boxa3.jpg"
    },
    {
        id: 'drumset1',
        name: "Millenium MPS-100 Drumset",
        price: 2000,
        category: "tobe",
        image: "/imagini/tobe1.jpg"
    },
    {
        id: 'drumset2',
        name: "Millenium Focus Junior Drumset",
        price: 1000,
        category: "tobe",
        image: "/imagini/tobe2.jpg"
    },
    {
        id: 'drumset3',
        name: "Alesis Strata Prime Drumset",
        price: 650,
        category: "tobe",
        image: "/imagini/tobe3.jpg"
    },
    {
        id: 'tshirt1',
        name: "F.A.R. T-Shirt",
        price: 20,
        category: "imbracaminte",
        image: "/imagini/tshirt1.png"
    },
    {
        id: 'tshirt2',
        name: "F.A.R. x iTec T-Shirt",
        price: 20,
        category: "imbracaminte",
        image: "/imagini/tshirt2.png"
    },
    {
        id: 'tshirt3',
        name: "iTec Special Edition T-Shirt",
        price: 30,
        category: "imbracaminte",
        image: "/imagini/tshirt3.jpg"
    }
];

// Fct pt creeare cardului unui produs
function createProductCard(product) {
    return `
        <div class="product-card">
            <a href="/produs.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${product.price}€</p>
                </div>
            </a>
            <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                <span>Add to cart</span>
            </button>
        </div>
    `;
}

// Fct pt filtrarea produselor dupa categorie
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
    updateCategoryTitle(category);
    updateProductsCount(filteredProducts.length);
}

// Fct pt actualizarea numarului de produse gasite
function updateProductsCount(count) {
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = count;
    }
}

// Fct pt sortarea produselor
function sortProducts(products, sortType) {
    switch(sortType) {
        case 'price-asc':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-desc':
            return [...products].sort((a, b) => b.price - a.price);
        case 'name-asc':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return [...products].sort((a, b) => b.name.localeCompare(a.name));
        default:
            return products;
    }
}

// Fct pt afisarea produselor
function displayProducts(productsToShow) {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;
    
    // Obține tipul de sortare selectat
    const sortSelect = document.getElementById('sortProducts');
    const sortType = sortSelect ? sortSelect.value : 'default';
    
    // Sortează produsele
    const sortedProducts = sortProducts(productsToShow, sortType);
    
    if (sortedProducts.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">Nu s-au găsit produse în această categorie.</p>';
        return;
    }
    
    productsContainer.innerHTML = sortedProducts.map(product => createProductCard(product)).join('');
}

// Fct pt actualizarea titlului categoriei
function updateCategoryTitle(category) {
    const categoryTitle = document.getElementById('categoryTitle');
    if (!categoryTitle) return;
    
    let title = 'Toate categoriile';
    
    switch(category) {
        case 'chitare':
            title = 'Chitare';
            break;
        case 'piano':
            title = 'Piane';
            break;
        case 'tobe':
            title = 'Tobe';
            break;
        case 'microfoane':
            title = 'Microfoane';
            break;
        case 'boxe':
            title = 'Boxe';
            break;
        case 'imbracaminte':
            title = 'Îmbrăcăminte';
            break;
    }
    
    categoryTitle.textContent = title;
}

// Fct pt adaugarea in cos
function addToCart(productId) {
    // Verifică dacă există un coș în localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Găsește produsul după ID
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('Produsul nu a fost găsit:', productId);
        return;
    }
    
    // Verifică dacă produsul există deja în coș
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Incrementează cantitatea dacă produsul există deja în coș
        existingItem.quantity += 1;
    } else {
        // Adaugă produsul în coș dacă nu există
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Salvează coșul în localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Actualizează numărul de produse din coș
    updateCartCount();
    
    // Afișează notificarea
    showNotification('Product added to cart!');
}

// Funcție pentru a afișa notificări
function showNotification(message) {
    // Creează elementul de notificare dacă nu există
    let notification = document.getElementById('notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    // Setează mesajul și afișează notificarea
    notification.textContent = message;
    notification.classList.add('show');
    
    // Ascunde notificarea după 3 secunde
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Inițializare
document.addEventListener('DOMContentLoaded', () => {
    // Verifică parametrul cat din URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get('cat');
    
    // Dacă există un parametru cat, filtrează după acea categorie
    if (categoryFromUrl) {
        filterProducts(categoryFromUrl);
        // Activează categoria corectă în sidebar
        const categoryItems = document.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            if (item.dataset.category === categoryFromUrl) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    } else {
        // Altfel, afișează toate produsele
        filterProducts('all');
    }
    
    // Atașează evenimente pentru filtrarea după categorie
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Elimină clasa active de la toate elementele
            categoryItems.forEach(i => i.classList.remove('active'));
            
            // Adaugă clasa active la elementul selectat
            item.classList.add('active');
            
            // Filtrează produsele după categorie
            const category = item.dataset.category;
            filterProducts(category);
        });
    });
    
    // Atașează eveniment pentru sortarea produselor
    const sortSelect = document.getElementById('sortProducts');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const activeCategory = document.querySelector('.category-item.active');
            const category = activeCategory ? activeCategory.dataset.category : 'all';
            filterProducts(category);
        });
    }
    
    // Actualizează numărul de produse din coș
    updateCartCount();
});

// Fct pt actualizarea numarului de produse din cos
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (!cartCountElement) return;
    
    // Obține coșul din localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Calculează numărul total de produse din coș
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    // Actualizează elementul de afișare
    cartCountElement.textContent = totalItems;
}

// Actualizează numărul de produse din coș la încărcarea paginii
document.addEventListener('DOMContentLoaded', updateCartCount);
