class MenuPage {
    constructor() {
        
        this.menuContentDiv = document.createElement('div')
        this.menuContentDiv.classList.add('menu-content')
        this.menuItems = [
            { name: 'Pierogi Ruskie', description: 'Tradycyjne pierogi z ziemniakami i twarogiem.', price: '25 PLN' },
            { name: 'Bigos', description: 'Aromatyczne danie z kapusty, mięsa i kiełbasy.', price: '30 PLN' },
            { name: 'Żurek', description: 'Zupa na zakwasie, serwowana z jajkiem i kiełbasą.', price: '18 PLN' },
        ];

        this.menuItems.forEach(item => {
            const menuItemDiv = document.createElement('div')
            menuItemDiv.classList.add('menu-item')

            const itemTitle = document.createElement('h2')
            itemTitle.textContent = item.name

            const description = document.createElement('p')
            description.textContent = item.description

            const price = document.createElement('p')
            price.textContent = item.price

            menuItemDiv.appendChild(itemTitle)
            menuItemDiv.appendChild(description)
            menuItemDiv.appendChild(price)


            this.menuContentDiv.appendChild(menuItemDiv)
            
        })
    }

    render(){
        const content = document.querySelector('#content')
        content.textContent =''
        content.appendChild(this.menuContentDiv)
    }

}



export default MenuPage