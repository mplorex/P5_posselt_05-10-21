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
        const row1 = document.createElement('div');

        const imageRow = document.createElement('div')
        const teddyImage = document.createElement('img');

        const col2 = document.createElement('div');
        const detailTitle = document.createElement('h1');
        const detailText1 = document.createElement('p');
        const detailText2 = document.createElement('p');

        const cols2 = document.createElement('div');

        const pBtn = document.createElement('button');

        const buyBtn = document.createElement('button');

        const select = document.createElement('select')
        const selectOption1 = document.createElement('option')

        buyBtn.addEventListener('click', ()=>{
            addToCart(teddies, select.value);
        })

        //text
        pBtn.innerHTML = 'CHECKOUT'
        buyBtn.innerHTML = 'ADD TO CART'
        selectOption1.innerHTML = '--Select a color--'
        
        //classes
        
        cols1.setAttribute('class', 'container' );
        row1.setAttribute('class', 'row m-5');

        imageRow.setAttribute('class', 'col-6')
        teddyImage.setAttribute('class', 'img-fluid img-thumbnail')

        col2.setAttribute('class', 'col-6');
        detailTitle.setAttribute('class', 'title')
        detailText1.setAttribute('class', 'price' )
        detailText2.setAttribute('class', 'description')

        cols2.setAttribute('class', 'col m-1');

        pBtn.setAttribute('class', 'btn btn-primary m-1 text-white');

        buyBtn.setAttribute('class', 'btn btn-primary m-1 text-white');

        select.setAttribute('id', 'color-select')


        //teddy

        teddyImage.src = teddies.imageUrl;
        detailTitle.textContent = teddies.name;
        detailText1.textContent = teddies.description;
        detailText2.textContent = teddies.price;

        // order

        teddy.appendChild(cols1);

        cols1.appendChild(row1)

        row1.appendChild(imageRow);
        row1.appendChild(col2);

        imageRow.appendChild(teddyImage);

        col2.appendChild(detailTitle);
        col2.appendChild(detailText1);
        col2.appendChild(detailText2);
        col2.appendChild(select)
        col2.appendChild(cols2);

        select.appendChild(selectOption1)
        teddies.colors.forEach((element, index) => {
            const selectOption2 = document.createElement('option')
            selectOption2.textContent = element;
            select.appendChild(selectOption2);
        })

        cols2.appendChild(pBtn);

        cols2.appendChild(buyBtn);

        console.log(teddy);
        })
    .catch (error => console.error(error));


    