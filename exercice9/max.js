const Max = x => ({
    x,
    concat: ({ x: y }) => Max(x > y ? x : y),
})

Max.empty = () => Max(-Infinity)

module.exports = { Max }
