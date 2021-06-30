const nav = document.getElementById('nav')

const bkg = document.createElement('div')
const ctn = document.createElement('div')
const row = document.createElement('div')
const navi = document.createElement('nav')

const logoImg = document.createElement('img')
const btn = document.createElement('button')
const span = document.createElement('span')

const navbar = document.createElement('div')
const navItems = document.createElement('ul')
const navItem1 = document.createElement('li')
const navItem1A = document.createElement('a')
const navItem2 = document.createElement('li')
const navItem2A = document.createElement('a')
const navItem3 = document.createElement('li')
const navItem3A = document.createElement('a')

navItem1A.innerHTML = 'Products'
navItem2A.innerHTML = 'Cart'
navItem3A.innerHTML = 'Contact us'

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
navItem1A.setAttribute('href', 'index.html')
navItem2.setAttribute('class', 'nav-link')
navItem2A.setAttribute('href', 'cart.html')
navItem3.setAttribute('class', 'nav-link')
navItem3A.setAttribute('href', 'contact.html')

logoImg.src = './images/logo.png'

//layering

nav.appendChild(bkg)
bkg.appendChild(ctn)
ctn.appendChild(row)
row.appendChild(navi)
navi.appendChild(logoImg)
navi.appendChild(btn)
btn.appendChild(span)
navi.appendChild(navbar)
navbar.appendChild(navItems)
navItems.appendChild(navItem1)
navItem1.appendChild(navItem1A)
navItems.appendChild(navItem2)
navItem2.appendChild(navItem2A)
navItems.appendChild(navItem3)
navItem3.appendChild(navItem3A)

console.log(nav);