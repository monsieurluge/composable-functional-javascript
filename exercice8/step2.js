/* **************************************************
    Changes:
     - enhance the All semigroup to create a monoid
************************************************** */

const { All } = require('./core.js')

All.empty = () => All(true)

// --------------------------------------------------

const result1 = All(true).concat(All(true).concat(All.empty()))
const result2 = All(true).concat(All.empty().concat(All(false)))

console.log(result1.x) // true
console.log(result2.x) // false
