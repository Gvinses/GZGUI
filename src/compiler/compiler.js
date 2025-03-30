import {tag_namesAndClasses} from './imports.js'

class CompilerClass {
    constructor(tagNandC) {
        this.tag_namesAndClasses = tagNandC
    }

    async definer(tagName) {
        await customElements.define(tagName[0], tagName[1])

        /**
         * Function to add tag to HTML
         * with self tag name (tagName[0])
         * and class of it (tagName[1])
         */
    }

    async subscribe() {
        try {
            await this.tag_namesAndClasses.forEach(tagName => {
                this.definer(tagName)
            })
        } catch (error) {
            return new Error('Error while define HTML tags')
        }

        /**
         * Function to add all
         * custom HTML tags to HTML
         */
    }
}

let compiler = new CompilerClass(tag_namesAndClasses)
export {compiler}

/**
 * Compiler object to compile all
 * HTML classes and add them to HTML custom tags
 **/