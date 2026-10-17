var numero = 1;

switch (numero) {
  case 1:
    console.log("Soy uno!");
    break;
  case 10:
    console.log("Soy un 10!");
    break;
  case 100:
    console.log("Soy un 100!");
    break;
  default:
    console.log("No soy nada");
}

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function name(jugador, pc) {
  switch (true) {
    case jugador === pc:
      console.log("Empate");
      break;
    case (jugador === "piedra" && pc === "tijera") ||
      (jugador === "papel" && pc === "piedra") ||
      (jugador === "tijera" && pc === "papel"):
      console.log("Ganaste!");
      break;
    default:
      console.log("Perdiste");
      break;
  }
}

