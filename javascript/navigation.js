const nav = document.getElementById('nav')
const cartCheckout = document.getElementById('checkout')

const navi = document.createElement('nav')
const ctn = document.createElement('div')


const logoImg = document.createElement('img')
const logoA = document.createElement('a')
const btn = document.createElement('button')
const span = document.createElement('span')

const navbar = document.createElement('div')
const navItems = document.createElement('ul')
const navItem1 = document.createElement('li')
const navItem1A = document.createElement('a')
const navItem2 = document.createElement('li')
const navItem2A = document.createElement('a')

navItem1A.innerHTML = 'Products'
navItem2A.innerHTML = 'Cart'

//classes

navi.setAttribute('class', 'navbar navbar-expand-lg navbar-light')
ctn.setAttribute('class', 'container-fluid')

logoA.setAttribute('class', 'navbar-brand')
btn.setAttribute('class', 'navbar-toggler')
btn.setAttribute('type', 'button')
btn.setAttribute('data-toggle', 'collapse')
btn.setAttribute('data-target', '#navbarContent')
btn.setAttribute('aria-controls', 'navbarCollapse')
btn.setAttribute('aria-expanded', 'false')
btn.setAttribute('aria-label', 'Toggle navigation')
span.setAttribute('class', 'navbar-toggler-icon')

navbar.setAttribute('class', 'collapse navbar-collapse')
navbar.setAttribute('id', 'navbarContent')
navItems.setAttribute('class', 'navbar-nav mr-auto')
navItem1.setAttribute('class', 'nav-item active')
navItem1A.setAttribute('class', 'nav-link')
navItem1A.setAttribute('href', 'index.html')
navItem2.setAttribute('class', 'nav-item')
navItem2A.setAttribute('class', 'nav-link')
navItem2A.setAttribute('href', 'cart.html')

logoImg.src = './images/logo.png'

//layering

nav.appendChild(navi)
navi.appendChild(ctn)
ctn.appendChild(logoImg)
ctn.appendChild(logoA)
logoA.appendChild(btn)
btn.appendChild(span)
ctn.appendChild(navbar)
navbar.appendChild(navItems)
navItems.appendChild(navItem1)
navItem1.appendChild(navItem1A)
navItems.appendChild(navItem2)
navItem2.appendChild(navItem2A)

console.log(nav);