const cartButtons = document.getElementById('checkout-btns');

const checkoutButton = document.createElement('button');
const checkoutButtonA = document.createElement('a')
const emptyCartButton = document.createElement('button');
const cartPageTotal = document.createElement('div');


checkoutButton.setAttribute('class', 'btn btn-primary m-2 text-white');
checkoutButton.setAttribute('id', 'checkout')
checkoutButtonA.setAttribute('href', 'checkout-form.html')
emptyCartButton.setAttribute('class', 'btn btn-primary m-2 text-white');
cartPageTotal.setAttribute('id', 'cartTotal');

const priceTotal = document.getElementById('cartTotal');

emptyCartButton.addEventListener('click', emptyCart);

checkoutButton.innerHTML = 'Complete order'; 
emptyCartButton.innerHTML = 'Empty cart';
cartPageTotal.innerHTML = '<b>Total: </b>' + new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(cartTotal());

checkoutButton.addEventListener('click', ()=>{
    checkoutLink();
})

cartButtons.appendChild(checkoutButtonA);
checkoutButtonA.appendChild(checkoutButton);
cartButtons.appendChild(emptyCartButton);
cartButtons.appendChild(cartRowTotal);

function emptyCart() {
    if(sessionStorage.getItem('cartData'));
    cartData = JSON.parse(localStorage.getItem('cartData'));
    {
        sessionStorage.removeItem('cartData');
        cartData = [];
        localStorage.setItem('cartData', JSON.stringify());
    }
    localStorage.setItem('cartData', JSON.stringify(cartData));
    window.location.reload();
}

function checkoutLink() {
    let btnClick = document.getElementById('checkout')
    btnClick.href = 'cart.html';
}

console.log(cartButtons);