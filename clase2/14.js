const number = [2,4,6,8]

const cuadrados = number.map(numero => numero**2)

console.log(cuadrados)

const incluye = cuadrados.includes(4)

console.log(incluye)

const numberoABuscar = 6
const incluyeNumber = number.includes(numberoABuscar)

console.log(`El valor ${numberoABuscar} se esta buscando en el array ${number} y el resultado es ${incluyeNumber}`)