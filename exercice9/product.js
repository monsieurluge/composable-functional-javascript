const Product = x => ({
    x,
    concat: ({ x: y }) => Product(x * y),
})

Product.empty = () => Product(1)

module.exports = { Product }
