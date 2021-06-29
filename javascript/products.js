
const teddies = [
    {
        _id: '5be9c8541c9d440000665243',
        name: 'Norbert',
        price:  29,
        description: 'One of our finest teddies, Norbert brings overwhelmingly comfort and cuteness',
        url: 'teddy_1.jpg' 
    },
    {
        _id: '5beaa8bf1c9d440000a57d94',
        name: 'Arnold',
        price: 39,
        description: 'One of our finest teddies, Arnold brings a sense of boldness and cuteness',
        url: 'teddy_2.jpg' 
    },
    {
        _id: '5beaaa8f1c9d440000a57d95',
        name: 'Lenny and Carl',
        price: 59,
        description: 'One of our finest teddy pairs, personalize for couples gifts!',
        url: 'teddy_3.jpg' 
    },
    {
        _id: '5beaabe91c9d440000a57d96',
        name: 'Gustav',
        price: 45,
        description: 'One of our finest teddies, Gustav brings a sense of classyness to the table.',
        url: 'teddy_4.jpg' 
    },
    {
        _id: '5beaacd41c9d440000a57d97',
        name: 'Garfunkel',
        price: 55,
        description: 'One of our finest teddies, Garfunkel brings peace to all mankind!',
        url: 'teddy_5.jpg' 
    }
]



const teddyList = document.getElementById('teddies')


for (let i = 0; i < teddies.length; i++) {
    console.log(teddies[i]);
    const col = document.createElement('div')
    const card = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('h5')
    const cardText = document.createElement('p')
    const cardPrice = document.createElement('div')
    const cardBtn = document.createElement('a')

    cardBtn.innerHTML = "Buy Now!";

    col.setAttribute('class', 'col-12 col-sm-4 mb-4')
    card.setAttribute('class', 'card')
    cardImg.setAttribute('class', 'card-img-top')
    cardBody.setAttribute('class', 'card-body')
    cardTitle.setAttribute('class', 'card-title')
    cardText.setAttribute('class', 'card-text')
    cardPrice.setAttribute('class', 'card-price')
    cardBtn.setAttribute('class', 'btn btn-primary stretched-link')

    cardImg.src = "/images/" + teddies[i].url 
    cardTitle.textContent = teddies[i].name
    cardText.textContent = teddies [i].description
    cardPrice.textContent = teddies [i].price

    col.appendChild(card)
    card.appendChild(cardImg)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardPrice)
    cardBody.appendChild(cardBtn)
    teddyList.appendChild(col);
}