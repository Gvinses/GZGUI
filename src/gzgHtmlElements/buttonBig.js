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
    }

    setStyles() {

    }
}