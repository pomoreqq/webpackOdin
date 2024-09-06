console.log('Workin!!!!!!!!')

import './styles.css'
import { homePage } from "./homepage"
import MenuPage from './menu'
import createContactPage from './contact'


const menuPage = new MenuPage()

const contactPage = createContactPage()

const contactButton = document.querySelector('.contactButton')
const homeButton = document.querySelector('.homeButton')
const menuButton = document.querySelector('.menuButton')

addEventListener('DOMContentLoaded',() => {
    homePage()


homeButton.addEventListener('click', homePage)
menuButton.addEventListener('click',() => {
    menuPage.render()
})

contactButton.addEventListener('click',() => {
    contactPage.render()
})
})

