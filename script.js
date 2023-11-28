// Simulated product data
const products = [
    { id: 1, name: 'Product 1', category: 'Clothes', price: 49.99, colors: ['Red', 'Blue'], rating: 4.5 },
    { id: 2, name: 'Product 2', category: 'Shoes', price: 79.99, colors: ['Black', 'White'], rating: 3.8 },
    // Add more product entries
  ];
  
  // Function to display products on the page
  function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating}</p>
        <div>
          Colors: ${product.colors.map(color => `<span>${color}</span>`).join(', ')}
        </div>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="showProductDetails(${product.id})">Details</button>
      `;
      productsContainer.appendChild(productElement);
    });
  }
  
  // Function to filter products based on category
  function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    // Implement your logic to add the product to the cart
    console.log(`Product ${productId} added to the cart.`);
  }
  
  // Function to show product details
  function showProductDetails(productId) {
    // Implement your logic to display product details, e.g., in a modal
    console.log(`Show details for product ${productId}.`);
  }
  
  // Initial display of all products
  displayProducts(products);
  