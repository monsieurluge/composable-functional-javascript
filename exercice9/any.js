const Any = x => ({
    x,
    concat: ({ x: y }) => Any(x || y),
})

Any.empty = () => Any(false)

module.exports = { Any }
