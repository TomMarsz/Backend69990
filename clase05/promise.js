import fs from "fs"

const conProm = "./texto-prom.txt"

async function operacionesAsincronicas() {
  // Lo creo
  await fs.promises.writeFile(conProm, "Nuevo archivo con promise")
  // Lo leo
  let respuesta = await fs.promises.readFile(conProm, "utf-8")
  console.log(respuesta);
  // Agrego texto
  await fs.promises.appendFile(conProm, " y agregamos este texto")
  // Releo
  respuesta = await fs.promises.readFile(conProm, "utf-8")
  console.log(respuesta);
  // Elimino
  await fs.promises.unlink(conProm)
}

operacionesAsincronicas()

