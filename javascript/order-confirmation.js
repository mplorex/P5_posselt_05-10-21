const teddyData = JSON.parse(localStorage.getItem('cartData'));
console.log(teddyData);

if(teddyData.length!=0){
    const cartData = document.getElementById('cart-data');

    const orderDetails = document.createElement('h2');
    orderDetails.innerHTML="Your purchase info";
    orderDetails.setAttribute('class', 'mgnscss')
    cartData.appendChild(orderDetails);
    
    const cartTable = document.createElement('table');
    const cartThead = document.createElement('thead');
    
    const cartRow = document.createElement('tr');
    const cartRowTitle = document.createElement('th');
    const cartRowColor = document.createElement('th');
    const cartRowPrice = document.createElement('th');
    const cartRowQuantity = document.createElement('th');
    
    const cartBody = document.createElement('tbody');
    
    cartRowTitle.innerHTML = 'Name';
    cartRowColor.innerHTML = 'Color';
    cartRowPrice.innerHTML = 'Price';
    cartRowQuantity.innerHTML = 'Quantity';
    
    cartData.appendChild(cartTable)
    
    cartTable.appendChild(cartThead)
    cartTable.appendChild(cartBody)
    
    cartThead.appendChild(cartRow)
    cartRow.appendChild(cartRowTitle)
    cartRow.appendChild(cartRowColor)
    cartRow.appendChild(cartRowPrice)
    cartRow.appendChild(cartRowQuantity)
    
    
    teddyData.forEach((teddy) => {
        const cartBodyRow = document.createElement('tr');
        const cartBodyRowHeader = document.createElement('th');
        const cartBodyRowColor = document.createElement('td');
        const cartBodyRowPrice = document.createElement('td');
        const cartBodyRowQuantity = document.createElement('td');
        const cartBodyRowTotal = document.createElement('td');
    
        cartTable.setAttribute('class', 'table container')
        cartRowTitle.setAttribute('scope', 'col')
        cartRowColor.setAttribute('scope', 'col')
        cartRowPrice.setAttribute('scope', 'col')
        cartRowQuantity.setAttribute('scope', 'col')
        cartBodyRowHeader.setAttribute('scope', 'row')
    
        cartBodyRowHeader.textContent = teddy.name;
        cartBodyRowColor.textContent = teddy.colors;
        cartBodyRowPrice.textContent = teddy.price;
        cartBodyRowQuantity.textContent = teddy.quantity;
    
        cartBody.appendChild(cartBodyRow)
        cartBodyRow.appendChild(cartBodyRowHeader)
        cartBodyRow.appendChild(cartBodyRowColor)
        cartBodyRow.appendChild(cartBodyRowPrice)
        cartBodyRow.appendChild(cartBodyRowQuantity)
        cartBodyRow.appendChild(cartBodyRowTotal)
    });
    
    const cartOrderTotal= document.getElementById('cart-total');
    const totalrow = document.createElement('label');
    totalrow.setAttribute('class', 'mgnscsstotal')
    totalrow.innerHTML = "<b>Total: </b>"+ new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(cartTotal());
    cartOrderTotal.append(totalrow);
}
function cartTotal(){
    let cartTotal = 0;
    for(let i in teddyData) {
      cartTotal += teddyData[i].price * teddyData[i].quantity;
    }
    emptycart();
    return cartTotal;
}

function emptycart()
{
        teddyme = [];
        localStorage.setItem('cartData', JSON.stringify());      
        localStorage.setItem('cartData', JSON.stringify(teddyme));

    
}