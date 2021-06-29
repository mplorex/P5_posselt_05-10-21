const nav = document.getElementById('nav')

const bkg = document.createElement('div')
const ctn = document.createElement('div')
const row = document.createElement('div')
const navi = document.createElement('nav')

const img = document.createElement('img')
const btn = document.createElement('button')
const span = document.createElement('span')

const navbar = document.createElement('div')
const navItems = document.createElement('ul')
const navItem1 = document.createElement('li')
const navItem2 = document.createElement('li')
const navItem3 = document.createElement('li')

navItem1.innerHTML = 'Products'
navItem2.innerHTML = 'Cart'
navItem3.innerHTML = 'Contact us'

//classes

bkg.setAttribute ('class', 'bg-light')
ctn.setAttribute('class', 'container')
row.setAttribute('class', 'row')
navi.setAttribute('class', 'col navbar navbar-expand-lg')

btn.setAttribute('class', 'navbar-toggler')
span.setAttribute('class', 'navbar-toggler-icon')

navbar.setAttribute('class', 'collapse navbar-collapse')
navItems.setAttribute('class', 'navbar-nav')
navItem1.setAttribute('class', 'nav-link')
navItem2.setAttribute('class', 'nav-link')
navItem3.setAttribute('class', 'nav-link')


//layering

nav.appendChild(bkg)
bkg.appendChild(ctn)
ctn.appendChild(row)
row.appendChild(navi)
navi.appendChild(img)
navi.appendChild(btn)
btn.appendChild(span)
navi.appendChild(navbar)
navbar.appendChild(navItems)
navItems.appendChild(navItem1)
navItems.appendChild(navItem2)
navItems.appendChild(navItem3)

console.log(nav);