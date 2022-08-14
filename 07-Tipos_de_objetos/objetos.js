const yo = { nombre: "Kevin", apellido: "Pocon", edad: 20, altura: 1.75, eresDesarrolador: true}
console.log(yo)
const edad = yo.edad
console.log(edad)
const personas = [yo, { nombre: "Calvin", apellido: "Pocon", edad: 28, altura: 1.72, eresDesarrolador: true},{ nombre: "Freyder", apellido: "Perez", edad: 21, altura: 1.74, eresDesarrolador: true} ]
console.log(personas)

const personas_ord = personas.sort((per1, per2) => per2.edad - per1.edad)
console.log(personas_ord)