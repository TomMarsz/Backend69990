import productosMarolio from "./datos.js";

// * 

const pelicula = {
  titulo: "El Padrino",
  director: "Francis Ford Coppola",
  genero: "Drama",
  lanzamiento: 1972
}

let { titulo, director, genero, lanzamiento } = pelicula

console.log(lanzamiento);
console.log(pelicula);

lanzamiento = 1987

console.log(lanzamiento);
console.log(pelicula);

const numeros = [1, 2, 3, 4, 5]

let uno = numeros[0]
let dos = numeros[1]

console.log(uno, dos);

let [indexCero, indexUno, indexDos] = numeros

console.log(indexCero, indexUno, indexDos);

console.log(productosMarolio);

// * Class

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
}

const personita = new Persona("Doble", "LuisMiguel", 50)
console.log(personita);

personita.saludar()

class Estudiante extends Persona {
  #promedio
  constructor(nombre, apellido, edad, carrera, promedio) {
    super(nombre, apellido, edad)
    this.carrera = carrera
    this.#promedio = promedio
  }

  get getPromedio() {
    return this.#promedio
  }
}

const estudiante1 = new Estudiante("Coky", "Argento", 20, "Ing. en Sistemas", 4)
console.log(estudiante1);

let base = 4
let exponente = 3

let resultado = Math.pow(base, exponente)
console.log(resultado);

let resultado2 = base ** exponente
console.log(resultado2);



const losSimpsons = ["Homer", "Marge", "Bart", "Lisa", "Maggie"]
console.log(losSimpsons.indexOf("Maggie"));

console.log(losSimpsons.includes("Maggie"));

// * Object.entries, Object.keys, Object.values
const empleado = {
  nombre: "Pepe",
  apellido: "Argento",
  puesto: "Zapatero"
}

let resultadoEjValues = Object.values(empleado)
console.log(resultadoEjValues);
let resultadoEjKeys = Object.keys(empleado)
console.log(resultadoEjKeys);
let resultadoEjEntries = Object.entries(empleado)
console.log(resultadoEjEntries);

// * Spread Operator
let arrayNombres = ["TinkiWinki", "Dipsi", "Lala", "Po"]
console.log(...arrayNombres);

const coky = {
  nombre: "Coky",
  apellido: "Argento",
  edad: 20
}
console.log(coky);
const coky2 = { ...coky }
console.log(coky2);

let numeritos = [1, 2, 3, 4, 5]
let numeritos2 = [6, 7, 8, 9, 10]

let numeritosConcat = [...numeritos2, ...numeritos]
console.log(numeritosConcat);

// * Nullish

let cliente = null
console.log(cliente ?? "Invitado");