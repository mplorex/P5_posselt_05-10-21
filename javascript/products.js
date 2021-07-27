fetch('http://localhost:3000/api/teddies')
.then(response => {
        return response.json();
    })
    .then(teddies => {
        const teddyList = document.getElementById('teddies');
        for (let i = 0; i < teddies.length; i++) {
            console.log(teddies[i]);
            const ctn = document.createElement('div')
            const col = document.createElement('div');
            const card = document.createElement('div');
            const cardImg = document.createElement('img');
            const cardBody = document.createElement('div');
            const cardTitle = document.createElement('h5');
            const cardText = document.createElement('p');
            const cardPrice = document.createElement('div');
            const cardBtn = document.createElement('a');
    
            cardBtn.innerHTML = "Buy Now!";
    
            ctn.setAttribute('class', 'container')
            ctn.setAttribute('id', 'container')
            col.setAttribute('class', 'col col-12 col-sm-4 mb-4');
            card.setAttribute('class', 'card');
            card.setAttribute('id', 'card')
            cardImg.setAttribute('class', 'card-img-top');
            cardBody.setAttribute('class', 'card-body');
            cardTitle.setAttribute('class', 'card-title');
            cardText.setAttribute('class', 'card-text');
            cardPrice.setAttribute('class', 'card-price');
            cardBtn.setAttribute('class', 'btn btn-primary btn-large text-white stretched-link');


            cardBtn.setAttribute('href', './teddy.html?id=' + teddies[i]._id)
    
            cardImg.src = teddies[i].imageUrl ;
            cardTitle.textContent = teddies[i].name;
            cardText.textContent = teddies [i].description;
            cardPrice.textContent = teddies [i].price;

    
            ctn.appendChild(col)
            col.appendChild(card);
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardPrice);
            cardBody.appendChild(cardBtn);
            teddyList.appendChild(col);
        }
    })
    .catch (error => console.error(error));

    const colStyle = document.getElementById('teddies');

    colStyle.style.display = "flex";
    colStyle.style.justifyContent = "center";
    
    console.log(colStyle)