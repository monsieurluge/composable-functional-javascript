/* **************************************************
    Changes:
     - enhance the First semigroup to create a monoid
************************************************** */

const { First } = require('./core.js')

// --------------------------------------------------

// there is no way to promote the First semigroup to a monoid
//
// First('hello').concat(?) -> 'hello' ?
// First(?).concat(First('hello')) -> 'hello' ?
//
// -> impossible, this semigroup should remain a semigroup
// -> the First semigroup remains an unsafe operation
