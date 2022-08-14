const hoy = new Date();
console.log(hoy);
const nacimiento = new Date(2002,1,13);
console.log(nacimiento);

const Es_mas_tarde = hoy > nacimiento;
console.log(Es_mas_tarde);

const dia = nacimiento.getDate();
console.log(dia);
const mes = nacimiento.getMonth();
console.log(mes);
const year = nacimiento.getFullYear();
console.log(year)