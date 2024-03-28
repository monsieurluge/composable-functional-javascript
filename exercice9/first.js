const { Left } = require('./left-right')

const First = either => ({
    concat: o => either.isLeft ? o : First(either),
    fold: f => f(either),
})

First.empty = () => First(Left())

module.exports = { First }
