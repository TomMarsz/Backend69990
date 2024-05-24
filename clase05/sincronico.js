import fs from "fs"

// * Sincrónica
// Path
const rutaSin = "./ejemplo-sin.txt"

// Escribir
fs.writeFileSync(rutaSin, "Hola, este es un ejeplo sincrónico")

// Leer
const contenido = fs.readFileSync(rutaSin, "utf-8")
console.log(contenido);

// ¿Qué pasa si el archivo no existe?
if (fs.existsSync("./firulais.txt")) {
  let respuesta = fs.readFileSync("./firulais.txt", "utf-8")
  console.log(respuesta);
} else {
  console.log("El archivo no existe");
}

// Actualizar contenido
fs.writeFileSync(rutaSin, "Hola, actualizamos el archivo pisando la info")

// Agregar al final
fs.appendFileSync(rutaSin, " Y este es un contenido agregado después")
const contenido2 = fs.readFileSync(rutaSin, "utf-8")
console.log(contenido2);

// Eliminar archivo
fs.unlinkSync(rutaSin)