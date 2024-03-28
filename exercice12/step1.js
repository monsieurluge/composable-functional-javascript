const Task = require('data.task')

/* **************************************************
    (/!\ data.task package is deprecated)

    Changes:
     - prepare the context
************************************************** */

Task.of(3)
    .map(x => x + 1)
    .fork(
        e => console.log('error', e),
        x => console.log('success', x),
    ) // success 4

Task.rejected('oops')
    .map(x => x + 1)
    .fork(
        e => console.log('error', e),
        x => console.log('success', x),
    ) // error oops
