// * Clase 3: Programación sincronica y asincrónica

// * Programación sincrónica
console.log("Primero"); // Primero
console.log("Segundo"); // Segundo
console.log("Tercero"); // Tercero

function a() {
  console.log("1");
  b()
}
function b() {
  console.log("2");
  c()
}
function c() {
  console.log("3");
}
a() // 1, 2, 3

// * Programación asincrónica
setTimeout(() => {
  console.log("Primer tarea");
}, 1000)
console.log("Segunda tarea");

// * Callbacks
function mostrarResultado(operacion, dato) {
  console.log(`El resultado de la ${operacion} es ${dato}`);
}

function suma(num1, num2, callback) {
  let operacion = "suma"
  let resultado = num1 + num2
  callback(operacion, resultado)
}

function resta(num1, num2, callback) {
  let operacion = "resta"
  let resultado = num1 - num2
  callback(operacion, resultado)
}

suma(10, 5, mostrarResultado)
resta(10, 5, mostrarResultado)

// * .map()
let numeros = [1, 2, 3, 4, 5]
let numerosDuplicados = numeros.map(num => num * 2)
console.log(numerosDuplicados);

// usando For
function mapear(array, callback) {
  let arrayNuevo = []
  for (let i = 0; i < array.length; i++) {
    arrayNuevo.push(callback(array[i]))
  }
  return arrayNuevo
}
function duplicar(num) {
  return num * 2
}
console.log(`Nueva función map casera: ${mapear(numeros, duplicar)}`);

// * Promises
const promise = new Promise((resolve, reject) => {
  let estado = true
  if (estado) {
    resolve("Promesa exitosa")
  } else {
    reject("Promesa fallida")
  }
})
console.log(promise);

// * Then y Catch
promise
  .then(() => console.log("Ejecutando el then"))
  .catch(() => console.log("Ejecutando el catch"))
  .finally(() => console.log("Ejecutando el finally"))

const productos = [
  { id: 1, nombre: "azucar", precio: 1500 },
  { id: 2, nombre: "vino", precio: 1500 },
  { id: 3, nombre: "pan", precio: 1500 }
]

function buscarProductoPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find(producto => producto.id === id)
      if (producto) {
        resolve(producto)
      } else {
        reject("Producto no encontrado")
      }
    }, 2000)
  })
}

buscarProductoPorId(1)
  .then((producto) => console.log(producto))
  .catch((error) => console.log(error))

// * Async y Await
// async function buscarProductoPorIdAsync(id) {
//   const producto = await buscarProductoPorId(id)
//   console.log(producto);
// }

buscarProductoPorIdAsync(4)

async function buscarProductoPorIdAsync(id) {
  try {
    const producto = await buscarProductoPorId(id)
    console.log(producto);
  } catch (error) {
    console.log(error);
  }
}