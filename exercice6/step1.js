/* **************************************************
    Changes:
     - create the Sum semigroup
************************************************** */

const Sum = x => ({
    x,
    concat: other => Sum(x + other.x),
})

// --------------------------------------------------

const result = Sum(1).concat(Sum(2))

console.log(result)
