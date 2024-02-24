// SHOPPING CART VISIBILITY 

function toggleCart() {
    var cartInfo = document.querySelector('.cart-info');
    if (cartInfo.style.visibility == 'hidden') {
        cartInfo.style.visibility = 'visible';
    } else {
        cartInfo.style.visibility = 'hidden';
    }  
}

//ADDING PRODUCTS TO CART 

// Capture all "Purchase Now" bottons 
const purchaseButtons = document.querySelectorAll('.purchase-btn');

// Iterating over each button and adding an event listener (click)
purchaseButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    // Avoid predetermined link to activate
    event.preventDefault();

    // Extract product information and set price 
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


    // Verify if the product is already in the shopping cart 
    const cartItems = document.querySelectorAll('.cart-table tbody tr td:first-child');
    for (let item of cartItems) {
        if (item.innerText === productName) {
            alert('This product is already in the cart!');
            return; 
        }
    }

    // Create a new row to add product with specifications to the cart 
    const cartRow = document.createElement('tr');
    cartRow.innerHTML = `
        <td>${productName}</td>
        <td><button class="btn btn-sm btn-danger">-</button></td>
        <td>1</td>
        <td><button class="btn btn-sm btn-success">+</button></td>
        <td><button class="btn btn-sm btn-danger">Remove</button></td>
        <td class="price">$${productPrice.toFixed(2)}</td>
    `;

    // Add the new created row to the cart table 
    const cartTable = document.querySelector('.cart-table tbody');
    cartTable.appendChild(cartRow);

    // Update total price 
    updateTotal();
}


// PRICE

// Function to update total price 
function updateTotal() {
    let subtotal = 0;

    // Iterate over each cart row 
    const rows = document.querySelectorAll('.cart-table tbody tr');
    rows.forEach(row => {
        // Get the quantity and price for the product and turn it to int 
        const quantity = parseInt(row.children[2].textContent);
        const price = parseFloat(row.children[5].textContent.substring(1));

        // Calculate by product on each iteration to get the final subtotal
        subtotal += quantity * price;
    });

    // Update price elements 
    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.textContent = '$' + subtotal.toFixed(2);

    const ivaElement = document.getElementById('iva');
    const iva = subtotal * 0.16; 
    ivaElement.textContent = '$' + iva.toFixed(2);

    const totalElement = document.getElementById('total');
    const total = subtotal + iva;
    totalElement.textContent = '$' + total.toFixed(2);
}


// ADD REMOVE DELETE ITEMS FROM CART 

// Add event listeners to the document for click events on buttons with specific classes
document.addEventListener('click', function(event) {
    // Check if the clicked element is an add button
    if (event.target.classList.contains('btn-success')) {
        // Call the function to add product to the cart
        incrementQuantity(event.target);
    }
    // Check if the clicked element is a remove button
    else if (event.target.classList.contains('btn-danger') && event.target.innerText === '-') {
        // Call the function to handle removing product from the cart
        decrementQuantity(event.target);
    }
    // Check if the clicked element is a delete button
    else if (event.target.classList.contains('btn-danger') && event.target.innerText === 'Remove') {
        // Call the function to handle deleting product from the cart
        removeFromCart(event.target);
    }
});

// Function to increment the quantity of a product in the cart
function incrementQuantity(button) {
    // Get the quantity element for the product by going one column backward
    const quantityElement = button.parentElement.previousElementSibling;
    // Get the current quantity value
    let quantity = parseInt(quantityElement.textContent);
    // Check if the quantity is already at the limit (10)
    if (quantity >= 10) {
        // If the product limit is reached, show an alert 
        alert("You can't add more than 10 items for each product.");
        return;
    }
    // Increment the quantity
    quantityElement.textContent = quantity + 1;
    // Update the total price
    updateTotal();
}

// Function to decrement the quantity of a product in the cart
function decrementQuantity(button) {
    // Get the quantity element for the product by going one column forward
    const quantityElement = button.parentElement.nextElementSibling;
    // Get the current quantity value
    const quantity = parseInt(quantityElement.textContent);
    // Decrement the quantity if it's greater than 1
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
    // Update the total price
    updateTotal();
}

// Function to remove a product from the cart
function removeFromCart(button) {
    // Get the quantity element for the product by going two columns backward
    const row = button.parentElement.parentElement;
    // Remove the row from the table
    row.remove();
    // Update the total price
    updateTotal();
}


// CHANGE TEXT STYLE 

function selectedText(element, fontWeight, fontStyle) {
    element.style.fontWeight = fontWeight;
    element.style.fontStyle = fontStyle;
}

function unselectedText(element) {
    element.style.fontWeight = 'normal';
    element.style.fontStyle = 'normal';
}

// COMPLEMENTARY INFORMATION

// Capture all product images from product section 
const productImages = document.querySelectorAll('.product-image');

// Add events to show additional info in title when mouse is over 
productImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        const info = image.getAttribute('title');
    });

    // Hide information when user stops interacting with image 
    image.addEventListener('mouseout', () => {
    });
});
