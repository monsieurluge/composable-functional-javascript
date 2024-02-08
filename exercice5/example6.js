const connectionStringRegexp = /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/

// imperative
const parseDbUrlImp = config => {
    try {
        const cfg = JSON.parse(config)
        if (cfg.url) {
            return cfg.url.match(connectionStringRegexp)
        }
    } catch (error) {
        return null
    }
}

// functional
const parseDbUrlFunc = config =>
    tryCatch(() => JSON.parse(config))
    .chain(cfg => fromNullable(cfg.url))
    .fold(
        () => null,
        url => url.match(connectionStringRegexp)
    )

/* **************************************************
    working example
************************************************** */

const { fromNullable, tryCatch } = require('./core.js')

const configs = {
    broken: '{ "url""postgres://user:secret@localhost:5442/foo" }',
    complete: '{ "url": "postgres://user:secret@localhost:5442/foo" }',
    partial: {},
    wrong: '{ "url": "postgres://user@localhost:5442/foo" }',
}

// change the config name (broken, complete, partial or wrong) to test the different paths
const config = configs.wrong

const resultImp = parseDbUrlImp(config)
const resultFunc = parseDbUrlFunc(config)

console.log('imperative >', resultImp)
console.log('functional >', resultFunc)

