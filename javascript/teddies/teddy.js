function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const id = getParameterByName('id');

fetch('http://localhost:3000/api/teddies' + id)
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
        const pBtnSpan = document.createElement('span');
        const pBtnSpanI = document.createElement('i');
        const pBtnSpanText = document.createElement('span');

        const col4 = document.createElement('div');
        const buyBtn = document.createElement('button');
        const buyBtnSpan = document.createElement('span');
        const buyBtnSpanI = document.createElement('i');
        const buyBtnSpan2 = document.createElement('span');

        const detailDelivery1 = document.createElement('p');
        const detailDelivery2 = document.createElement('p');


        //text
        pBtnSpanText.innerHTML = 'BUY NOW!';
        buyBtnSpan2.innerHTML = 'ADD TO CART';
        detailDelivery1.innerHTML = 'Standard delivery is 2-5 working days';
        detailDelivery2.innerHTML = 'Next day delivery order is before 2pm ($6.25)';

        //classes

        cols1.setAttribute('class', 'columns' );
        col1.setAttribute('class', 'column');

        ctnImage.setAttribute('class', 'thumbnail-container');
        teddyImage.setAttribute('class', 'drift-demo-trigger');

        col2.setAttribute('class', 'column');
        details.setAttribute('class', 'details');

        cols2.setAttribute('class', 'columns');
        col3.setAttribute('class', 'column');

        pBtn.setAttribute('class', 'button');
        pBtnSpan.setAttribute('class', 'icon is-small');
        pBtnSpanI.setAttribute('class', 'fas fa-heart');

        col4.setAttribute('class', 'column');
        buyBtn.setAttribute('class', 'button');
        buyBtnSpan.setAttribute('class', 'icon is-small');

        detailDelivery1.setAttribute('class', 'small-text');
        detailDelivery2.setAttribute('class', 'small-text');


        //teddy

        teddyImage.src = teddies.imageUrl;
        detailTitle.textContent = teddies.name;
        detailText1.textContent = teddies.description;
        detailText2.textContent = teddies.price;

        // order

        teddy.appendChild(cols1);

        cols1.appendChild(col1);
        cols1.appendChild(col2);
        cols1.appendChild(detailDelivery1);
        cols1.appendChild(detailDelivery2);

        col1.appendChild(ctnImage);
        ctnImage.appendChild(teddyImage);

        col2.appendChild(details);
        details.appendChild(detailTitle);
        details.appendChild(detailText1);
        details.appendChild(detailText2);
        details.appendChild(cols2);

        cols2.appendChild(col3);
        col3.appendChild(pBtn);

        pBtn.appendChild(pBtnSpan);
        pBtnSpan.appendChild(pBtnSpanI);
        pBtn.appendChild(pBtnSpanText);

        cols2.appendChild(col4);
        col4.appendChild(buyBtn);
        buyBtn.appendChild(buyBtnSpan);
        buyBtnSpan.appendChild(buyBtnSpanI);
        buyBtn.appendChild(buyBtnSpan2);

        console.log(teddy);
        })
    .catch (error => console.error(error));


    