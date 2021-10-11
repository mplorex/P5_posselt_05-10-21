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

        const teddyContainer = document.createElement('div');
        const teddyRow = document.createElement('div');

        const imageColumn = document.createElement('div')
        const teddyImage = document.createElement('img');

        const textColumn = document.createElement('div');
        const columnTitle = document.createElement('h1');
        const columnText1 = document.createElement('p');
        const columnText2 = document.createElement('p');

        const buttons = document.createElement('div');

        const checkoutButton = document.createElement('button');
        const checkoutButtonA = document.createElement('a')

        const addToCartButton = document.createElement('button');

        const colorSelect = document.createElement('select')
        const colorSelectOption1 = document.createElement('option')

        addToCartButton.addEventListener('click', ()=>{
            addToCart(teddies, colorSelect.value);
        })

        //text
        checkoutButton.innerHTML = 'CHECKOUT'
        addToCartButton.innerHTML = 'ADD TO CART'
        colorSelectOption1.innerHTML = '--Select a color--'
        
        //classes
        
        teddyContainer.setAttribute('class', 'container' );
        teddyRow.setAttribute('class', 'row m-5');

        imageColumn.setAttribute('class', 'col-6')
        teddyImage.setAttribute('class', 'img-fluid img-thumbnail')

        textColumn.setAttribute('class', 'col-6');
        columnTitle.setAttribute('class', 'title')
        columnText1.setAttribute('class', 'price' )
        columnText2.setAttribute('class', 'description')

        buttons.setAttribute('class', 'col m-1');

        checkoutButton.setAttribute('class', 'btn btn-primary m-1 text-white');
        checkoutButtonA.setAttribute('href', 'cart.html');

        addToCartButton.setAttribute('class', 'btn btn-primary m-1 text-white');

        colorSelect.setAttribute('id', 'color-select')
        colorSelect.setAttribute('class', 'form-select')
        colorSelect.setAttribute('aria-label', 'Default select example')


        //teddy

        teddyImage.src = teddies.imageUrl;
        columnTitle.textContent = teddies.name;
        columnText1.textContent = teddies.description;
        columnText2.textContent = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(teddies.price);

        // order

        teddy.appendChild(teddyContainer);

        teddyContainer.appendChild(teddyRow)

        teddyRow.appendChild(imageColumn);
        teddyRow.appendChild(textColumn);

        imageColumn.appendChild(teddyImage);

        textColumn.appendChild(columnTitle);
        textColumn.appendChild(columnText1);
        textColumn.appendChild(columnText2);
        textColumn.appendChild(colorSelect)
        textColumn.appendChild(buttons);

        colorSelect.appendChild(colorSelectOption1)
        teddies.colors.forEach((element, index) => {
            const colorSelectOption2 = document.createElement('option')
            colorSelectOption2.textContent = element;
            colorSelect.appendChild(colorSelectOption2);
        })

        buttons.appendChild(checkoutButtonA);
        checkoutButtonA.appendChild(checkoutButton);

        buttons.appendChild(addToCartButton);

        console.log(teddy);
        })
    .catch (error => console.error(error));


    