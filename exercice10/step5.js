const { List, Map } = require('immutable-ext')
const { Sum } = require('./monoids')

/* **************************************************
    Changes:
     - use the foldMap function
************************************************** */

const resultMap = Map({ brian: 3, sarah: 5 }).foldMap(Sum, Sum.empty())

console.log(resultMap) // Sum(8)

const resultList = List.of(3, 1, 15).foldMap(Sum, Sum.empty())

console.log(resultList) // Sum(19)
