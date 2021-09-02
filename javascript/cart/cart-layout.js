

const teddyData = JSON.parse(localStorage.getItem("cartData"));

const cart = document.getElementById('cart')

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

cart.appendChild(cartTable)

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

    cartTable.setAttribute('class', 'table')
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

console.log(teddyData)


