const express = require('express');

const router = express.Router();

const html_home = `
<div>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9b40f91bc0.js" crossorigin="anonymous"></script>
    <title>Blissful Store Home</title>
    <style>
        /* NAVEGATION BAR */

        .navbar-brand {
            margin-left: 20px; 
        }

        .navbar-nav {
            margin-left: auto; /* Push navigation links to the right */
        }

        .navbar-nav a:not(:last-child) {
            margin-right: 20px; 
        }

        .navbar-nav a:last-child {
            margin-right: 30px; 
        }

        .navbar-nav button.nav-link {
            padding: 10px 20px; /* Adjust padding to increase clickable area of cart */
        }


        /* SECTION 1 */

        .section-1{
            padding-top: 60px; 
            padding-bottom: 60px; 
        }

        .section-1 h1, p{
            padding-bottom: 30px;
        }

        .text-justify{
            text-align: justify;
        }

        .medium-image {
            width: 450px;
            height: auto; 
            padding-top: 20px; 
            padding-bottom: 40px;
        }


        /* SECTION 2 */

        .small-image {
            width: 300px;
            height: auto; 
            padding-top: 20px; 
            padding-bottom: 40px;
        }

        .card {
            width: 70%; 
            margin: 0 auto; 
        }

        .section-2 h1{
            padding-bottom: 60px;
        }

        .section-2 h2{
            padding-bottom: 10px;
        }

        .section-2{
            padding-top: 80px; 
            padding-bottom: 80px; 
            background-color: #f0f0f0;
        }

        /* SECTION 3 */

        .section-3{
            padding-top: 60px; 
            padding-bottom: 60px; 

        }

        .section-3 h2 {
            padding-right: 40px; 
            padding-left: 40px; 
            padding-bottom: 50px;
        }

        .section-3 h5,p {
            padding-right: 40px; 
            padding-left: 40px; 
        }

        /* FOOTER */

        footer{
            padding-top: 15px;
            padding-bottom: 15px;
            background-color: black;
            color: white;
        }

        footer p{
            padding-top: 40px;
            padding-left: 650px;
        }

        footer h4{
            padding-top: 20px;
        }


        i{
            padding:10px;
        }

        /* CART */

        .cart-container {
            position: absolute; 
            top: 68px; /* Helps place beneath the navigation bar */
            right: 0; 
        }

        .cart-info {
            visibility: hidden; /* Initially hidden */
            background-color: white; 
            color: black; 
            padding: 20px; 
            border: 0.5px solid black; 
        }

        .cart-table td:nth-child(3) {
            text-align: center; /* Center-align the quantity column */
        }

        .cart-table td {
            padding: 8px; /* Add padding to all table cells */
        }

        .center {
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- Navegation Bar -->
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <i class="fas fa-leaf fa-1x mx-1"></i> Blissful </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" href="/recipes">Recipes</i></a>
                  <a class="nav-link" href="/FAQ">FAQ</i></a>
                  <a class="nav-link" href="/contactus">Contact Us</i></a>
                  <!-- Cart button to hide or make visible the cart information -->
                  <button class="nav-link" onclick="toggleCart()"><i class="fas fa-shopping-cart"></i></button>
                </div>
              </div>
            </div>
          </nav>
    </header>

    <main>

        <!-- Home section -->
        <section class = "section-1">
            <div class ="container text-center section-padding">
                <div class ="row">
                    <div class="col-md-7 col-sm-12 align-self-center">
                        <h1>Welcome to Blissful</h1>
                        <p class = "text-justify">
                            We're passionate about helping you embrace a healthier lifestyle with our premium selection of juicers, blender-equipped juicers, and thermos products. Whether you're a health enthusiast or just starting your journey, we have everything you need to fuel your body. 
                            Become a happier, healthier you with Blissful – where wellness meets joy.
                        </p>
                        <p>
                            Ready to take your juicing and smoothie journey to new heights?<br>Our exclusive Juicer + Blender with a Recipe Book Bundle is the perfect companion <br>for anyone looking to unlock a world of delicious and nutritious possibilities.
                        </p>
                        <!-- Add product to cart button -->
                        <a href="#" class="btn btn-dark px-5 py-3 mb-5 purchase-btn" data-product="Juicer + Blender + Book">Buy now for only $869.99 USD</a>
                    </div>
                    <div class="col-md-5 col-sm-12">
                       <img src="https://namawell.com/cdn/shop/files/540x540carousel_3_540x.jpg?v=1698169119" alt="Photo Juicer + Blender + Book" class = "medium-image" />
                    </div>    
                </div>
            </div>
        </section>

        <!-- Cart Information Container  -->
        <div class="cart-container">
            <div class="cart-info" style="visibility: hidden;">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th></th>
                            <th>Quantity</th>
                            <th></th>
                            <th></th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Here the rows created with JavaScript dinamically will be added -->
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5">Subtotal</td>
                            <td id="subtotal">0</td>
                        </tr>
                        <tr>
                            <td colspan="5">IVA</td>
                            <td id="iva">0</td>
                        </tr>
                        <tr>
                            <td colspan="5">Total</td>
                            <td id="total">0</td>
                        </tr>
                        <tr>
                            <td colspan="6" class="center">
                                <a href="/payment" class="btn btn-dark px-5 py-3" data-product="Payment">Pay Now</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>               
            </div>
        </div>      

        <!-- Product Cards -->
        <section class="section-2"> 
            <div class="container text-center">
                <h1>GET TO KNOW OUR PRODUCTS</h1>
            </div>
            <div class="purchase text-center">
                <div class="price row">
                    <div class="col-md-4 col-12 text-center">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Juicer</h5>
                                <img src="https://namawell.com/cdn/shop/products/j2_95703b88-27b6-4a70-abb7-dfad53e899ab_540x.png?v=1656091935" alt="Photo Juicer" class="small-image" title="Extract the freshest, most nutrient-rich juices from your favorite fruits and vegetables. "/>
                                <div class="pricing">
                                    <h2>$650.99 USD</h2>
                                </div>
                                <!-- Add product to cart button -->
                                <a href="#" class="btn btn-dark px-4 py-2 mb-5 purchase-btn" data-product="Juicer">Purchase Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 text-center">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Juicer + Blender</h5>
                                <img src="https://namawell.com/cdn/shop/files/540x540carousel_1_540x.jpg?v=1698169119" alt="Photo Juicer + Blender" class="small-image" title="Take your juicing experience to the next level with our juicers featuring built-in blenders." />
                                <div class="pricing">
                                    <h2>$859.99 USD</h2>
                                </div>
                                <!-- Add product to cart button -->
                                <a href="#" class="btn btn-dark px-4 py-2 mb-5 purchase-btn" data-product="Juicer + Blender">Purchase Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 text-center">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Thermo</h5>
                                <img src="https://www.fishwest.com/Images/Product%20Images/HYF00020_White.01.jpg?resizeid=37&resizeh=600&resizew=600" alt="Photo Thermo" class="small-image" title="Keep your beverages at the perfect temperature. "/>
                                <div class="pricing">
                                    <h2>$20.99 USD</h2>
                                </div>
                                <!-- Add product to cart button -->
                                <a href="#" class="btn btn-dark px-4 py-2 mb-5 purchase-btn" data-product="Thermo">Purchase Now</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>        
    </main>

    <!-- Footer Information -->
    <footer>
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-md-8 col-md-5">
                    <p>
                        &copy 2024 Blissful Co.
                    </p>
                </div>
                <div class="col-md-4">
                    <h4 class="text-center">Follow us</h4>
                    <div class="column d-flex justify-content-center">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>

                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
`;

