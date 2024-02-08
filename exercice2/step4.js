const Box = x => ({
    fold: f => f(x),
    inspect: () => `Box content = ${x}`,
    map: f => Box(f(x)),
})

const moneyToFloat = str =>
    Box(str)
    .map(s => str.replace(/\$/g, ''))
    .map(parseFloat)

const percentToFloat = str =>
    Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(parseFloat)
    .map(n => n * 0.01)

const applyDiscount = (price, discount) =>
    moneyToFloat(price)
        .fold(cost =>
            percentToFloat(discount)
            .fold(savings =>
                cost - cost * savings
            )
        )

const result = applyDiscount('$5.00', '20%')

console.log(result)
