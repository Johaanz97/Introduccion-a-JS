let nombre = "Johan";
let edad = 20;

// Con el operador +
console.log("Hola, me llamo " + nombre + " y tengo " + edad + " años.");

// Con template literals (recomendado)
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

let a = 5;
let b = 3;

console.log("Resultado: " + a + b); 
console.log("Resultado: " + (a + b)); 
console.log(`Resultado: ${a + b}`); 

let producto = "Mouse";
let cantidad = 2;
let precio = 15000;
console.log(`Producto: ${producto}
Cantidad: ${cantidad}
Precio unitario: $${precio}
Total a pagar: $${cantidad * precio}`);

// Producto: Mouse
// Cantidad: 2
// Precio unitario: $15000
// Total a pagar: $30000

let ciudad = "medellin";
let temperatura = 14;
console.log("La temperatura en ${ciudad} es de ${temperatura} °C");