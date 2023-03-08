
import { headerDiv } from "./header"
import { mainDiv } from "./mainDiv"
import { footerDiv } from "./footer"

const pageLoad = () => {
    console.log("you bundled it correctly!")
    const content = document.getElementById('content')

    // creates header div
    content.appendChild(headerDiv())
    
    const homeButton = document.getElementById('home-button')
    const menuButton = document.getElementById('menu-button')
    const contactButton = document.getElementById('contact-button')

    // homeButton.addEventListener('click', )
    // menuButton.addEventListener('click', )
    // contactButton.addEventListener('click', )


    // creates main content div
    content.appendChild(mainDiv())

   
    // creates footer
    content.appendChild(footerDiv())
    
}

export {pageLoad};
