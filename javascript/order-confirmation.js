const teddyData = JSON.parse(localStorage.getItem('cartData'));
const userInfo = JSON.parse(localStorage.getItem('userInfo'));
console.log(teddyData);
console.log(userInfo)



if(teddyData.length!=0){
    const userData = document.getElementById('user-info')

    userData.setAttribute('class', 'container')

    const userOrderId = document.createElement('h2')
    userOrderId.setAttribute('id', 'order-id')
    userOrderId.innerHTML = 'order Id:' + orderUUID();
    userData.append(userOrderId);

    const userInfoTitle = document.createElement('h2');
    userInfoTitle.innerHTML = 'Thank you for your purchase!';
    userData.append(userInfoTitle);

    const userBody = document.createElement('table');
    const userBodyHead = document.createElement('thead')

    userData.append(userBody);
    userBody.append(userBodyHead);

    const userNameRow = document.createElement('tr');
    const firstNameLabel = document.createElement('th');
    const firstNameValue = document.createElement('th');
    firstNameLabel.innerHTML = 'First name:  ';
    firstNameValue.innerHTML = userInfo.firstName;

    userBodyHead.append(userNameRow);
    userNameRow.append(firstNameLabel);
    userNameRow.append(firstNameValue);

    const lastNameRow = document.createElement('tr');
    const lastNameLabel = document.createElement('th');
    const lastNameValue = document.createElement('th');
    lastNameLabel.innerHTML = 'Last name:  ';
    lastNameValue.innerHTML = userInfo.lastName;

    userBodyHead.append(lastNameRow);
    lastNameRow.append(lastNameLabel);
    lastNameRow.append(lastNameValue);

    const emailRow = document.createElement('tr');
    const emailLabel = document.createElement('th');
    const emailValue = document.createElement('th');
    emailLabel.innerHTML = 'Email:  ';
    emailValue.innerHTML = userInfo.email;

    userBodyHead.append(emailRow);
    emailRow.append(emailLabel);
    emailRow.append(emailValue);

    const addressRow = document.createElement('tr');
    const addressLabel = document.createElement('th');
    const addressValue = document.createElement('th');
    addressLabel.innerHTML = 'Address:  ';
    addressValue.innerHTML = userInfo.address;

    userBodyHead.append(addressRow);
    addressRow.append(addressLabel);
    addressRow.append(addressValue);

    const cityRow = document.createElement('tr');
    const cityLabel = document.createElement('th');
    const cityValue = document.createElement('th');
    cityLabel.innerHTML = 'City:  ';
    cityValue.innerHTML = userInfo.city;

    userBodyHead.append(cityRow);
    cityRow.append(cityLabel);
    cityRow.append(cityValue);
    

    const cartData = document.getElementById('cart-data');

    cartData.setAttribute('class', 'container')

    const orderDetails = document.createElement('h2');
    orderDetails.innerHTML="Your purchase details";
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
    cartOrderTotal.setAttribute('class', 'container')
    const totalrow = document.createElement('label');
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

//

//import cart data
const cart = [
	{
		_id: '12345'
	},
	{
		_id: '12345'
	}
]

let products = []
for (let i = 0; i < cart.length; i++ ){
	products.push(cart[i]._id, cart[i].name, cart[i].colors, cart[i].price, cart[i].quantity)
}
const info = {
	contact: {
		firstName:          form.get('firstName'),
    lastName: 
    form.get('lastName'),
    email: 
    form.get('address'),
    address: 
    form.get('address'),
    city:
    form.get('city')
	},
	products: products
}

// Default options are marked with *
fetch('http://localhost:3000/order', {
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(info) 
})
	.then(response => response.json())
	.then(data => {
		cartBody =  JSON.parse(localStorage.setItem('cartData'))
		
	})
	.catch(error => console.error(error))