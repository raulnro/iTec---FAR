// Produsele disponibile
const products = {
    'chitara-electrica': {
        title: 'Schecter C-8 Evil Twin',
        image: '/imagini/guitar1.png',
        price: 1200,
        stock: 'In stock',
        description: 'A very high quality guitar with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Body made of mahogany',
            'Neck made of maple',
            '6 strings',
            '2 humbucker pickups',
            'Includes case'
        ],
        reviews: [
            {
                author: 'Ion Popescu',
                date: '2024-03-15',
                rating: 5,
                text: 'Excellent guitar for beginners. The sound is very good and the construction is solid.'
            },
            {
                author: 'Maria Ionescu',
                date: '2024-03-10',
                rating: 4,
                text: 'Very satisfied with the purchase. The only minus is that it does not include a cable.'
            }
        ]
    },
    'chitara-acustica': {
        title: 'Gibson Acoustic Guitar',
        image: '/imagini/guitar2.png',
        price: 900,
        stock: 'Out of stock',
        description: 'A very high quality guitar with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Body made of cedar wood',
            'Neck made of mahogany',
            '6 strings',
            'Fretboard made of maple',
            'Includes case'
        ]
    },
    'chitara-bass': {
        title: 'Ibanez GSR200',
        image: '/imagini/guitar3.png',
        price: 500,
        stock: 'In stock',
        description: 'A very high quality guitar with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Bass drum 22"',
            'Snare drum 14"',
            'Tom 12"',
            'Floor tom 16"',
            'Includes hardware and drum set'
        ]
    },
    'mic-shure': {
        title: 'Microfon Shure SM58',
        image: '/imagini/microfon1.jpg',
        price: 170,
        stock: 'In stock',
        description: 'A very high quality microphone for singers, with a clear and natural sound. Perfect for studio and live.',
        specs: [
            'Type: Dynamic',
            'Frequency response: 50Hz - 15kHz',
            'Sensitivity: -54dB',
            'Impedance: 600Ω',
            'Includes stand and cable'
        ]
    },
    'mic-tbone': {
        title: 'The tbone microphone',
        image: '/imagini/microfon2.jpg',
        price: 80,
        stock: 'In stock',
        description: 'A very high quality microphone for singers, with a clear and natural sound. Perfect for studio and live.',
        specs: [
            'Type: Dynamic',
            'Frequency response: 50Hz - 15kHz',
            'Sensitivity: -54dB',
            'Impedance: 600Ω',
            'Includes stand and cable'
        ]
    },
    'mic-sennheiser': {
        title: 'Sennheiser E835',
        image: '/imagini/microfon3.jpg',
        price: 200,
        stock: 'In stock',
        description: 'A very high quality microphone for singers, with a clear and natural sound. Perfect for studio and live.',
        specs: [
            'Type: Dynamic',
            'Frequency response: 50Hz - 15kHz',
            'Sensitivity: -54dB',
            'Impedance: 600Ω',
            'Includes stand and cable'
        ]
    },
    'piano-clasic': {
        title: 'Classical Piano',
        image: '/imagini/pian1.jpg',
        price: 3000,
        stock: 'In stock',
        description: 'A very high quality piano with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Type: Acoustic',
            'Material: Solid wood',
            'Includes stand and cable'
        ]
    },
    'piano-electronic': {
        title: 'Yamaha P-125',
        image: '/imagini/pian2.jpg',
        price: 500,
        stock: 'In stock',
        description: 'A very high quality piano many sound options. Made for all levels of musicians.',
        specs: [
            'Type: Electronic',
            'Includes stand and cable'
        ]
    },
    'piano-electronic2': {
        title: 'Yamaha PSR-F52',
        image: '/imagini/pian3.jpg',
        price: 400,
        stock: 'In stock',
        description: 'A very high quality piano many sound options. Made for all levels of musicians.',
        specs: [
            'Type: Electronic',
            'Includes stand and cable'
        ]
    },
    'boxa1': {
        title: 'Martin Audio Speaker',
        image: '/imagini/boxa1.jpg',
        price: 400,
        stock: 'In stock',
        description: 'A very high quality speaker with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Power: 250W RMS',
            'Frequency response: 50Hz - 20kHz',
            'Sensitivity: 96dB',
            'Integrated amplifier',
            'Mounting support'
        ]
    },
    'boxa2': {
        title: 'Behringer Active Speaker',
        image: '/imagini/boxa2.jpg',
        price: 250,
        stock: 'In stock',
        description: 'A very high quality speaker with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Power: 250W RMS',
            'Frequency response: 50Hz - 20kHz',
            'Sensitivity: 96dB',
            'Integrated amplifier',
            'Mounting support'
        ]
    },
    'boxa3': {
        title: 'RCF Passive Speaker',
        image: '/imagini/boxa3.jpg',
        price: 350,
        stock: 'In stock',
        description: 'A very high quality speaker with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Power: 250W RMS',
            'Frequency response: 50Hz - 20kHz',
            'Sensitivity: 96dB',
            'Integrated amplifier',
            'Mounting support'
        ]
    },
    'drumset1': {
        title: 'Millenium MPS-100 Drumset',
        image: '/imagini/tobe1.jpg',
        price: 2000,
        stock: 'In stock',
        description: 'A very high quality drumset with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Includes: 2 toms, 1 snare, 1 bass, 1 hi-hat, 1 crash, 1 ride, 1 china, 1 splash',
            'Mounting support'
        ]
    },
    'drumset2': {
        title: 'Millenium Focus Junior Drumset',
        image: '/imagini/tobe2.jpg',
        price: 1000,
        stock: 'In stock',
        description: 'A very high quality drumset with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Includes: 2 toms, 1 snare, 1 bass, 1 hi-hat, 1 crash, 1 ride, 1 china, 1 splash',
            'Mounting support'
        ]
    },
    'drumset3': {
        title: 'Alesis Strata Prime Drumset',
        image: '/imagini/tobe3.jpg',
        price: 650,
        stock: 'In stock',
        description: 'A very high quality drumset with a warm and natural sound. Built from solid wood, with a rich and clear sound.',
        specs: [
            'Includes: 2 toms, 1 snare, 1 bass, 1 hi-hat, 1 crash, 1 ride, 1 china, 1 splash',
            'Mounting support'
        ]
    },
    'tshirt1': {
        title: 'F.A.R. T-Shirt',
        image: '/imagini/tshirt1.png',
        price: 20,
        stock: 'In stock',
        description: 'An attractive t-shirt specially designed for F.A.R.',
        specs: [
            'Clothing size: S, M, L, XL, XXL',
            'Material: Cotton'
        ]
    },
    'tshirt2': {
        title: 'F.A.R. x iTec T-Shirt',
        image: '/imagini/tshirt2.png',
        price: 20,
        stock: 'In stock',
        description: 'An attractive t-shirt specially designed for F.A.R. in collaboration with iTec.',
        specs: [
            'Clothing size: S, M, L, XL, XXL',
            'Material: Cotton'
        ]
    },
    'tshirt3': {
        title: 'iTec Special Edition T-Shirt',
        image: '/imagini/tshirt3.jpg',
        price: 30,
        stock: 'In stock',
        description: 'An attractive t-shirt specially designed for iTec.',
        specs: [
            'Clothing size: S, M, L, XL, XXL',
            'Material: Cotton'
        ]
    },
};

