const All = x => ({
    x,
    concat: ({ x: y }) => All(x && y),
})

All.empty = () => All(true)

module.exports = { All }
