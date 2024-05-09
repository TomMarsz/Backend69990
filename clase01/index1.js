// * Variables
let mascota = "Fatiga"
let mascotaEdad = 5

// Concatenación de variables
console.log("Nuestro perro " + mascota + " tiene " + mascotaEdad + " años")
console.log(`Nuestro perrito ${mascota} tiene ${mascotaEdad} años`);
console.log(`Nuestro perrito ${mascota} tiene ${mascotaEdad + 1} años`);

// * Funciones
// Declarativas (soporta Hoisting)
function saludar(curso) {
  console.log(`Hola comisión ${curso}`);
}
saludar("Backendo")

// Expresivas (NO soporta Hoisting)
let nuevoSaludo = function () {
  console.log("Olisss");
}
nuevoSaludo()

// Anónima
let ultimoSaludo = (curso) => {
  console.log(`Saluditos ${curso}`);
}
ultimoSaludo("curso de Backend")

let saluditoResumido = persona => console.log(`Oliiisss ${persona}`);
saluditoResumido("Adrian")

// * Scopes
// Local o global

let global = 2024

function saludosAdrian() {
  console.log(`Hola Adrian, estamos en el año ${global}`);
  let local = "Backend"
}

saludosAdrian()
// console.log(`Curso de ${local}`);

// * Closures
function padre() {
  let deuda = 1500000
  function anidada() {
    console.log(deuda);
  }
  return anidada
}
let clausula = padre()
clausula()

// * Clases
class Persona {
  // Constructor
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }
  saludar() {
    console.log(`Hola soy ${this.nombre}`);
  }
  despedir() {
    console.log(`Chau ${this.nombre}`);
  }
  // Método estático
  static especie() {
    console.log("Soy un ser humano");
  }
  // Propiedad estática
  static planeta = "Tierra"
}

let tinki = new Persona("ThinkiWinki", 50)
let dipsi = new Persona("Dipsi", 50)

console.log(tinki);
console.log(dipsi);

tinki.saludar()
tinki.despedir()

Persona.especie()
console.log(Persona.planeta);

let po = {
  nombre: "Po",
  edad: 60
}

class Empleado extends Persona {
  constructor(nombre, edad, sueldo) {
    super(nombre, edad)
    this.sueldo = sueldo
  }
}
let pepe = new Empleado("Pepe Argento", 55, 1500000)
console.log(pepe);

const animal = {
  especie: "Animal",
  comer: function () {
    console.log("Comiendo");
  }
}

const gato = {
  raza: "Gato",
  maullar: function () {
    console.log("Miau");
  }
}

gato.__proto__= animal

console.log(animal);
console.log(gato);

gato.comer()