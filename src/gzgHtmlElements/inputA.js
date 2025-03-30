import {setTagStyles} from "../globals/tagStyles.js";

let selector_name = 'input-a'

export class inputA extends HTMLElement {
    constructor() {
        super();

        this.value = ''
        this.gzgName = 'gzg-' + selector_name
    }

    connectedCallback() {
        if (this.hasAttribute('value')) {
            this.value = this.getAttribute('value')
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
                    
            padding: 10px;
            width: 300px;
            height: 50px;   
        `

        this.innerHTML = setTagStyles(this, this.gzgName, css)
    }
}