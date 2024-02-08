const Left = x => ({
    chain: () => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left container with value of ${x}`,
    map: () => Left(x),
})

const Right = x => ({
    chain: f => f(x),
    fold: (f, g) => g(x),
    inspect: () => `Right container with value of ${x}`,
    map: f => Right(f(x)),
})

const fromNullable = x => (x === null || x === undefined) ? Left(null) : Right(x)

const tryCatch = f => {
    try {
        return Right(f())
    } catch (error) {
        return Left(error)
    }
}

module.exports = {
    Left,
    Right,
    fromNullable,
    tryCatch,
}
