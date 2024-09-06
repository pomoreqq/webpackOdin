const content = document.querySelector('#content')

import imageHome from './images/polskakuchnia.jpeg'

const homeContentDiv = document.createElement('div')
homeContentDiv.classList.add('home-content')
const homeTitle = document.createElement('h2')
homeTitle.textContent = 'Witamy w naszej restauracji'

const paragraph = document.createElement('p')
paragraph.textContent = 'Tradycyjna polska kuchnia, serwowana z pasją. Najlepsze pierogi, bigos i wiele innych przysmaków!'

const image = document.createElement('img')
image.src = imageHome;

const toAppendArray = [homeTitle,paragraph,image]

export const homePage = () => {
     toAppendArray.forEach((item) => {
        homeContentDiv.appendChild(item)
    })
    content.textContent = ''
    return content.appendChild(homeContentDiv)
}



