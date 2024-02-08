/* **************************************************
    Changes:
     - create the All semigroup
************************************************** */

const All = x => ({
    x,
    concat: ({ x: y }) => All(x && y),
    inspect: () => `All is ${x}`
})

const Sum = x => ({
    x,
    concat: ({ x: y }) => Sum(x + y),
    inspect: () => `Sum of ${x}`
})

// --------------------------------------------------

const resultFalse = All(true).concat(All(false))
const resultTrue = All(true).concat(All(true))

console.log(resultFalse.inspect())
console.log(resultTrue.inspect())
