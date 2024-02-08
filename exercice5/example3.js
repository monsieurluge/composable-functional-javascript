// imperative

const streetNameImp = user => {
    const address = user.address
    if (address) {
        const street = address.street
        if (street) {
            return street.name
        }
    }
    return 'no street'
}

// functional

const streetNameFunc = user =>
    fromNullable(user.address)
    .chain(address => fromNullable(address.street))
    .map(street => street.name)
    .fold(() => 'no street', name => name)

/* **************************************************
    working example
************************************************** */

const { fromNullable } = require('./core.js')

const users = {
    withoutStreet: { address: {} },
    withStreet: { address: { street: { name: 'foo bar' } } }
}

// comment the desired line to test with another user
const user = users.withoutStreet
// const user = users.withStreet

const resultImp = streetNameImp(user)
const resultFunc = streetNameFunc(user)

console.log('imperative >', resultImp)
console.log('functional >', resultFunc)
