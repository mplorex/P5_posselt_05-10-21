const navigation = document.getElementById('nav')

const navigationContainer = document.createElement('div')

const logoImg = document.createElement('img')
const menuButton = document.createElement('button')
const buttonSpan = document.createElement('span')

const navbar = document.createElement('div')
const navItems = document.createElement('ul')
const navItem1 = document.createElement('li')
const navItem1A = document.createElement('a')
const navItem2 = document.createElement('li')
const navItem2A = document.createElement('a')

navItem1A.innerHTML = 'Products'
navItem2A.innerHTML = 'Cart'

//classes

navigationContainer.setAttribute('class', 'container')
menuButton.setAttribute('class', 'navbar-toggler')
menuButton.setAttribute('type', 'button')
menuButton.setAttribute('data-toggle', 'collapse')
menuButton.setAttribute('data-target', '#navbarSupportedContent')
menuButton.setAttribute('aria-controls', 'navbarSupportedContent')
menuButton.setAttribute('aria-expanded', 'false')
menuButton.setAttribute('aria-label', 'Toggle navigation')
buttonSpan.setAttribute('class', 'navbar-toggler-icon')

navbar.setAttribute('class', 'collapse navbar-collapse')
navbar.setAttribute('id', 'navbarSupportedContent')
navItems.setAttribute('class', 'navbar-nav mr-auto')
navItem1.setAttribute('class', 'nav-item active')
navItem1A.setAttribute('class', 'nav-link')
navItem1A.setAttribute('href', 'index.html')
navItem2.setAttribute('class', 'nav-item')
navItem2A.setAttribute('class', 'nav-link')
navItem2A.setAttribute('href', 'cart.html')

logoImg.src = './images/logo.png'

//layering

navigation.appendChild(navigationContainer)
navigationContainer.appendChild(logoImg)
navigationContainer.appendChild(menuButton)
menuButton.appendChild(buttonSpan)
navigationContainer.appendChild(navbar)
navbar.appendChild(navItems)
navItems.appendChild(navItem1)
navItem1.appendChild(navItem1A)
navItems.appendChild(navItem2)
navItem2.appendChild(navItem2A)

console.log(navigation);