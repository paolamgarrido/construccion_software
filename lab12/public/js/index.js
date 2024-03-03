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