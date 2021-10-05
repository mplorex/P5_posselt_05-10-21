const footer = document.getElementById('footer')

const footerContainer = document.createElement('div')
const footerText = document.createElement('div')
const footerTitle = document.createElement('h5')
const footerTitle2 = document.createElement('b')
const footerDescription = document.createElement('p')
const footerLinks = document.createElement('div')
const footerLink1A = document.createElement('a')
const footerLink1AI = document.createElement('i')
const footerLink2A = document.createElement('a')
const footerLink2AI = document.createElement('i')
const footerLink3A = document.createElement('a')
const footerLink3AI = document.createElement('i')

footerTitle2.innerHTML = 'Orinoco'
footerDescription.innerHTML = 'Orinoco offers specific, themed apps which each sell one group of products.'
footerLinks.innerHTML = "Follow us on our Social Medias: "
footerLink1A.innerHTML = ' Facebook '
footerLink2A.innerHTML = ' Instagram '
footerLink3A.innerHTML = ' Twitter '

footerContainer.setAttribute('class', 'col bckg text-white container-xxl p-4')
footerLink1A.setAttribute('href', 'https://facebook.com')
footerLink1A.setAttribute('class', 'text-white')
footerLink1A.setAttribute('style', 'text-decoration:none')
footerLink1AI.setAttribute('class', 'fab fa-facebook')
footerLink2A.setAttribute('href', 'https://instagram.com')
footerLink2A.setAttribute('class', 'text-white')
footerLink2A.setAttribute('style', 'text-decoration:none')
footerLink2AI.setAttribute('class', 'fab fa-instagram')
footerLink3A.setAttribute('href', 'https://twitter.com')
footerLink3A.setAttribute('class', 'text-white')
footerLink3A.setAttribute('style', 'text-decoration:none')
footerLink3AI.setAttribute('class', 'fab fa-twitter')

footer.appendChild(footerContainer)
footerContainer.appendChild(footerText)
footerText.appendChild(footerTitle)
footerTitle.appendChild(footerTitle2)
footerText.appendChild(footerDescription)
footerContainer.appendChild(footerLinks)
footerLinks.appendChild(footerLink1A)
footerLink1A.appendChild(footerLink1AI)
footerLinks.appendChild(footerLink2A)
footerLink2A.appendChild(footerLink2AI)
footerLinks.appendChild(footerLink3A)
footerLink3A.appendChild(footerLink3AI);

console.log(footer)

