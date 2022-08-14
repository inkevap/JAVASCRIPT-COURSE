function none() {
    return true
}
console.log(none());

async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
promesa()

function* idpares() {
    let id = 0;
    while(true){
        yield id+=2
    }
}

const id = idpares()
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);