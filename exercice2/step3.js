const Box = x => ({
    fold: f => f(x),
    inspect: () => `Box content = ${x}`,
    map: f => Box(f(x)),
})

const moneyToFloat = str =>
    Box(str)
    .map(s => str.replace(/\$/g, ''))
    .fold(parseFloat)

const percentToFloat = str =>
    Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(parseFloat)
    .fold(n => n * 0.01)

const applyDiscount = (price, discount) => {
    const cost = moneyToFloat(price)
    const savings = percentToFloat(discount)
    return cost - cost * savings
}

const result = applyDiscount('$5.00', '20%')

console.log(result)