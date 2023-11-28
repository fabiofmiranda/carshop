let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");

    cartItemsDiv.innerHTML = "";

    total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("product");
        itemDiv.innerHTML = `<p>${item.name} - R$ ${item.price.toFixed(3)}</p>`;
        const removeBtn = document.createElement("span");
        removeBtn.classList.add("remove-btn");
        removeBtn.innerHTML = "Remover";
        removeBtn.onclick = () => removeFromCart(index);
        itemDiv.appendChild(removeBtn);
        cartItemsDiv.appendChild(itemDiv);

        total += item.price;
    });

    totalDiv.textContent = `Total: R$ ${total.toFixed(3)}`;
}

function checkout() {
    alert("Compra finalizada! Total: R$ " + total.toFixed(3));
    // Lógica adicional para enviar dados ao servidor, etc.
    clearCart();
}

function cancel() {
    clearCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

