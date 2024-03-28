const Task = require('data.task')

/* **************************************************
    (/!\ data.task package is deprecated)

    Changes:
     - extend computation before using fork
************************************************** */

const launchMissiles = () =>
    new Task((reject, resolve) => {
        console.log('launch missiles!')
        resolve('missile')
    })

const app = launchMissiles().map(x => x.concat('!'))

app
    .map(x => x.concat('!'))
    .fork(
        e => console.log('error', e),
        x => console.log('success', x),
    ) // success missile!!
