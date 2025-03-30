import {compiler} from './compiler/compiler.js'

compiler.subscribe().then(d => {
    console.log('rendered')
})