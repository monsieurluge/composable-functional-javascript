const Left = x => ({
    inspect: () => `Left container with value of ${x}`,
    map: () => Left(x),
})

const Right = x => ({
    inspect: () => `Right container with value of ${x}`,
    map: f => Right(f(x)),
})

const add1 = n => n + 1

const toPow = pow => n => Math.pow(n, pow)

const resultLeft = Left(3)
    .map(add1)
    .map(toPow(2))

const resultRight = Right(3)
    .map(add1)
    .map(toPow(2))

console.log('Left result:', resultLeft.inspect())
console.log('Right result:', resultRight.inspect())
