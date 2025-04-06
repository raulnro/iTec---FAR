<?php
    $showStep2 = false;
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
    $nume = $_POST['nume'];
    $email = $_POST['email'];
    $telefon = $_POST['telefon'];
    $adresa = $_POST['adresa'];
    $oras = $_POST['oras'];
    $codPostal = $_POST['codPostal'];
    
    $conn = new mysqli('localhost', 'root', '', 'comenzi far');
    if($conn->connect_error){
        die('NU merge ' . $conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into delivery(nume, email, telefon, adresa, oras, codPostal) values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssissi", $nume, $email, $telefon, $adresa, $oras, $codPostal);
        $stmt->execute();
        echo "Comanda a fost plasata cu succes";
        $stmt->close();
        $conn->close();
        $showStep2 = true;
    }
    } 
?>  

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - FAR</title>
    <link rel="stylesheet" href="/style/dark.css">
    <meta name="theme-color" content="#ffffff">
    <link rel="icon" type="image/x-icon" href="/imagini/favicon.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="/style/checkout.css">
    <link rel="stylesheet" href="/style/dark.css">
</head>

<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="/imagini/logo.png" height="40">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active hover-underline" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hover-underline" href="categorii.html">Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link hover-underline" href="/contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/cos.html">
                            <i class="fas fa-shopping-cart"></i>
                            <span id="cart-count" class="cart-count">0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Checkout Section -->
    <div class="checkout-container">
        <div class="checkout-steps">
            <div class="step <?php echo $showStep2 ? '' : 'active'; ?>" id="step1">
                <span class="step-number">1</span>
                <span class="step-text">Delivery Date</span>
            </div>
            <div class="step <?php echo $showStep2 ? 'active' : ''; ?>" id="step2">
                <span class="step-number">2</span>
                <span class="step-text">Payment Method</span>
            </div>
            <div class="step" id="step3">
                <span class="step-number">3</span>
                <span class="step-text">Confirmation</span>
            </div>
        </div>

        <!-- Step 1: Date Livrare -->          
        <div class="checkout-form <?php echo $showStep2 ? 'hidden' : ''; ?>" id="deliveryForm">
            <h2>Delivery Date</h2>
            <form method="post" id="deliveryDetailsForm">
                <div class="form-group">
                    <label for="nume">Full Name</label>
                    <input type="text" id="nume" name="nume" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="telefon">Phone</label>
                    <input type="tel" id="telefon" name="telefon" required>
                </div>
                <div class="form-group">
                    <label for="adresa">Delivery Address</label>
                    <textarea type="text" id="adresa" name="adresa" required></textarea>
                </div>
                <div class="form-group">
                    <label for="oras">City</label>
                    <input type="text" id="oras" name="oras" required>
                </div>
                <div class="form-group">
                    <label for="codPostal">Postal Code</label>
                    <input type="text" id="codPostal" name="codPostal" required>
                </div>
                <button type="submit" class="btn-next">Next</button>
            </form>
        </div>

        <!-- Step 2: Metodă Plată -->
        <div class="checkout-form <?php echo $showStep2 ? '' : 'hidden'; ?>" id="paymentForm">
            <h2>Payment Method</h2>
            <div class="payment-methods">
                <div class="payment-method" onclick="selectPaymentMethod('card')">
                    <input type="radio" name="payment" id="card" value="card">
                    <label for="card">
                        <i class="fas fa-credit-card"></i>
                        Bank Card
                    </label>
                </div>
                <div class="payment-method" onclick="selectPaymentMethod('cash')">
                    <input type="radio" name="payment" id="cash" value="cash">
                    <label for="cash">
                        <i class="fas fa-money-bill-wave"></i>
                            Cash on Delivery
                    </label>
                </div>
            </div>

            <!-- Card Form -->
            <div class="card-form hidden" id="cardForm">
                <div class="form-group">
                    <label for="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="expiry">Expiration Date</label>
                        <input type="text" id="expiry" placeholder="MM/YY">
                    </div>
                    <div class="form-group">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" placeholder="123">
                    </div>
                </div>
                <div class="form-group">
                    <label for="cardName">Card Name</label>
                    <input type="text" id="cardName">
                </div>
            </div>

            <div class="button-group">
                <button type="button" class="btn-prev" onclick="prevStep(2)">Previous</button>
                <button type="button" class="btn-next" onclick="nextStep(2)">Next</button>
            </div>
        </div>

        <!-- Step 3: Confirmare -->
        <div class="checkout-form hidden" id="confirmationForm">
            <h2>Confirmation</h2>
            <div class="order-summary">
                <h3>Order Summary</h3>
                <div id="orderDetails"></div>
            </div>
            <div class="button-group">
                <button type="button" class="btn-prev" onclick="prevStep(3)">Previous</button>
                <button type="button" class="btn-confirm" onclick="confirmOrder()">Confirm Order</button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer style="background-color: #000000; color: white; padding: 2rem 0; margin-top: 50px;">
        <div class="container text-center">
            <p>&copy; 2025 <a href="#" style="text-decoration: none; color: white;">F.A.R.</a> All rights reserved.</p>
        </div>
        <div class="container text-center">
            <img src="/imagini/favicon.png" alt="F.A.R." style="width: 80px;">  
            <img src="/imagini/itec.png" alt="F.A.R." style="width: 100px;">
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/js/checkout.js"></script>
    <script src="/js/theme.js"></script>
</body>
</html> 