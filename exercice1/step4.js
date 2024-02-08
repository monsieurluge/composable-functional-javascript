const input = ' 64  '

const Box = x => ({
    inspect: () => `Box content = ${x}`,
    map: f => Box(f(x)),
})

const nextCharForNumberString = str =>
    Box(str)
    .map(s => s.trim())
    .map(parseInt)
    .map(n => n + 1)
    .map(n => String.fromCharCode(n))

const result = nextCharForNumberString(input).inspect()

console.log(result)
