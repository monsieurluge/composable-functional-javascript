const Fn = f => ({
    concat: o => Fn(x => f(x).concat(o.fold(x))),
    fold: f,
})

module.exports = { Fn }
