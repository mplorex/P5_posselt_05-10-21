const checkoutBtns = document.getElementById('checkout-btns')


const checkoutBtn = document.createElement('button')
const emptyCartBtn = document.createElement('button')

emptyCartBtn.addEventListener('click', emptyCart);

checkoutBtn.innerHTML = 'Checkout' 
emptyCartBtn.innerHTML = 'Empty cart'

checkoutBtns.appendChild(checkoutBtn)
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