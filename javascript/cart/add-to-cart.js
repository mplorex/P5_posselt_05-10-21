let cartData = [];
function addToCart (product) {
    if (localStorage.getItem("cartData")){
        cartData = JSON.parse(localStorage.getItem("cartData"));
    }
    let productLoad = false

    for (let i = 0; i < cartData.length; i++) {
        if (cartData[i]._id === product._id) {
            productLoad = true
            cartData[i].quantity = cartData[i].quantity +1
        }
    }
    if (!productLoad) {
        product.quantity = 1;
        cartData.push(product)
    }
    localStorage.setItem("cartData", JSON.stringify(cartData))
}