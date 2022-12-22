const usuario = {
    nombre: 'Mate',
    edad: 20,
    activo: true
}

const admin = {
    nombre: 'Mate admin',
    productos: [2,3,4,5]
}

const {nombre, ...general} = usuario

const ususarioFull = {...usuario, ...admin}

console.log(ususarioFull)
