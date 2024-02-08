/* **************************************************
    Changes:
     - handle the JSON.parse exception (if the string not a valid JSON string) using the tryCatch function
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

const tryCatch = f => {
    try {
        return Right(f())
    } catch (error) {
        return Left(error)
    }
}

const fs = require('fs')

const getPort = file =>
    tryCatch(() => fs.readFileSync(file))
    .fold(
        () => 'the config file is not a valid JSON file',
        content => tryCatch(() => JSON.parse(content)),
    )
    .fold(() => 3000, config => config.port)

const portFromConfigFile = getPort('config.json')
const portFromInvalidConfigFile = getPort('invalidConfig.json')

console.log(`the port is ${portFromConfigFile} (known and valid config file)`)
console.log(`the port is ${portFromInvalidConfigFile} (known and invalid config file)`)
