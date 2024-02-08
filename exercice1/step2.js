const input = ' 64  '

const nextCharForNumberString = str => String.fromCharCode(parseInt(str.trim()) + 1)

const result = nextCharForNumberString(input)

console.log(result)
