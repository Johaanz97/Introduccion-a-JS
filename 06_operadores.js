// Operadores aritméticos
let a = 10;
let b = 5;
console.log(a + b); // 15 (suma) 
console.log(a % b); // 0 (modulo) 
console.log(a ** b); // 100000 (exponenciacion)

// Operadores de comparación
console.log(a == 10); // true (igualdad)
console.log(a === "10"); // false (igualdad estricta)
console.log(a > b); // true (mayor que)

// Operadores logicos
let esmayor = a > b;
let espar = a % 2 === 0;
console.log(esMayor && esPar); // true (AND)
console.log(!esMayor); // false (NOT)

// Operadores de asignación
let c = 20;
c += 10; // c = c+ 10~
console.log(c); // 30

let base = 10;
let altura = 5;
let area = base * altura;
console.log(area); // 50

let num1 = 10;
let num2 = 20;
console.log(num1 < num2); //true

let esMayor = true;
let esPar = false;
console.log(esMayor && esPar); // false
console.log(esMayor || esPar); // true

let valor = 10;
valor += 5;
console.log(valor); // 15

let numero = 8;
console.log(numero > 0 && numero % 2 === 0); // true