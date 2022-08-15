const logger = require('./logger');

const impar = num => {
    console.log();
    if(typeof num === "number")
    {
        if (num % 2 === 0 ){
            return num + 1
        }
        if(num %2 === 1){
            console.log("ya es impar");
            return num
        }
    }
    throw new Error("El valor tiene que ser un numero entero");
}

try {
    const Num = impar("x")
    console.log(Num);

} catch (error) {
    logger.error(`Se ha obtenido el siguiente ${error}`)
}

