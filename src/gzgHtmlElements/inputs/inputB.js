import {setElementStyles, setTagStyles} from "../../globals/tagStyles.js";
import {setFontStyles} from "../../globals/fontStyles.js";

let selector_name = 'input-b'

export class inputB extends HTMLElement {
    constructor() {
        super();

        this.value = ''
        this.icon = ''
        this.gzgName = 'gzg-' + selector_name
    }

    connectedCallback() {
        if (this.hasAttribute('icon')) {
            this.icon = this.getAttribute('icon')
            this.innerHTML = `<img src=${this.icon} width="40px">`
        }
        if (this.hasAttribute('value')) {
            this.value = this.getAttribute('value')
            this.innerHTML = this.innerHTML + `<input value=${this.value}>`
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
            justify-content: flex-start;
            align-items: center;
            
            width: 300px;
            padding: 0 10px;
            height: 50px;
            gap: 10px;
        `

        let inputCss = `
            background: rgb(0, 0, 0, 0);
            width: 100%;
            height: 80%;
            border: none;
            font-width: 500;
            font-size: 18px;
        `
        let inputCssHover = `
            outline: none;
            border: none;
        `
        let iconCss = `
            border-radius: 90px
        `


        /**
         * Setting up input styles
         */
        this.innerHTML = setElementStyles(this, 'input', inputCss)
        this.innerHTML = setElementStyles(this, 'input:hover', inputCssHover)
        this.innerHTML = setElementStyles(this, 'input:focus', inputCssHover)
        this.innerHTML = setFontStyles(this, 'input')

        this.innerHTML = setElementStyles(this, 'img', iconCss)

        /**
         * Setting up container styles (of gzg-input-a)
         */
        this.innerHTML = setTagStyles(this, this.gzgName, css)
    }
}