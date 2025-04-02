import {bigButton} from '../gzgHtmlElements/buttons/buttonBig.js'
import {miniButton} from '../gzgHtmlElements/buttons/buttonSmall.js'
import {inputA} from '../gzgHtmlElements/inputs/inputA.js'
import {inputB} from '../gzgHtmlElements/inputs/inputB.js'

let tag_namesAndClasses = [
    ["gzg-button-b", bigButton, {extends: "button"}],
    ["gzg-button-m", miniButton, {extends: "button"}],
    ["gzg-input-a", inputA, {extends: "input"}],
    ["gzg-input-b", inputB, {extends: "div"}],
]

export {tag_namesAndClasses}
/**
 * Export tags names (names, and classes) variable
 **/