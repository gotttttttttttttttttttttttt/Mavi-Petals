// Complete bouquet catalog data (30 products)
const bouquetsData = [
    // ========== SIGNATURE COLLECTION (10 Bouquets) ==========
    { name: "Aurora", price: 1000, category: "signature", badge: "SIGNATURE", quote: "Bloom where the light finds you.", spark: "fuzzy wire · aurora mist", image: "images/signature.png" },
    { name: "Ariel", price: 3000, category: "signature", badge: "SIGNATURE", quote: "For someone who makes my world brighter — just like Ariel chasing her dreams.", spark: "ocean shine · seafoam wrap", image: "images/signature1.png" },
    { name: "Matcha", price: 5000, category: "signature", badge: "SIGNATURE", quote: "A bouquet for someone who makes life as comforting as matcha.", spark: "creamy texture · jade tones", image: "images/signature2.png" },
    { name: "Serene", price: 1800, category: "signature", badge: "SIGNATURE", quote: "Find peace in gentle blooms and quiet moments.", spark: "lavender wire · calming mist", image: "images/signature3.png" },
    { name: "Blush", price: 1500, category: "signature", badge: "SIGNATURE", quote: "Soft whispers of pink, like a gentle morning kiss.", spark: "rose wire · cotton candy", image: "images/signature4.png" },
    { name: "Meadow", price: 2000, category: "signature", badge: "SIGNATURE", quote: "Wildflowers dancing in the summer breeze.", spark: "pastel wire · meadow mist", image: "images/signature5.png" },
    { name: "Verdant", price: 2700, category: "signature", badge: "SIGNATURE", quote: "Lush greenery that symbolizes growth and renewal.", spark: "emerald wire · forest essence", image: "images/signature6.png" },
    { name: "Mist", price: 1600, category: "signature", badge: "SIGNATURE", quote: "Soft and dreamy like morning fog over hills.", spark: "silver wire · ethereal haze", image: "images/signature7.png" },
    { name: "Petal", price: 1300, category: "signature", badge: "SIGNATURE", quote: "Delicate and pure, like the first bloom of spring.", spark: "soft pink wire · gentle touch", image: "images/signature8.png" },
    { name: "Zephyr", price: 1900, category: "signature", badge: "SIGNATURE", quote: "A gentle breeze carrying whispers of joy.", spark: "airy wire · wind-kissed", image: "images/signature9.png" },
    
    // ========== SINGLE BOUQUET (10 Bouquets) ==========
    { name: "Lumina", price: 4000, category: "limited", badge: "SINGLE BOUQUET", quote: "Shine softly, like moonlight on petals.", spark: "silver wire · pearl finish", image: "images/single.png" },
    { name: "Nova", price: 2800, category: "limited", badge: "SINGLE BOUQUET", quote: "A burst of starlight in every petal — celestial dreams await.", spark: "stardust wire · cosmic glow", image: "images/single1.png" },
    { name: "Pearl", price: 4500, category: "limited", badge: "SINGLE BOUQUET", quote: "Rare and luminous — a treasure for someone precious.", spark: "ivory wire · iridescent sheen", image: "images/single2.png" },
    { name: "Celeste", price: 4200, category: "limited", badge: "SINGLE BOUQUET", quote: "Heavenly blooms that reach for the stars.", spark: "celestial wire · moon dust", image: "images/single3.png" },
    { name: "Emberglow", price: 4800, category: "limited", badge: "SINGLE BOUQUET", quote: "The last light of dusk captured in petals.", spark: "copper wire · sunset shimmer", image: "images/single4.png" },
    { name: "Velvet", price: 4100, category: "limited", badge: "SINGLE BOUQUET", quote: "Rich, luxurious blooms that feel like silk.", spark: "plush wire · royal finish", image: "images/single5.png" },
    { name: "Eclipse", price: 5200, category: "limited", badge: "SINGLE BOUQUET", quote: "Rare beauty that appears once in a lifetime.", spark: "obsidian wire · midnight glow", image: "images/single6.png" },
    { name: "Aether", price: 3900, category: "limited", badge: "SINGLE BOUQUET", quote: "Ethereal blooms that seem to float between worlds.", spark: "crystal wire · prismatic shine", image: "images/single7.png" },
    { name: "Solstice", price: 4700, category: "limited", badge: "SINGLE BOUQUET", quote: "Celebrating the longest day with radiant blooms.", spark: "golden wire · sunburst", image: "images/single8.png" },
    { name: "Nocturne", price: 5600, category: "limited", badge: "SINGLE BOUQUET", quote: "Midnight melodies captured in every petal.", spark: "midnight wire · silver dust", image: "images/single9.png" },
    
    // ========== BEST SELLERS (10 Bouquets) ==========
    { name: "Solara", price: 2200, category: "best", badge: "BEST SELLER", quote: "Warmth that lingers like a golden hour glow.", spark: "sunset wire · amber tones", image: "images/bestseller3.png" },
    { name: "Willow", price: 3500, category: "best", badge: "BEST SELLER", quote: "Bloom with confidence and beauty — to know how beautiful you already are.", spark: "moss wire · woodland charm", image: "images/bestseller4.png" },
    { name: "Ember", price: 3200, category: "best", badge: "BEST SELLER", quote: "A fiery passion wrapped in soft, warm petals.", spark: "crimson wire · amber glow", image: "images/bestseller1.png" },
    { name: "Dusk", price: 3800, category: "best", badge: "BEST SELLER", quote: "Where day meets night — mysterious and beautiful.", spark: "twilight wire · velvet finish", image: "images/bestseller2.png" },
    { name: "Saffron", price: 3900, category: "best", badge: "BEST SELLER", quote: "Warm, spicy hues that ignite the soul.", spark: "golden wire · amber infusion", image: "images/bestseller5.png" },
    { name: "Horizon", price: 3600, category: "best", badge: "BEST SELLER", quote: "Where the earth meets the sky — endless possibilities.", spark: "gradient wire · twilight blend", image: "images/bestseller6.png" },
    { name: "Amber", price: 2900, category: "best", badge: "BEST SELLER", quote: "A warm embrace captured in golden petals.", spark: "honey wire · amber glow", image: "images/bestseller7.png" },
    { name: "Lavender", price: 2600, category: "best", badge: "BEST SELLER", quote: "Calming aromas and soothing purple hues.", spark: "violet wire · calming mist", image: "images/bestseller8.png" },
    { name: "Rosette", price: 3100, category: "best", badge: "BEST SELLER", quote: "Classic elegance with a modern twist.", spark: "crimson wire · velvet finish", image: "images/bestseller9.png" },
    { name: "Starlight", price: 4200, category: "best", badge: "BEST SELLER", quote: "Dreamy blooms that shine like the night sky.", spark: "silver wire · cosmic sparkle", image: "images/bestseller.png" }
];

