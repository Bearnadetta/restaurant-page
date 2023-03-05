const headerDiv = () => {
    const header = document.createElement('div')
    const headerTitle = document.createElement('h1')
    header.appendChild(headerTitle)
    headerTitle.textContent = 'Welcome to the Restaurant!'
    header.classList.add('header')
    headerTitle.classList.add('header-title')
    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('button-div')
    header.appendChild(buttonDiv)
    const buttons = ['home', 'menu', 'contact']
    const makeButtons = () => {
        for (let i = 0; i < buttons.length; i++) {
            const button = document.createElement('button')
            button.classList.add(buttons[i])
            button.textContent = buttons[i]
            buttonDiv.appendChild(button)
        }
    }
    makeButtons();
    return header

}

export {headerDiv}