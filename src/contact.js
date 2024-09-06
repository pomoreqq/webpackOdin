function createContactPage() {
    

    const contactContentDiv = document.createElement('div')
    contactContentDiv.classList.add('contact-content')

    const conctactInfoDiv = document.createElement('div')
    conctactInfoDiv.classList.add('contact-info')

    const contactH2 = document.createElement('h2')
    contactH2.textContet = 'Kontakt'

    const phoneP = document.createElement('p')
    phoneP.textContent = 'Telefon: 538 383 111'

    const emailP = document.createElement('p')
    emailP.textContent = 'kontakt@restauracjawp.pl'

    const addressP = document.createElement('p')
    addressP.textContent = 'ul. Warszawska, 22-222 Warszawa'

    const arrayItems = [contactH2,phoneP,emailP,addressP]

    arrayItems.forEach(item => {
        conctactInfoDiv.appendChild(item)
    })

    contactContentDiv.appendChild(conctactInfoDiv)

    return {
        render() {
            const content = document.querySelector('#content')
            content.textContent = ''
            content.appendChild(contactContentDiv)
        }
    }

}


export default createContactPage