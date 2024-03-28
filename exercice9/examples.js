const { List } = require('immutable-ext')
const { compose } = require('./compose')
const { Fn } = require('./fn')
const { All } = require('./all')
const { Any } = require('./any')
const { First } = require('./first')
const { fromNullable, Left, Right } = require('./left-right')
const { Sum } = require('./sum')

// --------------------------------------------------

const stats1 = List.of(
    { page: 'Home', views: 40 },
    { page: 'About', views: 13 },
    { page: 'Blog', views: 4 },
)

stats1.foldMap(
    x => fromNullable(x.views).map(Sum),
    Right(Sum(0))
) // Right(Sum(54))

const stats2 = List.of(
    { page: 'Home', views: 40 },
    { page: 'About', views: 13 },
    { page: 'Blog', views: null },
)

stats2.foldMap(
    x => fromNullable(x.views).map(Sum),
    Right(Sum(0))
) // Left(null)

// --------------------------------------------------

const findFirst = (xs, f) => List(xs)
    .foldMap(
        x => First(f(x) ? Right(x) : Left()),
        First.empty(),
    )
    .fold(x => x)

findFirst([3, 4, 5, 6, 7], x => x > 4) // Right(5)

// --------------------------------------------------

const hasVowels = x => !!x.match(/[aeiou]/ig)

const longWord = x => x.length >= 5

const bothAll = Fn(compose(All, hasVowels)).concat(Fn(compose(All, longWord)))

const bothAny = Fn(compose(Any, hasVowels)).concat(Fn(compose(Any, longWord)))

Array('gym', 'bird', 'lilac').filter(x => bothAll.fold(x).x) // [lilac]
Array('gym', 'bird', 'lilac').filter(x => bothAny.fold(x).x) // ['bird', lilac]

// --------------------------------------------------

// no example using "Pair" :(
