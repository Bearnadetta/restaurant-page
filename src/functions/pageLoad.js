const pageLoad = () => {
    console.log("you bundled it correctly!")
    const content = document.getElementById('content')

    // creates header div
    const header = document.createElement('div')
    content.appendChild(header)
    header.textContent = 'Hello'

    // creates main content div

    // creates footer

    
}

export {pageLoad};
