var resultado = 1;
var i = 10
factorial: while (i > 0){
    resultado = resultado * i ;
    if(i == 1){
        break factorial;
    }
    i--;
}
console.log(resultado);