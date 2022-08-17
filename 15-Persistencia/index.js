const nombre = "Kevin"
const apellido = "Pocon"
const persona = {
    nombre,
    apellido
}
caducidad = new Date().getTime() + 120000
caducidad = new Date(caducidad).toUTCString()
console.log(caducidad);


