const { List, Map } = require('immutable-ext')
const { Sum } = require('./monoids')

/* **************************************************
    Changes:
     - dealing with a raw mapped object (no monoid)
     - dealing with a raw List (no monoid)
************************************************** */

const resultMap = Map({ brian: 3, sarah: 5 })
    .map(Sum)
    .fold(Sum.empty())

console.log(resultMap) // Sum(8)

const resultList = List.of(3, 1, 15)
    .map(Sum)
    .fold(Sum.empty())

console.log(resultList) // Sum(19)
