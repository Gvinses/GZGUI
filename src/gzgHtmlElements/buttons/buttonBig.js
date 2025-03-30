import {setTagStyles} from '../../globals/tagStyles.js'

let selector_name = 'button-b'

export class bigButton extends HTMLElement {
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
                    
            min-width: 350px;
            min-height: 100px;
            width: max-content;
                    
            font-size: large;
        `

        this.innerHTML = setTagStyles(this, this.gzgName, css)
    }
}