const { LazyBox } = require('./lazybox')

/* **************************************************
    Changes:
     - create a LazyBox (see the corresponding file)
     - replace Box by LazyBox
************************************************** */

const result = LazyBox(() => '   64 ')
    .map(text => text.trim())
    .map(trimmed => new Number(trimmed))
    .map(number => number + 1)
    .map(x => String.fromCharCode(x))
    .fold(x => x.toLowerCase()) // nothing happens until this call

console.log(result) // a
