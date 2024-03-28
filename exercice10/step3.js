const { List, Map } = require('immutable-ext')
const { Sum } = require('./monoids')

/* **************************************************
    Changes:
     - same example but with a Map
************************************************** */

const result = Map({ brian: Sum(3), sarah: Sum(5) }).fold(Sum.empty())

console.log(result) // Sum(8)
