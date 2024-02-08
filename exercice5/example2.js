// imperative

const getPrefsImp = user => {
    if (user.premium) {
        return loadPrefs(user.preferences)
    }
    return defaultPrefs
}

// functional

const getPrefsFunc = user =>
    (user.premium ? Right(user) : Left('not premium'))
    .map(u => u.preferences)
    .fold(() => defaultPrefs, prefs => loadPrefs(prefs))

/* **************************************************
    working example
************************************************** */

const { Left, Right } = require('./core.js')

const defaultPrefs = { canWriteArticle: false }

const users = {
    premium: {
        premium: true,
        preferences: { canWriteArticle: true },
    },
    regular: {
        premium: false,
        preferences: {},
    }
}

function loadPrefs(preferences) {
    console.log('preferences loaded!')
    return preferences
}

// comment the desired line to test with another user
const user = users.premium
// const user = users.regular

const resultImp = getPrefsImp(user)
const resultFunc = getPrefsFunc(user)

console.log('imperative >', resultImp)
console.log('functional >', resultFunc)
