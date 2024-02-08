// imperative

const openSiteImp = () => {
    if (current_user) {
        return renderPage(current_user)
    }
    return showLogin()
}

// functional

const openSiteFunc = () =>
    fromNullable(current_user)
    .fold(showLogin, renderPage)

/* **************************************************
    working example
************************************************** */

const { fromNullable } = require('./core.js')

function renderPage(user) {
    return `home page for user ${user}`
}

function showLogin() {
    return `login page`
}

let current_user
// comment the next line to test the "show login" path
current_user = 'Richard Garfield'

const resultImp = openSiteImp()
const resultFunc = openSiteFunc()

console.log('imperative >', resultImp)
console.log('functional >', resultFunc)
