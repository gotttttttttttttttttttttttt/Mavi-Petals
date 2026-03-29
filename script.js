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

// Seller Dashboard Elements
const sellerDashboard = document.getElementById('sellerDashboard');
const showSellerBtn = document.getElementById('showSellerBtn');
const closeDashboardBtn = document.getElementById('closeDashboardBtn');
const passwordModal = document.getElementById('passwordModal');
const sellerPasswordInput = document.getElementById('sellerPassword');
const submitPasswordBtn = document.getElementById('submitPasswordBtn');
const cancelPasswordBtn = document.getElementById('cancelPasswordBtn');
const passwordError = document.getElementById('passwordError');

// Order Tracker Elements
const trackOrderId = document.getElementById('trackOrderId');
const trackOrderBtn = document.getElementById('trackOrderBtn');
const trackResult = document.getElementById('trackResult');

// Seller password (CHANGE THIS TO YOUR PASSWORD)
const SELLER_PASSWORD = "mavi2025";

let currentProduct = null;
let isSellerAuthenticated = false;

// Cart State
let cart = [];
let currentFilter = 'all';
let currentSearch = '';
let orders = [];
let orderStatusFilter = 'all';

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
        cleanupExpiredOrders();
    }
    updateSellerDashboard();
}

function saveOrders() {
    localStorage.setItem('mavi_petals_orders', JSON.stringify(orders));
}

// Clean up orders completed more than 24 hours ago
function cleanupExpiredOrders() {
    const now = new Date();
    orders = orders.filter(order => {
        if (order.status === 'Completed' && order.completedAt) {
            const completedDate = new Date(order.completedAt);
            const hoursDiff = (now - completedDate) / (1000 * 60 * 60);
            return hoursDiff < 24;
        }
        return true;
    });
    saveOrders();
}

// Mark order as completed
function markOrderCompleted(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order && order.status !== 'Completed') {
        order.status = 'Completed';
        order.completedAt = new Date().toISOString();
        saveOrders();
        updateSellerDashboard();
        showToast(`✅ Order ${orderId} marked as completed!`);
    }
}

// Delete order permanently
function deleteOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        const order = orders[orderIndex];
        orders.splice(orderIndex, 1);
        saveOrders();
        updateSellerDashboard();
        showToast(`🗑️ Order ${orderId} deleted`);
    }
}

// Get pending orders count
function getPendingOrdersCount() {
    return orders.filter(order => order.status === 'Pending').length;
}

// Track order by ID (for customers)
function trackOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    
    if (!order) {
        trackResult.innerHTML = `
            <div class="order-not-found">
                <i class="fa-regular fa-circle-xmark"></i>
                <p>Order not found. Please check your Order ID and try again.</p>
            </div>
        `;
        trackResult.style.display = 'block';
        return;
    }
    
    const statusClass = order.status === 'Pending' ? 'order-status-pending' : 'order-status-completed';
    const statusText = order.status === 'Pending' ? '⏳ Pending' : '✅ Completed';
    
    trackResult.innerHTML = `
        <div class="order-found">
            <h4>Order Details</h4>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Date:</strong> ${order.date}</p>
            <p><strong>Customer:</strong> ${order.customer.name}</p>
            <p><strong>Delivery Address:</strong> ${order.customer.address}</p>
            <p><strong>Status:</strong> <span class="${statusClass}">${statusText}</span></p>
            <h5 style="margin-top: 1rem;">Items Ordered:</h5>
            <ul class="order-items">
                ${order.items.map(item => `<li>${item.name} x${item.quantity} - ₱${item.subtotal}</li>`).join('')}
            </ul>
            ${order.specialInstructions ? `<p><em>Note: ${order.specialInstructions}</em></p>` : ''}
            <div class="order-total">Total: ₱${order.total.toLocaleString()}</div>
        </div>
    `;
    trackResult.style.display = 'block';
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
        createdAt: new Date().toISOString(),
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
    
    // Show order confirmation with tracking info
    showToast(`🎉 Order placed successfully! Your Order ID: ${newOrder.id}`);
    showToast(`📦 Use this ID to track your order: ${newOrder.id}`);
    
    cart = [];
    saveCart();
    updateCartUI();
    customerName.value = '';
    customerFacebook.value = '';
    customerAddress.value = '';
    specialInstructions.value = '';
    
    document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
}

