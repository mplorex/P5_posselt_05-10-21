fetch(​"http://localhost:3000/api/teddies")
.then(response => {
    return response.json()
})
.then(teddies => {
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
})
.catch (error => console.error(error)) 
