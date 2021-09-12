
const cartLayout = document.getElementById('cart');

const productCtn = document.createElement('div');
const productHdr = document.createElement('div');
const productTitle = document.createElement('h5');
const productPrice = document.createElement('h5');
const productQuantity = document.createElement('h5');
const productTotal = document.createElement('h5');
const products = document.createElement('div');

productTitle.innerHTML = 'PRODUCT';
productPrice.innerHTML = 'PRICE';
productQuantity.innerHTML = 'QUANTITY';
productTotal.innerHTML = 'TOTAL';

productCtn.setAttribute('class', 'container');
productQuantity.setAttribute('class', 'quantity');
productTotal.setAttribute('class', 'total');
products.setAttribute('class', 'products');

cartLayout.appendChild(productCtn);
productCtn.appendChild(productHdr);
productHdr.appendChild(productTitle);
productHdr.appendChild(productPrice);
productHdr.appendChild(productQuantity);
productHdr.appendChild(productTotal);

productCtn.appendChild(products);


console.log(cartLayout);


