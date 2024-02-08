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

const knownColors = {
    blue: '#3b5998',
    red: '#ff4444',
    yellow: '#fff68f',
}

const findColor = name => {
    const found = knownColors[name]
    return found ? Right(found) : Left(found)
}

const colorInHex = (name) =>
    findColor(name)
    .map(s => s.slice(1))
    .map(s => s.toUpperCase())
    .fold(() => 'no color', x => x)

console.log(`red color is "${colorInHex('red')}"`)
console.log(`green color is "${colorInHex('green')}"`)
