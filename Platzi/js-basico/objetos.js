// objeto

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  year: 2024,
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.year}`);
  },
};

// objeto con funcion constructora para hacer 30 objetos

function auto(marca, modelo, year) {
  this.marca = marca;
  this.modelo = modelo;
  this.year = year;
}

var autoNuevo = new auto("Tesla", "Model 3", 2024);
var autoNuevo2 = new auto("Tesla", "Model X", 2022);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

// Objeto con loops

var make = [
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Cadillac",
  "Caterham",
  "Chevrolet",
  "Citroen",
  "Dacia",
  "Ferrari",
  "Fiat",
  "Ford",
  "Honda",
  "Infiniti",
  "Isuzu",
  "Iveco",
  "Jaguar",
];

var model = [
  "C-Max",
  "Fiesta",
  "Focus",
  "Mondeo",
  "Ka",
  "S-MA",
  " B-MAX",
  "Grand C-Max",
  "Tourneo Custom",
  "Kuga",
  "Galaxy",
  "Grand Tourneo Connect",
  "Tourneo Connect",
  "EcoSport",
  "Tourneo Courier",
  "Mustang",
  "Transit Connect",
  "Edge",
  "Ka+",
];

var year = [
  "1988",
  "1989",
  "1978",
  "1989",
  "1928",
  "1989",
  "1968",
  "1989",
  "1888",
  "1989",
  "1288",
  "1989",
  "1938",
  "1989",
  "1988",
  "1999",
  "1983",
  "1989",
  "1918",
];

function car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

for (var i = 0; i < make.length && i < model.length && i < year.length; i++) {
    var newCar = new car(make[i], model[i], year[i]);
    console.log(newCar);
}
