/* **************************************************
    Changes:
     - prepare the context
************************************************** */

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

const fromNullable = x => (x === null || x === undefined) ? Left(null) : Right(x)

// --------------------------------------------------

const fs = require('fs')

const getPort = file => {
    try {
        const content = fs.readFileSync(file)
        const config = JSON.parse(content)
        return config.port
    } catch (error) {
        return 3000
    }
}

const portFromConfigFile = getPort('config.json')
const portFromUnknownFile = getPort('unknown.json')

console.log(`the port is ${portFromConfigFile} (known and valid config file)`)
console.log(`the port is ${portFromUnknownFile} (unknown file)`)
