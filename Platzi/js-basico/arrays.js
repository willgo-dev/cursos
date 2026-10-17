var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

// Metodos de Arrays
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

// Filtros
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

// map
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

// find
var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

// for each
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

// some (solamente retorna un booleano)
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});