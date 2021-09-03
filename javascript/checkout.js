const formCheckout = document.getElementById('checkout');

const checkoutCtn = document.createElement('div');

const checkoutCol = document.createElement('div');
const checkoutHeader = document.createElement('h4');
const checkForm = document.createElement('form');

const formRow = document.createElement('div');

const formColFirst = document.createElement('div');
const formLabelFirst = document.createElement('label');
const formInputFirst = document.createElement('input');
const formFeedbackFirst = document.createElement('div');

const formColLast = document.createElement('div');
const formLabelLast = document.createElement('label');
const formInputLast = document.createElement('input');
const formFeedbackLast = document.createElement('div')

const formEmail = document.createElement('div');
const formLabelEmail = document.createElement('label');
const formLabelSpan = document.createElement('span');
const formInputEmail = document.createElement('input');
const formFeedbackEmail = document.createElement('div');

const formAddress = document.createElement('div');
const formLabelAddress = document.createElement('label');
const formInputAddress = document.createElement('input');
const formFeedbackAddress = document.createElement('div');

const formRowCity = document.createElement('div');
const formColCity = document.createElement('div');
const formLabelCity = document.createElement('label');
const formInputCity = document.createElement('input');
const formFeedbackCity = document.createElement('div');
const formColZip = document.createElement('div');
const formLabelZip = document.createElement('label');
const formInputZip = document.createElement('input');
const formFeedbackZip = document.createElement('div');

const formLinebreak = document.createElement('hr');
const formButton = document.createElement('button');

checkoutHeader.innerHTML = 'Billing Address';
formLabelFirst.innerHTML = 'First name';
formFeedbackFirst.innerHTML = 'Valid first name is required';
formLabelLast.innerHTML = 'Last name';
formFeedbackLast.innerHTML = 'Valid last name is required';
formLabelEmail.innerHTML = 'Email';
formFeedbackEmail.innerHTML = 'Valid email is required';
formLabelAddress.innerHTML = 'Address';
formFeedbackAddress.innerHTML = 'Please enter a valid address';
formLabelCity.innerHTML = 'City';
formFeedbackCity.innerHTML = 'Please enter a valid city';
formLabelZip.innerHTML = 'Zipcode';
formFeedbackZip.innerHTML = 'Please enter a valid zipcode';
formButton.innerHTML = 'SUBMIT ORDER'

checkoutCtn.setAttribute('class', 'container');

checkoutCol.setAttribute('class', 'col-md-8 order-md-1');
checkoutHeader.setAttribute('class', 'mb-3');
checkForm.setAttribute('class', 'needs-validation');

formRow.setAttribute('class', 'row');

formColFirst.setAttribute('class', 'col-md-6 mb-3');
formLabelFirst.setAttribute('for', 'firstName');
formInputFirst.setAttribute('type', 'text');
formInputFirst.setAttribute('class', 'form-control');
formInputFirst.setAttribute('id', 'firstName');
formInputFirst.setAttribute('placeholder', 'Bob')
formInputFirst.required = true;
formFeedbackFirst.setAttribute('class', 'invalid-feedback');

formColLast.setAttribute('class', 'col-md-6 mb-3');
formLabelLast.setAttribute('for', 'lastName');
formInputLast.setAttribute('type', 'text');
formInputLast.setAttribute('class', 'form-control');
formInputLast.setAttribute('id', 'lastName');
formInputLast.setAttribute('placeholder', 'Smith')
formFeedbackLast.setAttribute('class', 'invalid-feedback')

formEmail.setAttribute('class', 'mb-3');
formLabelEmail.setAttribute('for', 'email')
formLabelSpan.setAttribute('class', 'text-muted');
formInputEmail.setAttribute('type', 'email')
formInputEmail.setAttribute('class', 'form-control')
formInputEmail.setAttribute('id', 'email')
formInputEmail.setAttribute('placeholder', 'fred@example.com')
formFeedbackEmail.setAttribute('class', 'invalid-feedback')

formAddress.setAttribute('class', 'mb-3');
formLabelAddress.setAttribute('for', 'address');
formInputAddress.setAttribute('type', 'text');
formInputAddress.setAttribute('class', 'form-control');
formInputAddress.setAttribute('id', 'address');
formInputAddress.setAttribute('placeholder', '246 Center St.');
formFeedbackAddress.setAttribute('class', 'invalid-feedback');

formRowCity.setAttribute('class', 'row');
formColCity.setAttribute('class', 'col-md-4 mb-3');
formLabelCity.setAttribute('for', 'city');
formInputCity.setAttribute('type', 'text');
formInputCity.setAttribute('class', 'form-control');
formInputCity.setAttribute('id', 'city');
formInputCity.setAttribute('placeholder', 'Miami')
formFeedbackCity.setAttribute('class', 'invalid-feedback');
formColZip.setAttribute('class', 'col-md-3 mb-3');
formLabelZip.setAttribute('for', 'zipcode');
formInputZip.setAttribute('type', 'text');
formInputZip.setAttribute('class', 'form-control');
formInputZip.setAttribute('id', 'zipcode');
formInputZip.setAttribute('placeholder', '86657')
formFeedbackZip.setAttribute('class', 'invalid-feedback');

formButton.setAttribute('class', 'btn-primary btn-lg btn-block text-white');
formButton.setAttribute('type' ,'submit');

formCheckout.appendChild(checkoutCtn);

checkoutCtn.appendChild(checkoutCol);
checkoutCol.appendChild(checkoutHeader);
checkoutCol.appendChild(checkForm);

checkForm.appendChild(formRow);
formRow.appendChild(formColFirst);
formColFirst.appendChild(formLabelFirst);
formColFirst.appendChild(formInputFirst);
formColFirst.appendChild(formFeedbackFirst);

formRow.appendChild(formColLast);
formColLast.appendChild(formLabelLast);
formColLast.appendChild(formInputLast);
formColLast.appendChild(formFeedbackLast);

checkForm.appendChild(formEmail);
formEmail.appendChild(formLabelEmail);
formEmail.appendChild(formInputEmail);
formEmail.appendChild(formFeedbackEmail);

checkForm.appendChild(formAddress);
formAddress.appendChild(formLabelAddress);
formAddress.appendChild(formInputAddress);
formAddress.appendChild(formFeedbackAddress);

checkForm.appendChild(formRowCity);
formRowCity.appendChild(formColCity);
formColCity.appendChild(formLabelCity);
formColCity.appendChild(formInputCity);
formColCity.appendChild(formFeedbackCity);

formRowCity.appendChild(formColZip);
formColZip.appendChild(formLabelZip);
formColZip.appendChild(formInputZip);
formColZip.appendChild(formFeedbackZip);
formRowCity.appendChild(formLinebreak)

checkForm.appendChild(formButton);

console.log(checkForm);



