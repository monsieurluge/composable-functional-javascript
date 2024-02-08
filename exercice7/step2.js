/* **************************************************
    Changes:
     - replace the raw data by the corresponding Semigroups
************************************************** */

const { Map } = require('immutable')
const { All, First, Sum } = require('./core.js')

const data1 = Map({
    name: First('Nico'),
    isPaid: All(true),
    points: Sum(10),
    friends: ['Franklin'], // an Array is already a Semigroup
})

const data2 = Map({
    name: First('Nico'),
    isPaid: All(false),
    points: Sum(2),
    friends: ['Gatsby'], // an Array is already a Semigroup
})

// --------------------------------------------------

const result = data1.concat(data2)

console.log(result.toJSON())
