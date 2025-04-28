let cart = [];

// Add product to cart
function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

// Update cart UI
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.product} - ₹${item.price}`;
        cartItems.appendChild(div);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: ₹${totalPrice}`;
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    window.location.href = 'checkout.html';
}