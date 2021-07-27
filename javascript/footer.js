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
ftrLink1.innerHTML = 'Facebook'
ftrLink2.innerHTML = 'Instagram'
ftrLink3.innerHTML = 'Twitter'

ctnFooter.setAttribute('class', 'column bckg text-white')
ftrLink11.setAttribute('class', 'fab fa-facebook')
ftrLink22.setAttribute('class', 'fab fa-instagram')
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

