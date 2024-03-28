const Min = x => ({
    x,
    concat: ({ x: y }) => Min(x > y ? y : x),
})

Min.empty = () => Min(Infinity)

module.exports = { Min }
