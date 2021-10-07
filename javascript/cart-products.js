
const cartLayout = document.getElementById('cart');

const productContainer = document.createElement('div');
const productHeader = document.createElement('div');
const productTitle = document.createElement('h5');
const productPrice = document.createElement('h5');
const productQuantity = document.createElement('h5');
const productTotal = document.createElement('h5');
const products = document.createElement('div');

productTitle.innerHTML = 'PRODUCT';
productPrice.innerHTML = 'PRICE';
productQuantity.innerHTML = 'QUANTITY';
productTotal.innerHTML = 'TOTAL';

productContainer.setAttribute('class', 'container');
productQuantity.setAttribute('class', 'quantity');
productTotal.setAttribute('class', 'total');
products.setAttribute('class', 'products');

cartLayout.appendChild(productContainer);
productContainer.appendChild(productHeader);
productHeader.appendChild(productTitle);
productHeader.appendChild(productPrice);
productHeader.appendChild(productQuantity);
productHeader.appendChild(productTotal);

productContainer.appendChild(products);


console.log(cartLayout);


