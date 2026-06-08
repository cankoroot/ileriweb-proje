function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

let cart = getFromLocalStorage('gymCart') || [];

function addToCart(packageName, price) {
    const item = {
        id: Date.now(),
        name: packageName,
        price: price
    };
    cart.push(item);
    saveToLocalStorage('gymCart', cart);
    updateCartDisplay();
    alert(`${packageName} sepete eklendi!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveToLocalStorage('gymCart', cart);
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    saveToLocalStorage('gymCart', cart);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Sepet boş</p>';
        cartTotal.textContent = '0';
    } else {
        let total = 0;
        cartItems.innerHTML = cart.map(item => {
            total += item.price;
            return `
                <div class="cart-item">
                    <div>
                        <div class="cart-item-name">${item.name}</div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <span class="cart-item-price">₺${item.price}</span>
                        <button onclick="removeFromCart(${item.id})" style="background: #d32f2f; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">✕</button>
                    </div>
                </div>
            `;
        }).join('');
        cartTotal.textContent = total;
    }
}

let favorites = getFromLocalStorage('gymFavorites') || [];

function toggleFavorite(itemId, itemName) {
    const isFavorited = favorites.some(fav => fav.id === itemId);

    if (isFavorited) {
        favorites = favorites.filter(fav => fav.id !== itemId);
    } else {
        favorites.push({ id: itemId, name: itemName });
    }

    saveToLocalStorage('gymFavorites', favorites);
    updateFavoriteCount();
}

function updateFavoriteCount() {
    const favCount = document.getElementById('favCount');
    if (favCount) {
        favCount.textContent = favorites.length;
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    if (navMenu) {
        navMenu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                navMenu.classList.remove('active');
            }
        });
    }

    const favBtn = document.getElementById('favBtn');
    if (favBtn) {
        favBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const favList = favorites.map(f => f.name).join('\n');
            alert(`Favorilerim:\n${favList || 'Henüz favori yok'}`);
        });
    }

    updateFavoriteCount();
    updateCartDisplay();
});

// Form Validation Helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('programModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function closeTrainerModal() {
    const modal = document.getElementById('trainerModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function (event) {
    const programModal = document.getElementById('programModal');
    const trainerModal = document.getElementById('trainerModal');

    if (event.target == programModal) {
        programModal.style.display = 'none';
    }
    if (event.target == trainerModal) {
        trainerModal.style.display = 'none';
    }
}

console.log('FitPower Gym - JavaScript Yüklendi');

/* cankoroot tarafından yapıldı */
