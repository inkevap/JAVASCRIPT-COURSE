function none() {
    return true
}
console.log(none());

const asinc = new Promise((resolve, reject) => {
    resolve()
})

asinc
    .then(() => {
        setTimeout(console.log("Hola soy una promesa"),5000)     
    })
    .catch((err) => {
        
    });
