const cartBubble = document.querySelector('.cart-bubble');
const cartItemsContainer = document.querySelector('.cart-items');
const emptyMsg = document.querySelector('.empty-msg');
const cartTotalText = document.querySelector('.cart-total');
const cartTitle = document.querySelector('.cart-title');

let cartItems = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const latteBox = button.closest('.latte-box');
        const name = latteBox.querySelector('.latte-name').innerText;
        const priceText = latteBox.querySelector('.latte-price').innerText;
        const price = parseFloat(priceText.replace(/[^\d.]/g, ''));

        cartItems.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    if (emptyMsg) emptyMsg.remove();

    cartItemsContainer.innerHTML = '';
    total = 0;

    cartItems.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `${item.name} - ₱${item.price}`;
        cartItemsContainer.appendChild(p);
        total += item.price;
    });

    cartTitle.textContent = "Your Cart";
    cartTotalText.textContent = `Total: ₱${total}`;
}