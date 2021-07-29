const cart = [{}];
function addToCart (norbert, arnold, lc, gustav, garfunkel) {
    let productLoad = false

    for (let i = 0; i < cart.length; i++) {
        if (cart[i]._id === norbert._id) {
            productLoad = true
            cart[i].quantity = cart[i].quantity +1
        }
    }
    if (!productExists) {
        cart.push(norbert)
    }
}