// DOM Elements
const bouquetGrid = document.getElementById('bouquetGrid');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalSpan = document.getElementById('cartTotal');
const cartCountSpan = document.getElementById('cartCount');
const clearCartBtn = document.getElementById('clearCartBtn');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const customerName = document.getElementById('customerName');
const customerFacebook = document.getElementById('customerFacebook');
const customerAddress = document.getElementById('customerAddress');
const specialInstructions = document.getElementById('specialInstructions');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');

// Modal Elements
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalImage = document.getElementById('modalImage');
const modalBadge = document.getElementById('modalBadge');
const modalName = document.getElementById('modalName');
const modalQuote = document.getElementById('modalQuote');
const modalSpark = document.getElementById('modalSpark');
const modalPrice = document.getElementById('modalPrice');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

let currentProduct = null;

// Cart State
let cart = [];
let currentFilter = 'all';
let currentSearch = '';
let orders = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('mavi_petals_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('mavi_petals_cart', JSON.stringify(cart));
}

function loadOrders() {
    const savedOrders = localStorage.getItem('mavi_petals_orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
    updateSellerDashboard();
}

function saveOrders() {
    localStorage.setItem('mavi_petals_orders', JSON.stringify(orders));
}

// Add to cart
function addToCart(productName, productPrice) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showToast(`✨ ${productName} quantity increased to ${existingItem.quantity}`);
    } else {
        const product = bouquetsData.find(p => p.name === productName);
        cart.push({
            name: productName,
            price: parseInt(productPrice),
            quantity: 1,
            spark: product ? product.spark : ''
        });
        showToast(`🌸 ${productName} added to cart!`);
    }
    
    saveCart();
    updateCartUI();
}

function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`🗑️ ${removedItem.name} removed from cart`);
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">🛒 Your cart is empty. Add some beautiful bouquets!</div>';
        cartTotalSpan.textContent = '₱0';
        return;
    }
    
    let itemsHtml = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        itemsHtml += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.spark || 'Fuzzy wire bouquet'}</p>
                </div>
                <div class="cart-item-price">₱${item.price} x ${item.quantity} = ₱${itemTotal}</div>
                <button class="remove-cart-item" data-index="${index}">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = itemsHtml;
    cartTotalSpan.textContent = `₱${total.toLocaleString()}`;
    
    document.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.dataset.index);
            removeFromCart(index);
        });
    });
}

function clearCart() {
    if (cart.length > 0) {
        cart = [];
        saveCart();
        updateCartUI();
        showToast('Cart cleared');
    }
}

