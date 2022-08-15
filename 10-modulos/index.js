import * as controller from "./modulos/controller.js"
import chalk from 'chalk';
let val = controller.suma(1,2)
console.log(chalk.bgBlue(`El valor de la suma es ${val} `))
let val2 = controller.multiplica(4,5)
console.log(chalk.bgGreenBright(`El valor de la multiplicacion es ${val2} `))

