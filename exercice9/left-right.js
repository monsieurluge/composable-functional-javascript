const Left = x => ({
    concat: o => Left(x),
    fold: (f, g) => f(x),
    map: f => Left(x),
})

const Right = x => ({
    concat: o => o.fold(e => Left(e), r => Right(x.concat(r))),
    fold: (f,g) => g(x),
    map: f => Right(f(x)),
})

const fromNullable = x => (x === null || x === undefined) ? Left(null) : Right(x)

module.exports = { fromNullable, Left, Right }
