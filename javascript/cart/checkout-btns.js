const checkoutBtns = document.getElementById('checkout-btns')

const checkoutBtn = document.createElement('button')
const addToCartBtn = document.createElement('button')
const cartRowTotal = document.createElement('div')

checkoutBtn.setAttribute('href', 'checkout-form.html')
checkoutBtn.setAttribute('class', 'btn-primary m-2')
addToCartBtn.setAttribute('class', 'btn-primary m-2')
cartRowTotal.setAttribute('id', 'cartTotal')

const priceTotal = document.getElementById('cartTotal')

addToCartBtn.addEventListener('click', emptyCart);

checkoutBtn.innerHTML = 'Checkout' 
addToCartBtn.innerHTML = 'Empty cart'
cartRowTotal.innerHTML = '<b>Total: </b>' + cartTotal();

checkoutBtns.appendChild(checkoutBtn)
checkoutBtns.appendChild(addToCartBtn)
checkoutBtns.appendChild(cartRowTotal)


function emptyCart() {
    if(sessionStorage.getItem('cartData'))
    cartData = JSON.parse(localStorage.getItem('cartData'));
    {
        sessionStorage.removeItem('cartData');
        cartData = [];
        localStorage.setItem('cartData', JSON.stringify())
    }
    localStorage.setItem('cartData', JSON.stringify(cartData))
    window.location.reload();
}

console.log(checkoutBtns)