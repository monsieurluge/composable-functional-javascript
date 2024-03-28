const Box = x => ({
    inspect: () => `Box(${x})`,
    fold: f => f(x),
    map: f => Box(f(x)),
})

module.exports = { Box }
