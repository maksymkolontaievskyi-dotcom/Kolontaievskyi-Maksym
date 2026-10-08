let number = 47;

let tens = (number - number % 10) / 10;
let units = number % 10;

console.log(tens);
console.log(units);
