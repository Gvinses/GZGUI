import {setFontStyles} from "./fontStyles.js" 

export function setTagStyles(HTML, gzgName, styles) {
    let currentHTML = HTML.innerHTML
    HTML.innerHTML = `
        <style>
            ${gzgName} {
                ${styles}
            }
        </style>
        ${currentHTML}
    `
    HTML.innerHTML = setFontStyles(HTML, gzgName)
    return HTML.innerHTML
}


export function setElementStyles(HTML, elementName, styles) {
    let currentHTML = HTML.innerHTML
    HTML.innerHTML = `
        <style>
            ${elementName} {
                ${styles}
            }
        </style>
        ${currentHTML}
    `
    return HTML.innerHTML
}