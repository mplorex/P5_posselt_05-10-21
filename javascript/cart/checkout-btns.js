const checkoutBtns = document.getElementById('checkout-btns')

const checkoutBtn = document.createElement('button')
const checkoutLink = document.createElement('a')
const emptyCartBtn = document.createElement('button')
const cartRowTotal = document.createElement('div')

checkoutLink.setAttribute('href', 'checkout-form.html')
checkoutBtn.setAttribute('class', 'btn-primary m-2')
emptyCartBtn.setAttribute('class', 'btn-primary m-2')
cartRowTotal.setAttribute('id', 'cartTotal')

const priceTotal = document.getElementById('cartTotal')

emptyCartBtn.addEventListener('click', emptyCart);

checkoutBtn.innerHTML = 'Checkout' 
emptyCartBtn.innerHTML = 'Empty cart'
cartRowTotal.innerHTML = '<b>Total: </b>' + cartTotal();

checkoutBtns.appendChild(checkoutLink)
checkoutLink.appendChild(checkoutBtn)
checkoutBtns.appendChild(emptyCartBtn)
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