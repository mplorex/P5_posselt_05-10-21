

//import cart data
const cart = [
	{
		_id: '12345'
	},
	{
		_id: '12345'
	}
] 

const cart = []

let products = []
for (let i = 0; i < cart.length; i++ ){
	products.push(cart[i]._id)
}
const info = {
	contact: {
		first:         
    userInfo.firstName,
    last: 
    userInfo.lastName,
    email: 
    userInfo.address,
    address: 
    userInfo.address,
    city:
    userInfo.city
	},
	products: products
}

// Default options are marked with *
fetch('http://localhost:3000/api/teddies/', {
	method: 'POST', 
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
