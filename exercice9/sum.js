const Sum = x => ({
    x,
    concat: ({ x: y }) => Sum(x + y),
})

Sum.empty = () => Sum(0)

module.exports = { Sum }
