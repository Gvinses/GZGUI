import {setFontStyles} from '../globals/fontStyles.js'

export class miniButton extends HTMLElement {
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
                gzg-button-m {
                    background: rgb(188, 188, 188);
                    opacity: 0.9;
                    border: none;
                    border-radius: 25px;
                
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    min-width: 155px;
                    min-height: 50px;
                    width: max-content;
                    
                    font-size: large;
                }
            </style>
            ${this.currentHTML}
        `
        this.innerHTML = setFontStyles(this, 'gzg-button-m')
    }
}