const input = ' 64  '

const nextCharForNumberString = str =>
    [str]
    .map(s => s.trim())
    .map(parseInt)
    .map(n => n + 1)
    .map(n => String.fromCharCode(n))
    .shift()

const result = nextCharForNumberString(input)

console.log(result)
