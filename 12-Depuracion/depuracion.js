function Fib(num) {
    let result = [];
    let a = 1;
    let b = 0;
    for(let i = 0; i < num; i++) {
        b = Math.pow(b + a,i)
        result = [...result,b]
        a = b
        console.log(result);
        
    }
    return result
}

z = Fib(6)