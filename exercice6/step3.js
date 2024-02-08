/* **************************************************
    Changes:
     - destructuring & readability
************************************************** */

const Sum = x => ({
    x,
    concat: ({ x: y }) => Sum(x + y),
    inspect: () => `Sum of ${x}`
})

// --------------------------------------------------

const result = Sum(1).concat(Sum(2))

console.log(result.inspect())
