import {compiler} from './compiler/compiler.js'

compiler.subscribe(
    (x) => {
        console.log(x)
    }
)