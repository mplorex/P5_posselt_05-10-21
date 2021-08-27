let cartData = [];
function addToCart (product) {
    let colorTag = document.getElementById('color-select');
    if(colorTag.value != '--Select a color--'){
        if (localStorage.getItem("cartData")){
            cartData = JSON.parse(localStorage.getItem("cartData"));
        }
        let productExists = false

        for (let i = 0; i < cartData.length; i++) {
            if (cartData[i]._id === product._id && cartData[i].colors === colorTag.value) {
                productExists = true
                cartData[i].quantity = cartData[i].quantity +1
            }
        }
        if (!productExists) {
            product.quantity = 1;
            product.colors = colorTag.value;
            cartData.push(product)
        }
        console.log(cartData);
    localStorage.setItem("cartData", JSON.stringify(cartData))
    } else{
    alert ('Please select a color!')
    }
}
