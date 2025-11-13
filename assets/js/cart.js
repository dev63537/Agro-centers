/* Cart Page JavaScript */

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});

function displayCart() {
    const cart = AgroCenter.getCart();
    const container = document.getElementById('cartItemsContainer');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <p>🛒 Your cart is empty</p>
                <p style="color: var(--light-text); margin-top: 1rem;">Start shopping to add items to your cart</p>
                <a href="products.html" class="btn btn-primary mt-2">Continue Shopping</a>
            </div>
        `;
        updateCartSummary(cart);
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="https://via.placeholder.com/100x100?text=${item.name}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Price: ₹${item.price.toLocaleString()}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity(${index}, -1)">−</button>
                <input type="number" value="${item.quantity}" readonly>
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div class="cart-item-price">
                ₹${(item.price * item.quantity).toLocaleString()}
            </div>
            <div class="cart-item-remove">
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        </div>
    `).join('');

    updateCartSummary(cart);
}

function updateQuantity(index, change) {
    let cart = AgroCenter.getCart();
    if (cart[index]) {
        cart[index].quantity = Math.max(1, cart[index].quantity + change);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        AgroCenter.updateCartCount();
    }
}

function removeFromCart(index) {
    let cart = AgroCenter.getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    AgroCenter.updateCartCount();
    AgroCenter.showMessage('Item removed from cart', 'success');
}

function updateCartSummary(cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 2000 ? 0 : 100;
    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    document.getElementById('tax').textContent = `₹${tax.toLocaleString()}`;
    document.getElementById('total').textContent = `₹${total.toLocaleString()}`;
}
