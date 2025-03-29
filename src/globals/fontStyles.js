export function setFontStyles(HTML, nameOfElement) {
    let currentHTML = HTML.innerHTML

    HTML.innerHTML = `
        <style>
            ${nameOfElement}{
                color: #fff;
                font-family: 'Roboto', sans-serif;
            }
        </style>
        ${currentHTML}
    `

    return HTML.innerHTML
}