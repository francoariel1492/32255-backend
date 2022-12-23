class TicketManager{
    #precioBaseDeGananacia = 0.20
    #eventos = []

    constructor(){
        this.id = 0
    }

    verEventos(){
        return this.#eventos
    }

    agregarEvento(nombre,lugar,precio,capacidad = 50, fecha = new Date().toLocaleDateString()){
        this.id++
        const participantes = []

        const evento = {
            id: this.id,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        }
        this.#eventos.push(evento)

        return `Evento creado con id: ${this.id}`
    }
    agregarUsuario(idEvent, idUsuario){
        const evento = this.#eventos.find(evento => evento.id === idEvent)
        if(!evento){
            return `No hay eventos con el id:${idEvent}`
        }
        
        evento.participantes.push(idUsuario)

        return evento

    }

}

const manejadorDeEventos = new TicketManager()

const nombreEvento1 = 'Un evento de coder'
const lugar1 = 'Argentina'
const precio1 = 600

const nombreEvento2 = 'Un evento de navidad'
const lugar2 = 'Brasil'
const precio2 = 600
const capacidad2 = 143

const nombreEvento3 = 'Un evento de fin de año'
const lugar3 = 'Chile'
const precio3 = 600
const fecha3 = new Date().toLocaleDateString()

console.log(manejadorDeEventos.agregarEvento(nombreEvento1,lugar1,precio1))
console.log(manejadorDeEventos.agregarEvento(nombreEvento2,lugar2,precio2, capacidad2))
console.log(manejadorDeEventos.agregarEvento(nombreEvento3,lugar3,precio3, 20,fecha3))

console.log(manejadorDeEventos.verEventos())

console.log(manejadorDeEventos.agregarUsuario(2, 123))
console.log(manejadorDeEventos.agregarUsuario(2, 543))
console.log(manejadorDeEventos.agregarUsuario(9, 543))