// Update seller dashboard
function updateSellerDashboard() {
    const totalOrdersCountSpan = document.getElementById('totalOrdersCount');
    const totalRevenueSpan = document.getElementById('totalRevenue');
    const ordersListContainer = document.getElementById('ordersList');
    
    if (totalOrdersCountSpan) totalOrdersCountSpan.textContent = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    if (totalRevenueSpan) totalRevenueSpan.textContent = `₱${totalRevenue.toLocaleString()}`;
    
    let filteredOrders = orders;
    if (orderStatusFilter === 'pending') {
        filteredOrders = orders.filter(o => o.status === 'Pending');
    } else if (orderStatusFilter === 'completed') {
        filteredOrders = orders.filter(o => o.status === 'Completed');
    }
    
    if (filteredOrders.length === 0) {
        if (ordersListContainer) ordersListContainer.innerHTML = '<div class="empty-orders">No orders placed yet</div>';
        return;
    }
    
    let ordersHtml = '';
    filteredOrders.forEach(order => {
        const isPending = order.status === 'Pending';
        const statusClass = isPending ? 'status-pending' : 'status-completed';
        const statusText = isPending ? '⏳ Pending' : '✅ Completed';
        
        ordersHtml += `
            <div class="order-card ${statusClass}">
                <div class="order-card-header">
                    <div>
                        <span class="order-id">${order.id}</span>
                        <span class="order-status ${statusClass}">${statusText}</span>
                    </div>
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
                <div class="order-actions">
                    ${isPending ? `<button class="complete-order-btn" data-id="${order.id}"><i class="fa-regular fa-check-circle"></i> Mark as Done</button>` : `<span class="completed-badge">✨ Completed</span>`}
                    <button class="delete-order-btn" data-id="${order.id}"><i class="fa-regular fa-trash-can"></i> Delete</button>
                </div>
            </div>
        `;
    });
    
    if (ordersListContainer) ordersListContainer.innerHTML = ordersHtml;
    
    document.querySelectorAll('.complete-order-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = btn.getAttribute('data-id');
            markOrderCompleted(orderId);
        });
    });
    
    document.querySelectorAll('.delete-order-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = btn.getAttribute('data-id');
            if (confirm('Are you sure you want to delete this order?')) {
                deleteOrder(orderId);
            }
        });
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 10000);
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

// Render simplified products
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
    
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const name = btn.getAttribute('data-name');
            const product = bouquetsData.find(p => p.name === name);
            if (product) openModal(product);
        });
    });
}

// Add filter buttons to seller dashboard
function addFilterButtons() {
    const sellerStatsDiv = document.querySelector('.seller-stats');
    if (sellerStatsDiv && !document.getElementById('orderFilters')) {
        const filterDiv = document.createElement('div');
        filterDiv.className = 'order-filters';
        filterDiv.id = 'orderFilters';
        filterDiv.innerHTML = `
            <button class="filter-btn active" data-filter="all">📋 All Orders</button>
            <button class="filter-btn" data-filter="pending">⏳ Pending (${getPendingOrdersCount()})</button>
            <button class="filter-btn" data-filter="completed">✅ Completed</button>
        `;
        sellerStatsDiv.parentNode.insertBefore(filterDiv, sellerStatsDiv.nextSibling);
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                orderStatusFilter = btn.getAttribute('data-filter');
                updateSellerDashboard();
            });
        });
    }
}

// Show password modal for seller access
function showPasswordModal() {
    sellerPasswordInput.value = '';
    passwordError.style.display = 'none';
    passwordModal.style.display = 'flex';
}

// Authenticate seller
function authenticateSeller() {
    const enteredPassword = sellerPasswordInput.value;
    if (enteredPassword === SELLER_PASSWORD) {
        isSellerAuthenticated = true;
        passwordModal.style.display = 'none';
        sellerDashboard.style.display = 'block';
        addFilterButtons();
        updateSellerDashboard();
        sellerDashboard.scrollIntoView({ behavior: 'smooth' });
        showToast('🔓 Welcome, Seller! Dashboard unlocked.');
    } else {
        passwordError.style.display = 'block';
        sellerPasswordInput.value = '';
        sellerPasswordInput.focus();
    }
}

// Cancel password entry
function cancelPassword() {
    passwordModal.style.display = 'none';
    sellerPasswordInput.value = '';
    passwordError.style.display = 'none';
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
    if (e.target === passwordModal) {
        cancelPassword();
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

// Order Tracker Event
if (trackOrderBtn) {
    trackOrderBtn.addEventListener('click', () => {
        const orderId = trackOrderId.value.trim();
        if (!orderId) {
            showToast('Please enter an Order ID');
            return;
        }
        trackOrder(orderId);
    });
}

// Also allow Enter key on track order input
if (trackOrderId) {
    trackOrderId.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const orderId = trackOrderId.value.trim();
            if (orderId) {
                trackOrder(orderId);
            }
        }
    });
}

// Seller Dashboard Toggle with password
if (showSellerBtn) {
    showSellerBtn.addEventListener('click', () => {
        if (isSellerAuthenticated) {
            sellerDashboard.style.display = sellerDashboard.style.display === 'block' ? 'none' : 'block';
            if (sellerDashboard.style.display === 'block') {
                updateSellerDashboard();
                sellerDashboard.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            showPasswordModal();
        }
    });
}

if (closeDashboardBtn) {
    closeDashboardBtn.addEventListener('click', () => {
        sellerDashboard.style.display = 'none';
    });
}

// Password modal buttons
if (submitPasswordBtn) {
    submitPasswordBtn.addEventListener('click', authenticateSeller);
}
if (cancelPasswordBtn) {
    cancelPasswordBtn.addEventListener('click', cancelPassword);
}
if (sellerPasswordInput) {
    sellerPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            authenticateSeller();
        }
    });
}

// Auto-cleanup every hour
setInterval(() => {
    cleanupExpiredOrders();
    if (isSellerAuthenticated && sellerDashboard.style.display === 'block') {
        updateSellerDashboard();
    }
}, 60 * 60 * 1000);

// Initialize
loadCart();
loadOrders();
renderProducts();

console.log('🌸 Mavi Petals — Seller dashboard is password protected!');
console.log('🔐 Seller password: "mavi2025" (change this in script.js)');
console.log('📦 Customers can track their orders by Order ID!');
