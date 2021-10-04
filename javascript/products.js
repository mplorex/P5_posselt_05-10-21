fetch('http://localhost:3000/api/teddies')
.then(response => {
            return response.json();
        })
        .then(teddies => {
        const teddyList = document.getElementById('teddies');
        for (let i = 0; i < teddies.length; i++) {
            console.log(teddies[i]);
                const productsContainer = document.createElement('div')
                const column = document.createElement('div');
                const card = document.createElement('div');
                const cardImage = document.createElement('img');
                const cardBody = document.createElement('div');
                const cardTitle = document.createElement('h5');
                const cardText = document.createElement('p');
                const cardPrice = document.createElement('div');
                const cardButton = document.createElement('a');

                cardButton.innerHTML = "Buy Now!";

                productsContainer.setAttribute('class', 'row')
                productsContainer.setAttribute('id', 'container')
                column.setAttribute('class', 'col col-12 col-md-4 p-3');
                card.setAttribute('class', 'card');
                card.setAttribute('id', 'card')
                cardImage.setAttribute('class', 'card-img-top img-thumbnail');
                cardBody.setAttribute('class', 'card-body');
                cardTitle.setAttribute('class', 'card-title');
                cardText.setAttribute('class', 'card-text');
                cardPrice.setAttribute('class', 'card-price');
                cardButton.setAttribute('class', 'btn btn-tertiary btn-large text-white stretched-link');


                cardButton.setAttribute('href', './teddy.html?id=' + teddies[i]._id)

                cardImage.src = teddies[i].imageUrl ;
                cardTitle.textContent = teddies[i].name;
                cardText.textContent = teddies [i].description;
                cardPrice.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(teddies[i].price);


                productsContainer.appendChild(column)
                column.appendChild(card);
                card.appendChild(cardImage);
                card.appendChild(cardBody);
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardPrice);
                cardBody.appendChild(cardButton);
                teddyList.appendChild(column);

    }
})
.catch (error => console.error(error));

const colStyle = document.getElementById('teddies');

colStyle.style.display = "flex";
colStyle.style.justifyContent = "center";

console.log(colStyle)