const js_home = `
<script>
// Toggle cart visibility
function toggleCart() {
    var cartInfo = document.querySelector('.cart-info');
    if (cartInfo.style.visibility == 'hidden') {
        cartInfo.style.visibility = 'visible';
    } else {
        cartInfo.style.visibility = 'hidden';
    }  
}

// Function to add product to cart
function addToCart(event) {
    event.preventDefault();
    let productName, productPrice;

    if (event.target.dataset.product === "Juicer + Blender + Book") {
        productName = "Juicer + Blender + Book";
        productPrice = 869.99;
    } else if (event.target.dataset.product === "Juicer") {
        productName = "Juicer";
        productPrice = 650.99;
    } else if (event.target.dataset.product === "Juicer + Blender") {
        productName = "Juicer + Blender";
        productPrice = 859.99;
    } else if (event.target.dataset.product === "Thermo") {
        productName = "Thermo";
        productPrice = 20.99;
    }

    const cartItems = document.querySelectorAll('.cart-table tbody tr td:first-child');
    for (let item of cartItems) {
        if (item.innerText === productName) {
            alert('This product is already in the cart!');
            return;
        }
    }

    const cartRow = document.createElement('tr');
    
    // Product Name
    const productNameCell = document.createElement('td');
    productNameCell.textContent = productName;
    cartRow.appendChild(productNameCell);
    
    // Decrement Button
    const decrementButtonCell = document.createElement('td');
    const decrementButton = document.createElement('button');
    decrementButton.className = 'btn btn-sm btn-danger';
    decrementButton.textContent = '-';
    decrementButtonCell.appendChild(decrementButton);
    cartRow.appendChild(decrementButtonCell);
    
    // Quantity
    const quantityCell = document.createElement('td');
    quantityCell.textContent = '1';
    cartRow.appendChild(quantityCell);
    
    // Increment Button
    const incrementButtonCell = document.createElement('td');
    const incrementButton = document.createElement('button');
    incrementButton.className = 'btn btn-sm btn-success';
    incrementButton.textContent = '+';
    incrementButtonCell.appendChild(incrementButton);
    cartRow.appendChild(incrementButtonCell);
    
    // Remove Button
    const removeButtonCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-sm btn-danger';
    removeButton.textContent = 'Remove';
    removeButtonCell.appendChild(removeButton);
    cartRow.appendChild(removeButtonCell);
    
    // Price
    const priceCell = document.createElement('td');
    priceCell.className = 'price';
    priceCell.textContent = '$' + productPrice.toFixed(2);
    cartRow.appendChild(priceCell);
    
    // Append the cartRow to the cart table
    const cartTable = document.querySelector('.cart-table tbody');
    cartTable.appendChild(cartRow);
    
    updateTotal();
}

// Function to update total price
function updateTotal() {
    let subtotal = 0;
    const rows = document.querySelectorAll('.cart-table tbody tr');
    rows.forEach(row => {
        const quantity = parseInt(row.children[2].textContent);
        const price = parseFloat(row.children[5].textContent.substring(1));
        subtotal += quantity * price;
    });

    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = '$' + subtotal.toFixed(2);

    const ivaElement = document.getElementById('iva');
    const iva = subtotal * 0.16;
    ivaElement.textContent = '$' + iva.toFixed(2);

    const totalElement = document.getElementById('total');
    const total = subtotal + iva;
    totalElement.textContent = '$' + total.toFixed(2);
}

// Add event listeners to purchase buttons
const purchaseButtons = document.querySelectorAll('.purchase-btn');
purchaseButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Add event listeners for incrementing, decrementing, and removing items from the cart
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-success')) {
        incrementQuantity(event.target);
    } else if (event.target.classList.contains('btn-danger') && event.target.innerText === '-') {
        decrementQuantity(event.target);
    } else if (event.target.classList.contains('btn-danger') && event.target.innerText === 'Remove') {
        removeFromCart(event.target);
    }
});

// Function to increment quantity
function incrementQuantity(button) {
    const quantityElement = button.parentElement.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity >= 10) {
        alert("You can't add more than 10 items for each product.");
        return;
    }
    quantityElement.textContent = quantity + 1;
    updateTotal();
}

// Function to decrement quantity
function decrementQuantity(button) {
    const quantityElement = button.parentElement.nextElementSibling;
    const quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
    updateTotal();
}

// Function to remove item from cart
function removeFromCart(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    updateTotal();
}
</script>
`;


router.get('/', (request, response, next) => {
    let html = html_home;
    html += js_home;
    response.send(html);
});

module.exports = router;