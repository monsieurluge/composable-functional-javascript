/* **************************************************
    Changes:
     - prepare the data structures
************************************************** */

const { Map } = require('immutable')

const data1 = Map({
    name: 'Nico',
    isPaid: true,
    points: 10,
    friends: ['Franklin'],
})

const data2 = Map({
    name: 'Nico',
    isPaid: false,
    points: 2,
    friends: ['Gatsby'],
})

const result = data1.concat(data2)

console.log(result.toJSON())
