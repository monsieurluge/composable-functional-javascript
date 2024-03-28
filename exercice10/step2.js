const { List } = require('immutable-ext')
const { Sum } = require('./monoids')

/* **************************************************
    Changes:
     - replace the reduce operation by the fold one
     - replace the Array object by a List
************************************************** */

const result = List.of(Sum(3), Sum(1), Sum(15)).fold(Sum.empty())

console.log(result) // Sum(19)