function placeOrder() {
    if (cart.length === 0) {
        showToast('Please add items to your cart first!');
        return;
    }
    
    const name = customerName.value.trim();
    const facebook = customerFacebook.value.trim();
    const address = customerAddress.value.trim();
    
    if (!name || !facebook || !address) {
        showToast('Please fill in all required fields!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const newOrder = {
        id: 'ORD-' + Date.now(),
        date: new Date().toLocaleString(),
        customer: { name, facebook, address },
        items: cart.map(item => ({ 
            name: item.name, 
            price: item.price, 
            quantity: item.quantity,
            subtotal: item.price * item.quantity 
        })),
        specialInstructions: specialInstructions.value.trim(),
        total: total,
        status: 'Pending'
    };
    
    orders.unshift(newOrder);
    saveOrders();
    updateSellerDashboard();
    
    cart = [];
    saveCart();
    updateCartUI();
    customerName.value = '';
    customerFacebook.value = '';
    customerAddress.value = '';
    specialInstructions.value = '';
    
    showToast(`🎉 Order placed successfully! Order ID: ${newOrder.id}`);
    document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
}

function updateSellerDashboard() {
    const totalOrdersCountSpan = document.getElementById('totalOrdersCount');
    const totalRevenueSpan = document.getElementById('totalRevenue');
    const ordersListContainer = document.getElementById('ordersList');
    
    if (totalOrdersCountSpan) totalOrdersCountSpan.textContent = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    if (totalRevenueSpan) totalRevenueSpan.textContent = `₱${totalRevenue.toLocaleString()}`;
    
    if (orders.length === 0) {
        if (ordersListContainer) ordersListContainer.innerHTML = '<div class="empty-orders">No orders placed yet</div>';
        return;
    }
    
    let ordersHtml = '';
    orders.forEach(order => {
        ordersHtml += `
            <div class="order-card">
                <div class="order-card-header">
                    <span class="order-id">${order.id}</span>
                    <span class="order-date">${order.date}</span>
                </div>
                <div class="order-customer">
                    <p><strong>${order.customer.name}</strong></p>
                    <p>FB: ${order.customer.facebook}</p>
                    <p>📦 ${order.customer.address}</p>
                </div>
                <ul class="order-items-list">
                    ${order.items.map(item => `<li>${item.name} x${item.quantity} - ₱${item.subtotal}</li>`).join('')}
                </ul>
                ${order.specialInstructions ? `<p><em>Note: ${order.specialInstructions}</em></p>` : ''}
                <div class="order-total-small">Total: ₱${order.total.toLocaleString()}</div>
            </div>
        `;
    });
    if (ordersListContainer) ordersListContainer.innerHTML = ordersHtml;
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// Open modal with product details
function openModal(product) {
    currentProduct = product;
    modalImage.src = product.image;
    modalBadge.textContent = product.badge;
    modalName.textContent = product.name;
    modalQuote.textContent = product.quote;
    modalSpark.textContent = product.spark;
    modalPrice.textContent = `₱ ${product.price}`;
    productModal.style.display = 'flex';
}

function closeModal() {
    productModal.style.display = 'none';
    currentProduct = null;
}

// Render simplified products (only image, name, price, view details button)
function renderProducts() {
    let filtered = [...bouquetsData];
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(b => b.category === currentFilter);
    }
    
    if (currentSearch.trim()) {
        const searchTerm = currentSearch.toLowerCase();
        filtered = filtered.filter(b => 
            b.name.toLowerCase().includes(searchTerm) || 
            b.quote.toLowerCase().includes(searchTerm) ||
            b.spark.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filtered.length === 0) {
        bouquetGrid.innerHTML = `<div class="no-results"><i class="fa-regular fa-flower"></i><p>No bouquets found. Try a different search or filter.</p></div>`;
        return;
    }
    
    bouquetGrid.innerHTML = filtered.map(bouquet => `
        <div class="bouquet-card" data-name="${bouquet.name}">
            <div class="photo-frame">
                <img src="${bouquet.image}" alt="${bouquet.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<div style=\'display:flex;align-items:center;justify-content:center;height:100%;color:#aa9b8b\'><i class=\'fa-regular fa-image\'></i>  ${bouquet.name}</div>'">
            </div>
            <div class="bouquet-name">${bouquet.name}</div>
            <div class="price-block-simple">
                <span class="price-simple">₱ ${bouquet.price}</span>
            </div>
            <button class="view-details-btn" data-name="${bouquet.name}">
                View Details
            </button>
        </div>
    `).join('');
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const name = btn.getAttribute('data-name');
            const product = bouquetsData.find(p => p.name === name);
            if (product) openModal(product);
        });
    });
}

// Modal Add to Cart
if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', () => {
        if (currentProduct) {
            addToCart(currentProduct.name, currentProduct.price);
            closeModal();
        }
    });
}

// Close modal events
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeModal();
    }
});

// Navigation filter
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        currentFilter = link.dataset.nav;
        renderProducts();
    });
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderProducts();
});

// Event listeners
clearCartBtn.addEventListener('click', clearCart);
placeOrderBtn.addEventListener('click', placeOrder);

// Seller Dashboard Toggle
const sellerDashboard = document.getElementById('sellerDashboard');
const showSellerBtn = document.getElementById('showSellerBtn');
const closeDashboardBtn = document.getElementById('closeDashboardBtn');

if (showSellerBtn) {
    showSellerBtn.addEventListener('click', () => {
        sellerDashboard.classList.toggle('show');
        if (sellerDashboard.classList.contains('show')) {
            updateSellerDashboard();
            sellerDashboard.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

if (closeDashboardBtn) {
    closeDashboardBtn.addEventListener('click', () => {
        sellerDashboard.classList.remove('show');
    });
}

// Initialize
loadCart();
loadOrders();
renderProducts();

console.log('🌸 Mavi Petals — Simplified cards with modal details!');
console.log('🛒 Click "View Details" to see full product info and add to cart');
