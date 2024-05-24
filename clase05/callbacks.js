import fs from "fs"

const conCall = "./ejemplo-call.txt"

// Manejo de errores 
fs.writeFile(conCall, "Nuevo archivo con Callback", (error) => {
  if (error) return console.log("No pudimos crear el archivo");
  fs.readFile(conCall, "utf-8", (error, contenido) => {
    if (error) return console.log("No pudimos leer el archivo");
    console.log(contenido);
    fs.appendFile(conCall, " y acá agregamos más contenido", (error) => {
      if (error) return console.log("No pudimos agregar contenido al archivo");
      fs.unlink(conCall, (error) => {
        if (error) return console.log("No pudimos eliminar el archivo");
      })
    })
  })
})