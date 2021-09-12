const checkoutBtns = document.getElementById('checkout-btns');

const checkoutBtn = document.createElement('button');
const checkoutBtnA = document.createElement('a')
const emptyCartBtn = document.createElement('button');
const cartRowTotal = document.createElement('div');


checkoutBtn.setAttribute('class', 'btn btn-primary m-2 text-white');
checkoutBtn.setAttribute('id', 'checkout')
checkoutBtnA.setAttribute('href', 'checkout-form.html')
emptyCartBtn.setAttribute('class', 'btn btn-primary m-2 text-white');
cartRowTotal.setAttribute('id', 'cartTotal');

const priceTotal = document.getElementById('cartTotal');

emptyCartBtn.addEventListener('click', emptyCart);

checkoutBtn.innerHTML = 'Complete order'; 
emptyCartBtn.innerHTML = 'Empty cart';
cartRowTotal.innerHTML = '<b>Total: </b>' + new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(cartTotal());

checkoutBtn.addEventListener('click', ()=>{
    checkoutLink();
})

checkoutBtns.appendChild(checkoutBtnA);
checkoutBtnA.appendChild(checkoutBtn);
checkoutBtns.appendChild(emptyCartBtn);
checkoutBtns.appendChild(cartRowTotal);

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

console.log(checkoutBtns);