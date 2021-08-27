const checkoutBtns = document.getElementById('checkout-btns')

const checkoutBtn = document.createElement('button')
const checkoutLink = document.createElement('a')
const emptyCartBtn = document.createElement('button')

checkoutLink.setAttribute('href', 'checkout.html')
checkoutBtn.setAttribute('class', 'btn-primary m-2')
emptyCartBtn.setAttribute('class', 'btn-primary m-2')

emptyCartBtn.addEventListener('click', emptyCart);

checkoutBtn.innerHTML = 'Checkout' 
emptyCartBtn.innerHTML = 'Empty cart'

checkoutBtns.appendChild(checkoutLink)
checkoutLink.appendChild(checkoutBtn)
checkoutBtns.appendChild(emptyCartBtn)

function emptyCart() {
    if(sessionStorage.getItem('cartData'))
    cartData = JSON.parse(localStorage.getItem("cartData"));
    {
        sessionStorage.removeItem('cartData');
    }
    localStorage.setItem("cartData", JSON.stringify(cartData))
    console.log(cartData)
}

console.log(checkoutBtns)