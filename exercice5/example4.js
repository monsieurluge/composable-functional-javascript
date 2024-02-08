// imperative
const concatUniqImp = (x, ys) => {
    const found = ys.filter(y => y === x)[0]
    return found ? ys : ys.concat(x)
}

// functional
const concatUniqFunc = (x, ys) =>
    fromNullable(ys.filter(y => y === x)[0])
    .fold(() => ys.concat(x), y => ys)

/* **************************************************
    working example
************************************************** */

const { fromNullable } = require('./core.js')

const lists = {
    with42: [1, 15, 42, 3, 8],
    without42: [2, 31, 7, 4],
}

// change the list name (with42 or without42) to test the different paths
const values = lists.with42

const resultImp = concatUniqImp(42, values)
const resultFunc = concatUniqFunc(42, values)

console.log('imperative >', resultImp)
console.log('functional >', resultFunc)
