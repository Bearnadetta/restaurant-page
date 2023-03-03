import { headerDiv } from "./header"
const pageLoad = () => {
    console.log("you bundled it correctly!")
    const content = document.getElementById('content')

    // creates header div
    
    content.appendChild(headerDiv())

    // creates main content div
    const mainDiv = document.createElement('div')
    content.appendChild(mainDiv)
    mainDiv.textContent = 'World'
    // creates footer
    const footer = document.createElement('div')
    content.appendChild(footer)
    footer.textContent = '!'

    
}

export {pageLoad};
