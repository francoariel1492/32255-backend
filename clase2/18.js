// const persona = {
//     name: "Mate",
//     apellido: "Naran",
//     edad: 3,
//     country: 'Colombia'
// }

// console.log(persona)
// console.log(Object.keys(persona))
// console.log(Object.values(persona))
// console.log(Object.entries(persona))


const campeonasDelMundo = [{
    Argentina: 2,
    Brasil: 5,
    Uruguay: 2
},
{
    Inglaterra: 2,
    Italia: 3,
    Alemania: 4

}]

const teamNames = campeonasDelMundo.map((team) => Object.keys(team))
console.log(teamNames)

const totalCups = campeonasDelMundo.map((team) => Object.values(team)).flat().reduce((acc,cur) => acc + cur,0)
console.log("Total Cups", totalCups)