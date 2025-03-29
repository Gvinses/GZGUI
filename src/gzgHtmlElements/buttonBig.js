import {setFontStyles} from '../globals/fontStyles.js'

export class bigButton extends HTMLElement {
    constructor() {
        super();

        let text = ''
        this.innerText = text
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this.text = this.getAttribute('text')
            this.innerText = this.text
        }
        this.setStyles()
    }

    setStyles() {
        this.currentHTML = this.innerHTML
        this.innerHTML = `
            <style>
                gzg-button-b {
                    background: rgb(188, 188, 188);
                    opacity: 0.9;
                    border: none;
                    border-radius: 25px;
                
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    padding: 10px;
                    min-width: 350px;
                    min-height: 100px;
                    width: max-content;
                    
                    font-size: xx-large;
                }
            </style>
            ${this.currentHTML}
        `
        this.innerHTML = setFontStyles(this, 'gzg-button-b')
    }
}