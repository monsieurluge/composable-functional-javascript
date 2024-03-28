const { Box } = require('./box')

/* **************************************************
    Changes:
     - prepare the context using Box
************************************************** */

const result = Box('   64 ')
    .map(text => text.trim())
    .map(trimmed => new Number(trimmed))
    .map(number => number + 1)
    .map(x => String.fromCharCode(x))
    .fold(x => x.toLowerCase())

console.log(result) // a
