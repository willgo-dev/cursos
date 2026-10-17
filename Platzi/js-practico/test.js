//problem 
let name = "Willder";
let lastName = "Gomez";
let userName = "Willdev";
let age = 25;
let email = "willdevgo@gmail.com"
let isAdult = true;
let savedMoney = 1000;
let debts = 100;
let completeName = name + " " + lastName;
let realMoney = savedMoney - debts;

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//solution
function presentation(name, lastName, userName) {
    var completeName = name + lastName;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + userName + ".");
};

//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
//problem
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
};

//solution
const typeOfSuscription = "Basic";

if (typeOfSuscription == "Free") {
    console.log("Solo puedes tomar los cursos gratis")
} else if (typeOfSuscription == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (typeOfSuscription == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
} else if (typeOfSuscription == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
} else {
    console.log("No tienes ninguna suscripcion")
};

//solution with arrays
let typeSuscription = ["Free", "Basic", "Expert", "ExpertPlus"];

let infoSuscription = [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
];

let userSuscription = "Expert";

for (let i = 0; i < typeSuscription.length; i++) {
    if (typeSuscription[i] == userSuscription) {
        console.log(`Si estas suscrito al plan ${typeSuscription[i]}, entonces ${infoSuscription[i]}.`)
    }
}

//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
//for:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
};

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
};

//while:
let i1 = 0;

while (i1 < 5) {
    console.log(`El valor de i es: ${i1}`);
    i1++;
}

let i2 = 10;

while (i2 >= 2) {
    console.log(`El valor de i es: ${i2}`);
    i2--;
};

//Ejercicio funcion
var num1 = 10;
var num2 = 10;
const result = num1 + num2;
var question = prompt(`Cuanto es ${num1} + ${num2}`);

function quizz(){
    if (question == result) {
        alert("Correcto!")
    } else {
        alert("Te equivocaste :(")
    }
}

quizz();

//Ejercicio de arrays con funciones

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
var myArray = ["Miami", "Caracas", "Maracaibo"]

function readArray(array){
    console.log(array[0]);
}

readArray();

//Ejercicio de arrays con loops
//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
var myArray2 = ["Miami", "Caracas", "Maracaibo", "West Palm Beach"]

function readArray(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);      
    }
}

readArray();

//Ejercicio de arrays con objetos
//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
var car = {
    make: "Chevrolet",
    model: "Camaro",
    year: 2025
};

readObject(car);

//opcion 1
function readObject(obj){
    var arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);  
    } 
};

//opcion 2
