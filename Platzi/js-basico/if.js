var edad = prompt("Que edad tienes?");

if (edad === 18) {
  console.log("Puedes votar, sera tu 1ra votacion");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aun no puedes votar");
}

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";

var opciones = ["piedra", "papel", "tijera"];
var jugador = prompt("Elije piedra, papel o tijera");
var pc = opciones[Math.floor(Math.random() * 3)];

juego();

function juego() {
  if (jugador === pc) {
    console.log("Hubo un empate!");
  } else if (jugador === "piedra" && pc === "tijera") {
    console.log("Ganaste");
  } else if (jugador === "papel" && pc === "piedra") {
    console.log("Ganaste");
  } else if (jugador === "tijera" && pc === "papel") {
    console.log("Ganaste");
  } else {
    console.log("Perdiste");
  }
}
