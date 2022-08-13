// listas, array o arreglo, (vectores)
const list = [1, "hola, false, undefined, null"]
const lista2 = new Array(1, "hola, false, undefined, null")
const lista3 = new Array(3)
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [list, lista2, lista3]
console.log(list);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["kevo","es", "la ", "riata"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}

movil.anyo = 2019;

console.log(movil.anyo);

// fechas
// Librerias de apoyo moment.js
const ahora = new Date();
const Ahora = new Date();
console.log(Ahora);

const fecha_millis = new Date(500);
console.log(fecha_millis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() +1;
const anyo = ahora.getFullYear();
console.log(dia,mes,anyo);
