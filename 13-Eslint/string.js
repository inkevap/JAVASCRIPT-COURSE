let nombre = "Kevin"
let apellido = "Pocon"
let estudiante = `${nombre} ${apellido}`
let estudiantemayus = estudiante.toUpperCase()
let estudianteminus = estudiante.toLowerCase()
let largo_estudiante = estudiante.length
let letra_nombre = nombre[0]
let letra_apellido = apellido[apellido.length-1]
let nospaces = estudiante.replace(" ", "")
let is_name_in_student = estudiante.includes(nombre)

console.log(nombre)
console.log(apellido)
console.log(estudiante)
console.log(estudiantemayus)
console.log(estudianteminus)
console.log(largo_estudiante)
console.log(letra_nombre)
console.log(letra_apellido)
console.log(nospaces)
console.log(is_name_in_student)

