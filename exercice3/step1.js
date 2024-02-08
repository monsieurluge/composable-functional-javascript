const Right = x => ({
    inspect: () => `Right container with value of ${x}`,
    map: f => Right(f(x)),
})

const add1 = n => n + 1

const toPow = pow => n => Math.pow(n, pow)

const result = Right(3)
    .map(add1)
    .map(toPow(2))

console.log(result.inspect())
