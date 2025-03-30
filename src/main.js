import {compiler} from './compiler/compiler.js'

compiler.subscribe().then(d => {
    console.log('rendered')

    /**
     * Set function which will run, after adding all
     * custom HTML elements
     */
})


/**
 * Any actions you can create by classes and id,
 * because HTML features like "onclick(func(event))"
 * doesn't work with custom HTML tags
 */