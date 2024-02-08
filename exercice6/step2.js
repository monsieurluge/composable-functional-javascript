/* **************************************************
    Changes:
     - add an "inspect" method
************************************************** */

const Sum = x => ({
    x,
    concat: other => Sum(x + other.x),
    inspect: () => `Sum of ${x}`
})

// --------------------------------------------------

const result = Sum(1).concat(Sum(2))

console.log(result.inspect())
