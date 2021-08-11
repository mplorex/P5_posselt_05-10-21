function getParameterByName (name) {
    const paramsString = window.location.search
    const searchParams = new URLSearchParams(paramsString)

    return searchParams.get(name)
}

const id = getParameterByName('id');

fetch('http://localhost:3000/api/teddies/' + id)
.then(response => {
    return response.json();
    })
    .then(teddies => { 
        console.log(teddies); 

        const teddy = document.getElementById('teddy');

        const cols1 = document.createElement('div');
        const col1 = document.createElement('div');

        const ctnImage = document.createElement('div');
        const teddyImage = document.createElement('img');

        const col2 = document.createElement('div');
        const details = document.createElement('div');
        const detailTitle = document.createElement('h1');
        const detailText1 = document.createElement('p');
        const detailText2 = document.createElement('p');

        const cols2 = document.createElement('div');
        const col3 = document.createElement('div');

        const pBtn = document.createElement('button');
        const pBtnA = document.createElement('a')
        const pBtnSpan = document.createElement('span');
        const pBtnSpanI = document.createElement('i');

        const col4 = document.createElement('div');
        const buyBtn = document.createElement('button');
        const BuyBtnA = document.createElement('a');
        const buyBtnSpan = document.createElement('span');
        const buyBtnSpanI = document.createElement('i');

        const select = document.createElement('select')
        const selectOption1 = document.createElement('option')

        buyBtn.addEventListener('click', ()=>{
            addToCart(teddies);
        })

        //text
        pBtnSpanI.innerHTML = 'CHECKOUT'
        buyBtnSpanI.innerHTML = 'ADD TO CART'
        selectOption1.innerHTML = '--Select a color--'
        
        //classes
        
        cols1.setAttribute('class', 'columns' );
        col1.setAttribute('class', 'column');

        ctnImage.setAttribute('id', 'ctnImage')
        teddyImage.setAttribute('class', 'img-thumbnail');

        col2.setAttribute('class', 'column');
        details.setAttribute('class', 'details');
        detailTitle.setAttribute('class', 'title')
        detailText1.setAttribute('class', 'price' )
        detailText2.setAttribute('class', 'description')



        cols2.setAttribute('class', 'columns');
        col3.setAttribute('class', 'column');
        col3.setAttribute('id', 'wishlist-container')

        pBtn.setAttribute('class', 'button');
        pBtnA.setAttribute('href', 'cart.html')
        pBtnSpan.setAttribute('class', 'icon is-small');
        pBtnSpanI.setAttribute('class', 'fas fa-heart');

        col4.setAttribute('class', 'column');
        col4.setAttribute('id', 'buy-container')
        buyBtn.setAttribute('class', 'button buy-button');
        BuyBtnA.setAttribute('class', 'add-cart')
        buyBtnSpan.setAttribute('class', 'icon is-small');
        buyBtnSpanI.setAttribute('class', 'fas fa-shopping-bag')

        select.setAttribute('id', 'color-select')


        //teddy

        teddyImage.src = teddies.imageUrl;
        detailTitle.textContent = teddies.name;
        detailText1.textContent = teddies.description;
        detailText2.textContent = teddies.price;

        // order

        teddy.appendChild(cols1);

        cols1.appendChild(col1);
        cols1.appendChild(col2);

        col1.appendChild(ctnImage);
        ctnImage.appendChild(teddyImage);

        col2.appendChild(details);
        details.appendChild(detailTitle);
        details.appendChild(detailText1);
        details.appendChild(detailText2);
        details.appendChild(select)
        details.appendChild(cols2);

        select.appendChild(selectOption1)
        teddies.colors.forEach((element, index) => {
            const selectOption2 = document.createElement('option')
            selectOption2.textContent = element;
            select.appendChild(selectOption2);
        })

        cols2.appendChild(col3);
        col3.appendChild(pBtn);

        pBtn.appendChild(pBtnA);
        pBtnA.appendChild(pBtnSpan)
        pBtnSpan.appendChild(pBtnSpanI);

        cols2.appendChild(col4);
        col4.appendChild(BuyBtnA);
        BuyBtnA.appendChild(buyBtn)
        buyBtn.appendChild(buyBtnSpan);
        buyBtnSpan.appendChild(buyBtnSpanI);

        console.log(teddy);
        })
    .catch (error => console.error(error));


    