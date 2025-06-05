function redirectToPage(page) {
    window.location.href = page;
}



let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.click-button').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

function openCart() {
    document.getElementById('cart-modal').style.display = 'block';
    renderCart();
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function addToCart(event) {
    const button = event.target;
    const productElement = button.closest('.product');
    const productName = productElement.querySelector('h3').textContent;
    const productPrice = parseFloat(productElement.querySelector('p').textContent.replace(/[^\d]/g, ''));
    const productImage = productElement.querySelector('img').src;

    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price} ₽</p>
            </div>
            <div class="cart-item-actions">
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)">
                <button onclick="removeFromCart('${item.name}')">Удалить</button>
            </div>
        `;
        cartItemsElement.appendChild(itemElement);
    });

    document.getElementById('cart-total').textContent = total;
}

function updateQuantity(productName, quantity) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        cart[productIndex].quantity = parseInt(quantity);
        renderCart();
    }
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartCount();
    renderCart();
}




document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.list li');
    let currentIndex = 2; // Начинаем с третьего слайда, который имеет класс 'act'

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('act', 'prev', 'next', 'hide', 'new-next');

            if (index === currentIndex) {
                slide.classList.add('act');
            } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            } else if (index === (currentIndex + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentIndex - 2 + slides.length) % slides.length) {
                slide.classList.add('hide');
            } else {
                slide.classList.add('new-next');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    setInterval(nextSlide, 3000); // Переключение слайдов каждые 3 секунды

    updateSlides();
});



(function ($) {
    $(window).on("load", function () {
        $(".mcs-horizontal-example").mCustomScrollbar({
            axis: "x", // Горизонтальная прокрутка
            theme: "dark-3", // Темная тема
            advanced: {
                autoExpandHorizontalScroll: true // Автоматически расширять горизонтальную прокрутку
            }
        });
    });
})(jQuery);




function togglePopup() {
    document.getElementById("popup-1")
        .classList.toggle("active");
}

