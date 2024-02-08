const Left = x => ({
    fold: (f, g) => f(x),
    inspect: () => `Left container with value of ${x}`,
    map: () => Left(x),
})

const Right = x => ({
    fold: (f, g) => g(x),
    inspect: () => `Right container with value of ${x}`,
    map: f => Right(f(x)),
})

const add1 = n => n + 1

const toPow = pow => n => Math.pow(n, pow)

const resultLeft = Left(3)
    .map(add1)
    .map(toPow(2))
    .fold(() => 'error', x => x)

const resultRight = Right(3)
    .map(add1)
    .map(toPow(2))
    .fold(() => 'error', x => x)

console.log('Left result:', resultLeft)
console.log('Right result:', resultRight)
