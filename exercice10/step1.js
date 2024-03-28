const { Sum } = require('./monoids')

/* **************************************************
    Changes:
     - prepare the context
************************************************** */

const result = Array(Sum(3), Sum(1), Sum(15))
    .reduce((acc, x) => acc.concat(x), Sum.empty())

console.log(result) // Sum(19)
