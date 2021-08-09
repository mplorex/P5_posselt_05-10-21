let cartData = [];
function addToCart (product) {
    if (localStorage.getItem("cartData")){
        cartData = JSON.parse(localStorage.getItem("cartData"));
    }
    let productExists = false

    for (let i = 0; i < cartData.length; i++) {
        if (cartData[i]._id === product._id) {
            productExists = true
            cartData[i].quantity = cartData[i].quantity +1
        }
    }
    if (!productExists) {
        product.quantity = 1;
        cartData.push(product)
    }
    localStorage.setItem("cartData", JSON.stringify(cartData))
}