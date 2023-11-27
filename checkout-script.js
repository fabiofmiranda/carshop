// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    // Simulemos uma lista de produtos com IDs, nomes, descrições e preços
    const products = [
        { id: 1, name: 'Carro Modelo 1', description: 'Descrição do carro modelo 1.', price: 50000 },
        // Adicione mais produtos conforme necessário
    ];

    // Encontrar o produto pelo ID
    const product = products.find(item => item.id === productId);

    if (product) {
        // Adicionar o produto ao carrinho
        cart.push(product);

        // Atualizar o carrinho na página
        updateCart();
    } else {
        console.error('Produto não encontrado.');
    }
}

// Função para atualizar a exibição do carrinho na página
function updateCart() {
    const cartTotalElement = document.getElementById('cartTotal');
    const cartButtons = document.querySelector('.cart-buttons');

    // Limpar o carrinho atual na página
    cartTotalElement.textContent = calculateTotal().toFixed(2);
    
    // Adicionar ou remover o botão "Finalizar Compras" com base no carrinho vazio ou não
    if (cart.length > 0 && !cartButtons.querySelector('.checkout-button')) {
        const checkoutButton = document.createElement('button');
        checkoutButton.textContent = 'Finalizar Compras';
        checkoutButton.className = 'checkout-button';
        checkoutButton.onclick = checkout;
        cartButtons.appendChild(checkoutButton);
    } else if (cart.length === 0) {
        const checkoutButton = cartButtons.querySelector('.checkout-button');
        if (checkoutButton) {
            checkoutButton.remove();
        }
    }

    // Atualizar a exibição dos produtos no carrinho
    renderCartProducts();
}

// Função para calcular o total do carrinho
function calculateTotal() {
    return cart.reduce((total, product) => total + product.price, 0);
}

// Função para renderizar os produtos no carrinho
function renderCartProducts() {
    const cartSection = document.querySelector('.cart-section');
    const existingProductElements = document.querySelectorAll('.cart-product');

    // Remover produtos existentes na página
    existingProductElements.forEach(element => element.remove());

    // Adicionar os produtos ao carrinho na página
    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'cart-product';

        const productInfoElement = document.createElement('div');
        productInfoElement.className = 'product-info';

        const productImageElement = document.createElement('img');
        productImageElement.src = `product${product.id}.jpg`; // Substitua pelo caminho correto da imagem
        productImageElement.alt = product.name;

        const productNameElement = document.createElement('h3');
        productNameElement.textContent = product.name;

        const productDescriptionElement = document.createElement('p');
        productDescriptionElement.textContent = product.description;

        const productPriceElement = document.createElement('span');
        productPriceElement.textContent = `R$ ${product.price.toFixed(2)}`;

        const removeButtonElement = document.createElement('button');
        removeButtonElement.textContent = 'Remover';
        removeButtonElement.onclick = () => removeFromCart(product.id);

        productInfoElement.appendChild(productNameElement);
        productInfoElement.appendChild(productDescriptionElement);
        productInfoElement.appendChild(productPriceElement);
        productInfoElement.appendChild(removeButtonElement);

        productElement.appendChild(productImageElement);
        productElement.appendChild(productInfoElement);

        cartSection.appendChild(productElement);
    });
}

// Função para remover um produto do carrinho
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

// Função para finalizar compras
function checkout() {
    alert('Implemente aqui a lógica para finalizar compras!');
    // Você pode redirecionar para uma página de checkout, enviar informações para o servidor, etc.
}

// Função para limpar o carrinho
function clearCart() {
    cart = [];
    updateCart();
}

// Inicializar o carrinho vazio
let cart = [];
