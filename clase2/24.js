const products = [
    {
        manzanas: 3,
        peras: 2,
        carne:1,
        jugos:5,
        dulce:2
    },
    {
        cocacola: 10,
        cerveza: 3,
        shampoo: 4
    }
]

const [firstPos, secondPos] = products.map(cart => Object.keys(cart))
const allProducts = [...firstPos, ...secondPos]
console.table(allProducts)

const values = products.map(cart => Object.values(cart))
const valuesToSum = values.flat()
const totalProducts = valuesToSum.reduce((acc,current) => acc + current)
console.log(totalProducts)