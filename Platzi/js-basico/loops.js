// for loop
var estudiantes = ["Alejandra", "Willder", "Alibel", "Hernan"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

// while loop
var estudiantes = ["Alejandra", "Willder", "Alibel", "Hernan"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

// Ejercicio

// En este desafío tu función solution recibirá 3 parámetros:

// estudiantes: un array de strings con varios nombres de estudiantes.
// deathCount: un número entero.
// nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
// Tu función debe retornar un array de elementos con las siguientes indicaciones:

// Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

// Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

// 💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

// Ejemplo 1:
// El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi". Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.

// // Input
// solution(["Nico", "Zule"], 0, "Santi")

// // Output
// ["Nico", "Zule", "Santi"]

// Ejemplo 2:
// El array estudiantes contiene los elementos "Juan". "Juanita" y "Daniela". El número deathCount es igual a 1. Y el nuevo estudiante es "Julian". Al deathCount ser igual a 1, el último elemento del array de estudiantes ("Daniela") se debe ir. Y agregamos "Julian" al final.

// // Input
// solution(["Juan", "Juanita", "Daniela"], 1, "Julian")

// // Output
// ["Juan", "Juanita", "Julian"]

// Ejemplo 3:
// El array estudiantes contiene los elementos "Nath". "Luisa" y "Noru". El número deathCount es igual a 2. Y el nuevo estudiante es "Cami". Al deathCount ser igual a 2, los últimos 2 elementos del array de estudiantes ("Luisa" y "Noru") se deben ir. Y agregamos "Cami" al final.

// // Input
// solution(["Nath", "Luisa", "Noru"], 2, "Cami")

// // Output
// ["Nath", "Cami"]

// Respuesta con while loop

function solution(estudiantes, deathCount, nuevo) {
  while (deathCount > 0) {
    estudiantes.pop();
    deathCount--;
  }
  estudiantes.push(nuevo);
  return estudiantes;
}

// Respuesta con for loop

function solution(estudiantes, deathCount, nuevo) {
  for (deathCount; deathCount > 0; deathCount--) {
    estudiantes.pop();
  }
  estudiantes.push(nuevo);
  return estudiantes;
}

// 1. Suma de números pares hasta cierto límite:
// Escribe un programa que solicite al usuario ingresar un número y luego sume todos los números pares desde 0 hasta ese número utilizando un bucle for.

var user = prompt("Enter a number");
var sum = 0;

for (var i = 0; i <= user; i++) {
  sum += i;
}

console.log("La suma de los números pares hasta", user, "es:", sum);

// 2. Contador descendente con un bucle while:
// Crea un programa que imprima los números del 10 al 1 en orden descendente utilizando un bucle while.

var contador = 10;

while (contador > 0) {
  console.log(contador);
  contador--;
}

// 3. Tabla de multiplicar con un bucle for:
// Haz un programa que solicite al usuario ingresar un número y luego imprima la tabla de multiplicar de ese número del 1 al 10 utilizando un bucle for.

var num = prompt("Enter a number");

console.log(`Tabla de multiplicar del ${num} es: `);

for (var i = 0; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}
