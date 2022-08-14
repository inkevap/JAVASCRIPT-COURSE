const compras =  ["tomate","Aceite","Perejil","Marihuana","Agua mineral"]
console.log(compras);
compras.unshift("Aceite de girasol")
console.log(compras);
compras.shift()
console.log(compras);
const peliculas = [
    {
        titulo: "En busca de la felicidad",
        autor: "Gabriele Muccino",
        año: 2006
    },{
        titulo: "La familia mitchell vs. Las maquinas",
        autor: "Michael Rianda",
        año: 2021
    },{
        titulo: "Spider-man: Into the spider-verse",
        autor: "Petter Ramsey",
        año: 2018
    }
]

const peliculas_post_2010 = peliculas.filter((obj, i) => obj.año > 2010)
console.log(peliculas_post_2010);

const autores = peliculas.map((obj,i) => `${obj.autor}`)
console.log(autores);

const titulos = peliculas.map((obj,i) => `${obj.titulo}`)
console.log(titulos);

const peliculas_y_autores = autores.concat(titulos)
console.log(peliculas_y_autores);

const peliculas_y_autores2 = [...titulos,...autores]
console.log(peliculas_y_autores2);
