let cartData = [];

if (localStorage.getItem("cartData")){
    cartData = JSON.parse(localStorage.getItem("cartData"));
}

function addToCart (product, color) {
    if(color != '--Select a color--'){

        let productExists = false
        console.log(color)
        for (let i = 0; i < cartData.length; i++) {
            if (cartData[i]._id === product._id && cartData[i].colors === color) {
                productExists = true
                cartData[i].quantity = cartData[i].quantity +1
                break
            }
        }
        if (!productExists) {
            const newProduct = { ...product }
            newProduct.quantity = 1;
            newProduct.colors = color;
            cartData.push(newProduct)
        }
        console.log(cartData);
    localStorage.setItem("cartData", JSON.stringify(cartData))
    } else{
    alert ('Please select a color!')
    }
}

function cartTotal(){
    let cartTotal = 0;
    for(let i in cartData) {
      cartTotal += cartData[i].price * cartData[i].quantity;
    }
    return cartTotal;
}
console.log(cartTotal());
