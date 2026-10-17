// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero,typeof decimal)

// 2. Notacion cientifica
const cientifico = 5e3

// 3. Infinitos y NaN
const infinito=Infinity
const noEsUnNumero=NaN

// 4. Operaciones aritmeticas

// 4.1 Suma, Resta, Multiplicacion y Division
const suma = 3 + 4
const resta = 4 - 4
const mutiplicacion = 4 * 7
const division = 16 / 2

// 4.2 Modulo y Exponenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3

// Precision
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)