const All = x => ({
    x,
    concat: ({ x: y }) => All(x && y),
    inspect: () => `All is ${x}`
})

const First = x => ({
    x,
    concat: () => First(x),
    inspect: () => `First is ${x}`
})

const Sum = x => ({
    x,
    concat: ({ x: y }) => Sum(x + y),
    inspect: () => `Sum of ${x}`
})

module.exports = {
    All,
    First,
    Sum,
}
