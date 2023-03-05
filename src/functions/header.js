const headerDiv = () => {
    const header = document.createElement('div')
    const headerTitle = document.createElement('h1')
    header.appendChild(headerTitle)
    headerTitle.textContent = 'Welcome to the Restaurant!'
    header.classList.add('header')
    headerTitle.classList.add('header-title')
    return header

}

export {headerDiv}