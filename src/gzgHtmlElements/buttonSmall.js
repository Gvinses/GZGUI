import {setTagStyles} from '../globals/tagStyles.js'

let selector_name = 'button-m'

export class miniButton extends HTMLElement {
    constructor() {
        super();

        let text = ''
        this.innerText = text
        this.gzgName = 'gzg-' + selector_name
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this.text = this.getAttribute('text')
            this.innerText = this.text
        }
        this.setStyles()
    }

    setStyles() {
        let css = `
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
        `

        this.innerHTML = setTagStyles(this, this.gzgName, css)
    }
}