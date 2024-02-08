const input = ' 64  '

const nextCharForNumberString = str => {
    const trimmed = str.trim()
    const number = parseInt(trimmed)
    const nextNumber = number + 1
    return String.fromCharCode(nextNumber)
}

const result = nextCharForNumberString(input)

console.log(result)
