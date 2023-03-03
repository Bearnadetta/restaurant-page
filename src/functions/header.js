const headerDiv = () => {
    const header = document.createElement('div')
    header.textContent = 'Hello'
    header.classList.add('header')
    return header

}

export {headerDiv}