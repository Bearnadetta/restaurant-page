const mainDiv = () => {
    const main = document.createElement('div')
    main.classList.add('main')

    const mainHome = () => {
        mainClear();
        const homeDiv = document.createElement('div')
        homeDiv.classList.add('home-div')
        homeDiv.textContent = 'Home'
        main.appendChild(homeDiv)
        return homeDiv
    }

    const mainMenu = () => {
        mainClear();
        const menuDiv = document.createElement('div')
        menuDiv.classList.add('menu-div')
        menuDiv.textContent = 'Menu'
        main.appendChild(menuDiv)
        return menuDiv
    }

    const mainContact = () => {
        mainClear();
        const contactDiv = document.createElement('div')
        contactDiv.classList.add('contact-div')
        contactDiv.textContent = 'Contact'
        main.appendChild(contactDiv)
        return contactDiv
    }

    const mainClear = () => {
        main.innerHTML = ''
        main = document.createElement('div')
        main.classList.add('main')
    }

    return main

}

export {mainDiv}