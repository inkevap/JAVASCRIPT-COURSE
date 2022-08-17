const boton = document.querySelector("button")
boton.addEventListener("click",() => {
    alert("Se ha hecho click")
})

$("button").click(() => {
    console.log("Hola, estoy utilizando jQuery");
})
