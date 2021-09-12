const footer = document.getElementById('footer')

const ctnFooter = document.createElement('div')
const ftrText = document.createElement('div')
const ftrTitle = document.createElement('h5')
const ftrBTitle = document.createElement('b')
const ftrDescription = document.createElement('p')
const ftrLinks = document.createElement('div')
const ftrLink1 = document.createElement('a')
const ftrLink11 = document.createElement('i')
const ftrLink2 = document.createElement('a')
const ftrLink22 = document.createElement('i')
const ftrLink3 = document.createElement('a')
const ftrLink33 = document.createElement('i')

ftrBTitle.innerHTML = 'Orinoco'
ftrDescription.innerHTML = 'Orinoco offers specific, themed apps which each sell one group of products.'
ftrLinks.innerHTML = "Follow us on our Social Medias: "
ftrLink1.innerHTML = ' Facebook '
ftrLink2.innerHTML = ' Instagram '
ftrLink3.innerHTML = ' Twitter '

ctnFooter.setAttribute('class', 'col bckg text-white container-xxl p-4')
ftrLink1.setAttribute('href', 'https://facebook.com')
ftrLink1.setAttribute('class', 'text-white')
ftrLink1.setAttribute('style', 'text-decoration:none')
ftrLink11.setAttribute('class', 'fab fa-facebook')
ftrLink2.setAttribute('href', 'https://instagram.com')
ftrLink2.setAttribute('class', 'text-white')
ftrLink2.setAttribute('style', 'text-decoration:none')
ftrLink22.setAttribute('class', 'fab fa-instagram')
ftrLink3.setAttribute('href', 'https://twitter.com')
ftrLink3.setAttribute('class', 'text-white')
ftrLink3.setAttribute('style', 'text-decoration:none')
ftrLink33.setAttribute('class', 'fab fa-twitter')

footer.appendChild(ctnFooter)
ctnFooter.appendChild(ftrText)
ftrText.appendChild(ftrTitle)
ftrTitle.appendChild(ftrBTitle)
ftrText.appendChild(ftrDescription)
ctnFooter.appendChild(ftrLinks)
ftrLinks.appendChild(ftrLink1)
ftrLink1.appendChild(ftrLink11)
ftrLinks.appendChild(ftrLink2)
ftrLink2.appendChild(ftrLink22)
ftrLinks.appendChild(ftrLink3)
ftrLink3.appendChild(ftrLink33);

console.log(footer)