// Clasa pentru gestionarea coșului
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCount();
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        this.saveToLocalStorage();
        this.updateCartCount();
        return true;
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
}

// Inițializare coș
const cart = new Cart();

// Funcții pentru interacțiune
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId + '-tab').classList.add('active');
        });
    });
}

function setupQuantitySelector() {
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantityInput = document.getElementById('quantity');

    decreaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
}

function setupBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function getRandomProducts(currentProductId) {
    const productKeys = Object.keys(products);
    const currentProduct = products[currentProductId];
    
    if (!currentProduct) {
        console.error('Product was not found:', currentProductId);
        return [];
    }

    // Filtrează produsul curent și selectează 3 produse aleatorii
    const otherProducts = productKeys
        .filter(key => key !== currentProductId)
        .map(key => ({...products[key], id: key}));
    
    // Amestecă produsele și selectează primele 3
    const shuffled = otherProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

function displayRelatedProducts(currentProductId) {
    const relatedProductsContainer = document.getElementById('related-products');
    const randomProducts = getRandomProducts(currentProductId);
    
    relatedProductsContainer.innerHTML = randomProducts.map(product => {
        return `
            <div class="card">
                <a href="/produs.html?id=${product.id}" class="product-link">
                    <div class="img"><img src="${product.image}" alt="${product.title}"></div>
                    <div class="title">${product.title}</div>
                    <div class="descin">
                        <span class="material-symbols-outlined">inventory</span>
                        <span class="desctext">${product.stock}</span>
                    </div>
                    <div class="box">
                        <div class="price">${product.price} <span>&#8364;</span></div>
                        <button class="button" ${product.stock === 'Out of stock' ? 'disabled' : ''}>
                            <i class="fa fa-shopping-cart"></i>
                        </button>
                    </div>
                </a>
            </div>
        `;
    }).join('');
}

function displayProductDetails(productId) {
    const product = products[productId];
    
    if (!product) {
        console.error('Product was not found:', productId);
        return;
    }
    
    // Actualizează titlul paginii
    document.title = `F.A.R. - ${product.title}`;
    
    // Actualizează imaginea produsului
    const productImage = document.getElementById('product-image');
    productImage.src = product.image;
    productImage.alt = product.title;
    
    // Actualizează titlul produsului
    const productTitle = document.getElementById('product-title');
    productTitle.textContent = product.title;
    
    // Actualizează stocul produsului
    const productStock = document.getElementById('product-stock');
    productStock.textContent = product.stock;
    
    // Actualizează prețul produsului
    const productPrice = document.getElementById('product-price');
    productPrice.textContent = `${product.price} €`;
    
    // Actualizează descrierea produsului
    const productDescription = document.getElementById('product-description');
    productDescription.textContent = product.description;
    
    // Actualizează specificațiile produsului
    const productSpecs = document.getElementById('product-specs');
    productSpecs.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');
    
    // Actualizează recenziile produsului
    const reviewsContainer = document.getElementById('reviews-container');
    if (product.reviews && product.reviews.length > 0) {
        reviewsContainer.innerHTML = product.reviews.map(review => `
            <div class="review">
                <div class="review-header">
                    <span class="review-author">${review.author}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
                <div class="review-text">${review.text}</div>
            </div>
        `).join('');
    } else {
        reviewsContainer.innerHTML = '<p>Nu există recenzii pentru acest produs.</p>';
    }
    
    // Actualizează produsele similare
    displayRelatedProducts(productId);
    
    // Configurează butonul de adăugare în coș
    const addToCartButton = document.getElementById('add-to-cart');
    
    // Verifică dacă produsul este în stoc
    if (product.stock === 'Out of stock') {
        addToCartButton.disabled = true;
        addToCartButton.innerHTML = '<i class="fa fa-ban"></i> Out of stock';
    } else {
        addToCartButton.disabled = false;
        addToCartButton.innerHTML = '<i class="fa fa-shopping-cart"></i> Add to cart';
        
        addToCartButton.addEventListener('click', () => {
            const quantity = parseInt(document.getElementById('quantity').value);
            const productToAdd = {
                id: productId,
                title: product.title,
                price: product.price,
                image: product.image
            };
            
            if (cart.addItem(productToAdd, quantity)) {
                showNotification('Product added to cart!');
            }
        });
    }
    
    // Ascunde loading-ul
    document.querySelector('.loading').style.display = 'none';
}

// Inițializare
document.addEventListener('DOMContentLoaded', () => {
    // Obține ID-ul produsului din URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId && products[productId]) {
        displayProductDetails(productId);
    } else {
        console.error('Invalid product ID or product not found');
        document.querySelector('.loading').style.display = 'none';
    }
    
    // Configurează tab-urile
    setupTabs();
    
    // Configurează selectorul de cantitate
    setupQuantitySelector();
    
    // Configurează butonul de înapoi sus
    setupBackToTop();
    
    // Adaugă event listener pentru scroll pentru navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}); 