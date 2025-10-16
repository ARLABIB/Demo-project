// Toggle Mobile Menu
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Sample Product Data
const products = [
  { name: 'T-Shirt', price: 19.99, category: 'Clothing', image: 'https://via.placeholder.com/200' },
  { name: 'Smartphone', price: 299.99, category: 'Electronics', image: 'https://via.placeholder.com/200' },
  { name: 'Blender', price: 49.99, category: 'Home', image: 'https://via.placeholder.com/200' },
  { name: 'Novel Book', price: 9.99, category: 'Books', image: 'https://via.placeholder.com/200' },
  { name: 'Toy Car', price: 14.99, category: 'Toys', image: 'https://via.placeholder.com/200' },
  { name: 'Jeans', price: 39.99, category: 'Clothing', image: 'https://via.placeholder.com/200' },
  { name: 'Headphones', price: 89.99, category: 'Electronics', image: 'https://via.placeholder.com/200' },
  { name: 'Microwave', price: 89.99, category: 'Home', image: 'https://via.placeholder.com/200' },
];

// Render Products
function renderProducts(list) {
  const container = document.getElementById('productGrid');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = '<p>No products found.</p>';
    return;
  }

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p
