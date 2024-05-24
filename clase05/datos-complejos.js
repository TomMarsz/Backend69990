import fs from "fs"

const arrayUsuarios = [
  { nombre: "Pepe", apellido: "Argento", edad: 44 },
  { nombre: "Moni", apellido: "Argento", edad: 38 },
  { nombre: "Coki", apellido: "Argento", edad: 20 },
  { nombre: "Paola", apellido: "Argento", edad: 18 },
  { nombre: "Fatiga", apellido: "Argento", edad: 7 }
]

const archivoArgento = "./archivo-argento.json"

async function guardarArchivo(array) {
  await fs.promises.writeFile(archivoArgento, JSON.stringify(array, null, 2))
}

guardarArchivo(arrayUsuarios)

async function leerArchivos() {
  const respuesta = await fs.promises.readFile(archivoArgento, "utf-8")
  const arrayUsuariosNuevo = JSON.parse(respuesta)
  console.log(arrayUsuariosNuevo);
}

leerArchivos()