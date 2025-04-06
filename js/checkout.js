// Funcție pentru navigarea între pași
function nextStep(currentStep) {
    // Validare pentru formularul de livrare
    if (currentStep === 1) {
        const form = document.getElementById('deliveryDetailsForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
    }

    // Ascunde formularul curent
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(currentStep === 1 ? 'deliveryForm' : 
                         currentStep === 2 ? 'paymentForm' : 'confirmationForm').classList.add('hidden');

    // Arată următorul formular
    document.getElementById(`step${currentStep + 1}`).classList.add('active');
    document.getElementById(currentStep === 1 ? 'paymentForm' : 
                         currentStep === 2 ? 'confirmationForm' : 'deliveryForm').classList.remove('hidden');

    // Dacă ajungem la confirmare, actualizăm sumarul comenzii
    if (currentStep === 2) {
        updateOrderSummary();
    }
}

function prevStep(currentStep) {
    // Ascunde formularul curent
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(currentStep === 2 ? 'paymentForm' : 
                         currentStep === 3 ? 'confirmationForm' : 'deliveryForm').classList.add('hidden');

    // Arată formularul anterior
    document.getElementById(`step${currentStep - 1}`).classList.add('active');
    document.getElementById(currentStep === 2 ? 'deliveryForm' : 
                         currentStep === 3 ? 'paymentForm' : 'deliveryForm').classList.remove('hidden');
}

// Funcție pentru selectarea metodei de plată
function selectPaymentMethod(method) {
    const cardForm = document.getElementById('cardForm');
    const cardInputs = cardForm.querySelectorAll('input');
    
    if (method === 'card') {
        cardForm.classList.remove('hidden');
        cardInputs.forEach(input => input.required = true);
    } else {
        cardForm.classList.add('hidden');
        cardInputs.forEach(input => input.required = false);
    }
}

// Funcție pentru actualizarea sumarului comenzii
function updateOrderSummary() {
    const orderDetails = document.getElementById('orderDetails');
    const deliveryForm = document.getElementById('deliveryDetailsForm');
    const paymentMethod = document.querySelector('input[name="payment"]:checked');

    let summary = `
        <div class="summary-section">
            <h4>Date Livrare</h4>
            <p><strong>Nume:</strong> ${deliveryForm.nume.value}</p>
            <p><strong>Email:</strong> ${deliveryForm.email.value}</p>
            <p><strong>Telefon:</strong> ${deliveryForm.telefon.value}</p>
            <p><strong>Adresa:</strong> ${deliveryForm.adresa.value}</p>
            <p><strong>Oraș:</strong> ${deliveryForm.oras.value}</p>
            <p><strong>Cod Poștal:</strong> ${deliveryForm.codPostal.value}</p>
        </div>
    `;

    if (paymentMethod) {
        summary += `
            <div class="summary-section">
                <h4>Metodă Plată</h4>
                <p><strong>Tip:</strong> ${paymentMethod.value === 'card' ? 'Card Bancar' : 'Plata la Livrare'}</p>
                ${paymentMethod.value === 'card' ? `
                    <p><strong>Card:</strong> **** **** **** ${document.getElementById('cardNumber').value.slice(-4)}</p>
                ` : ''}
            </div>
        `;
    }

    orderDetails.innerHTML = summary;
}

// Funcție pentru confirmarea comenzii
function confirmOrder() {
    // Creează pop-up-ul
    const popup = document.createElement('div');
    popup.className = 'success-popup';
    popup.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Comandă plasată cu succes!</h3>
            <p>Vă mulțumim pentru achiziție!</p>
            <a href="/index.html" class="btn btn-primary">Înapoi la pagina principală</a>
        </div>
    `;
    document.body.appendChild(popup);

    // Adaugă stilurile pentru animație
    setTimeout(() => {
        popup.classList.add('show');
    }, 100);
}

// Formatare automată pentru numărul cardului
document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = value;
});

// Formatare automată pentru data expirării
document.getElementById('expiry').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0,2) + '/' + value.slice(2,4);
    }
    e.target.value = value;
});

// Limitare pentru CVV
document.getElementById('cvv').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0,3);
}); 
