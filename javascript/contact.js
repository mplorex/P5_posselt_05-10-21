const contact = document.getElementById('contact')

const cRow = document.createElement('div')
const cContainer = document.createElement('div')

const cHeader = document.createElement('div')
const cHeaderTitle = document.createElement('h5')

const cForm = document.createElement('form')
const cFormInput = document.createElement('input')
const cFormGroupA = document.createElement('div')
const cFormGroupAInput = document.createElement('input')
const cFormGroupB = document.createElement('div')
const cFormGroupBInput = document.createElement('input')
const cFormGroupC = document.createElement('div')
const cFormGroupCInput = document.createElement('input')
const cFormGroupD = document.createElement('div')
const cFormGroupDInput = document.createElement('textarea')

const cFormBtn = document.createElement('div')
const cFormButton = document.createElement('button')

cHeaderTitle.innerHTML = 'CONTACT US'
cFormButton.innerHTML = 'CONTACT US'

//classes

cRow.setAttribute('class', 'row')
cContainer.setAttribute('class', 'col-sm-8 col-sm-offset-2')

cForm.setAttribute('method', 'post')
cForm.setAttribute('data-form-title', 'CONTACT US')
cFormInput.setAttribute('type', 'hidden')
cFormInput.setAttribute('data-form-email', 'true')
cFormGroupA.setAttribute('class', 'form-group')
cFormGroupAInput.setAttribute('type', 'text')
cFormGroupAInput.setAttribute('class', 'form-control')
cFormGroupAInput.setAttribute('name', 'name')
cFormGroupAInput.setAttribute('placeholder', 'Name')
cFormGroupAInput.setAttribute('data-form-field', 'Name')

cFormGroupB.setAttribute('class', 'form-group')
cFormGroupBInput.setAttribute('type', 'email')
cFormGroupBInput.setAttribute('class', 'form-control')
cFormGroupBInput.setAttribute('name', 'email')
cFormGroupBInput.setAttribute('placeholder', 'Email')
cFormGroupBInput.setAttribute('data-form-field', 'Email')

cFormGroupC.setAttribute('class', 'form-group')
cFormGroupCInput.setAttribute('type', 'tel')
cFormGroupCInput.setAttribute('class', 'form-control')
cFormGroupCInput.setAttribute('name', 'phone')
cFormGroupCInput.setAttribute('placeholder', 'Phone')
cFormGroupCInput.setAttribute('data-form-field', 'Phone')

cFormGroupD.setAttribute('class', 'form-group')
cFormGroupDInput.setAttribute('class', 'form-control')
cFormGroupDInput.setAttribute('name', 'message')
cFormGroupDInput.setAttribute('placeholder', 'Message')
cFormGroupDInput.setAttribute('rows', '6')
cFormGroupDInput.setAttribute('data-form-field', 'Message')

cFormButton.setAttribute('type', 'submit')
cFormButton.setAttribute('class', 'btn btn-lg btn-danger')

contact.appendChild(cRow)
cRow.appendChild(cContainer)
cContainer.appendChild(cHeader)
cHeader.appendChild(cHeaderTitle)
cContainer.appendChild(cForm)
cForm.appendChild(cFormInput)
cForm.appendChild(cFormGroupA)
cFormGroupA.appendChild(cFormGroupAInput)
cForm.appendChild(cFormGroupB)
cFormGroupB.appendChild(cFormGroupBInput)
cForm.appendChild(cFormGroupC)
cFormGroupC.appendChild(cFormGroupCInput)
cForm.appendChild(cFormGroupD)
cFormGroupD.appendChild(cFormGroupDInput)
cForm.appendChild(cFormBtn)
cFormBtn.appendChild(cFormButton)


console.log(contact);


