let cartData = [];

if (localStorage.getItem("cartData")){
    cartData = JSON.parse(localStorage.getItem("cartData"));
}

var formMain = document.getElementById('form');

const formContainer = document.createElement('div');
const formCheckout = document.createElement('form');
const formColFirst = document.createElement('div');
const formLabelFirst = document.createElement('label');
const formInputFirst = document.createElement('input');
const formFeedbackFirst = document.createElement('div');
const formColLast = document.createElement('div');
const formLabelLast = document.createElement('label');
const formInputLast = document.createElement('input');
const formFeedbackLast = document.createElement('div');
const formColEmail = document.createElement('div');
const formLabelEmail = document.createElement('label');
const formInputEmail = document.createElement('input');
const formSpanEmail = document.createElement('span')
const formFeedbackEmail = document.createElement('div');
const formColAddress = document.createElement('div');
const formLabelAddress = document.createElement('label');
const formInputAddress = document.createElement('input');
const formFeedbackAddress = document.createElement('div');
const formColCity = document.createElement('div');
const formLabelCity = document.createElement('label');
const formInputCity = document.createElement('input');
const formFeedbackCity = document.createElement('div');
const formColBtn = document.createElement('div');
const formColBtnA = document.createElement('a');
const formColBtnPrimary = document.createElement('button');
const formTotal = document.createElement('div');


formLabelFirst.innerHTML = 'First name';
formFeedbackFirst.innerHTML = 'looks great!';
formLabelLast.innerHTML = 'Last name';
formFeedbackLast.innerHTML = 'looks great!';
formLabelEmail.innerHTML = 'E-mail';
formFeedbackEmail.innerHTML = 'looks great!';
formLabelAddress.innerHTML = 'Address';
formFeedbackAddress.innerHTML = 'looks great!';
formLabelCity.innerHTML = 'City';
formFeedbackCity.innerHTML = 'looks great!';
formColBtnPrimary.innerHTML = 'Submit order';
formTotal.innerHTML = '<b>Total: </b>' + new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(cartTotal());



formContainer.setAttribute('class', 'container');
formCheckout.setAttribute('id', 'checkout');
formCheckout.setAttribute('class', 'row g-3 needs-validation');
formCheckout.noValidate = false;
formColFirst.setAttribute('class', 'col-md-4');
formLabelFirst.setAttribute('for', 'validationCustom01');
formLabelFirst.setAttribute('class', 'form-label');
formInputFirst.setAttribute('name', 'firstName');
formInputFirst.setAttribute('type', 'text');
formInputFirst.required = true;
formInputFirst.setAttribute('class', 'form-control');
formInputFirst.setAttribute('id', 'validationCustom01');
formFeedbackFirst.setAttribute('class', 'valid-feedback');


formColLast.setAttribute('class', 'col-md-4');
formLabelLast.setAttribute('for', 'validationCustom02');
formLabelLast.setAttribute('class', 'form-label');
formInputLast.setAttribute('name', 'lastName');
formInputLast.setAttribute('type', 'text');
formInputLast.required = true;
formInputLast.setAttribute('class', 'form-control');
formInputLast.setAttribute('id', 'validationCustom02');
formFeedbackLast.setAttribute('class', 'valid-feedback');


formColEmail.setAttribute('class', 'col-md-4 input-box');
formLabelEmail.setAttribute('for', 'validationCustom03');
formLabelEmail.setAttribute('class', 'form-label');
formInputEmail.setAttribute('type', 'email')
formInputEmail.setAttribute('name', 'email');
formInputEmail.setAttribute('onkeydown', 'validation()')
formInputEmail.required = false;
formInputEmail.setAttribute('class', 'form-control');
formInputEmail.setAttribute('id', 'validationCustom03');
formSpanEmail.setAttribute('id', 'text')
formFeedbackEmail.setAttribute('class', 'valid-feedback');


formColAddress.setAttribute('class', 'col-md-4');
formLabelAddress.setAttribute('for', 'validationCustom04');
formLabelAddress.setAttribute('class', 'form-label');
formInputAddress.setAttribute('name', 'address');
formInputAddress.setAttribute('type', 'text');
formInputAddress.required = true;
formInputAddress.setAttribute('class', 'form-control');
formInputAddress.setAttribute('id', 'validationCustom04');
formFeedbackAddress.setAttribute('class', 'valid-feedback');


formColCity.setAttribute('class', 'col-md-4');
formLabelCity.setAttribute('for', 'validationCustom05');
formLabelCity.setAttribute('class', 'form-label');
formInputCity.setAttribute('name', 'city');
formInputCity.setAttribute('type', 'text');
formInputCity.required = true;
formInputCity.setAttribute('class', 'form-control');
formInputCity.setAttribute('id', 'validationCustom05');
formFeedbackCity.setAttribute('class', 'valid-feedback');
formColBtn.setAttribute('class', 'col-12');
formColBtnA.setAttribute('href', 'checkout-order.html')
formColBtnPrimary.setAttribute('class', 'btn btn-primary');

formMain.appendChild(formContainer);

formContainer.appendChild(formCheckout);
formCheckout.appendChild(formColFirst);
formColFirst.appendChild(formLabelFirst);
formColFirst.appendChild(formInputFirst);
formColFirst.appendChild(formFeedbackFirst);
formCheckout.appendChild(formColLast);
formColLast.appendChild(formLabelLast);
formColLast.appendChild(formInputLast);
formColLast.appendChild(formFeedbackLast);

formCheckout.appendChild(formColEmail);
formColEmail.appendChild(formLabelEmail);
formColEmail.appendChild(formInputEmail);
formInputEmail.appendChild(formSpanEmail);
formColEmail.appendChild(formFeedbackEmail);

formCheckout.appendChild(formColAddress);
formColAddress.appendChild(formLabelAddress);
formColAddress.appendChild(formInputAddress);
formColAddress.appendChild(formFeedbackAddress);

formCheckout.appendChild(formColCity);
formColCity.appendChild(formLabelCity);
formColCity.appendChild(formInputCity);
formColCity.appendChild(formFeedbackCity);

formCheckout.appendChild(formTotal)

formCheckout.appendChild(formColBtnA);
formColBtnA.appendChild(formColBtn);
formColBtn.appendChild(formColBtnPrimary);


const form = document.getElementById('checkout')
let userInfo = [];
form.addEventListener('submit', function (event) {
	event.preventDefault()
	if (!form.checkValidity()) {
		event.stopPropagation()
	}
	
	const formData = new FormData(form)
	
	const products = []
	for (let i = 0; i < cartData.length; i++ ){

		products.push(cartData[i]._id)
	}


	
	const info = {
	    firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
	    address: formData.get('address'),
        city: formData.get('city')
    
	}
	localStorage.setItem('userInfo', JSON.stringify(info));

	fetch('http://localhost:3000/api/teddies/order', {
		method: 'POST', 
		headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		contact: info,
		products: products,

	})})
	.then(response => response.json())
	.then(data => {
		console.log(data)
		//cartBody =  JSON.parse(localStorage.setItem('cartData'))
	})
	.catch(error => console.error(error))


	//send data to backend
	console.log(info)
	//location.href='order-confirmation.html';
	form.classList.add('was-validated')
}, false)

function addInfo (data) {
	info.push(data)
	
}

function cartTotal(){
    let cartTotal = 0;
    for(let i in cartData) {
      cartTotal += cartData[i].price * cartData[i].quantity;
    }
    return cartTotal;
}
console.log(cartTotal());