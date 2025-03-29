import {bigButton} from '../gzgHtmlElements/buttonBig.js'
import {miniButton} from '../gzgHtmlElements/buttonSmall.js'


class CompilerClass {
    constructor(tagNandC) {
        this.tag_namesAndClasses = tagNandC
    }

    definer(tagName) {
        customElements.define(tagName[0], tagName[1])
    }

    subscribe(...fn) {
        this.tag_namesAndClasses.forEach(tagName => {
            this.definer(tagName)
        })
    }
}

let tag_namesAndClasses = [
    ["gzg-button-b", bigButton],
    ["gzg-button-m", miniButton],
]

let compiler = new CompilerClass(tag_namesAndClasses)
export {compiler}