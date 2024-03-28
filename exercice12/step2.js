const Task = require('data.task')

/* **************************************************
    (/!\ data.task package is deprecated)

    Changes:
     - chain with other Tasks
************************************************** */

Task.of(3)
    .map(x => x + 1)
    .chain(x => Task.of(x + 7))
    .fork(
        e => console.log('error', e),
        x => console.log('success', x),
    ) // success 11

Task.rejected('oops')
    .map(x => x + 1)
    .chain(x => Task.of(x + 7))
    .fork(
        e => console.log('error', e),
        x => console.log('success', x),
    ) // error oops
