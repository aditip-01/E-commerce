let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(div);
    });
}

function checkout() {
    alert("Proceeding to checkout...");
}