/* **************************************************
    Changes:
     - enhance the Sum semigroup to create a monoid
************************************************** */

const { Sum } = require('./core.js')

Sum.empty = () => Sum(0)

// --------------------------------------------------

const result = Sum.empty().concat(Sum(1).concat(Sum(2)))

console.log(result.x) // 3
