import http from "http"

const port = 8080

const server = http.createServer((req, res) => {
  console.log("Se realizó una perición al servidor");
  res.end("Mi primer Hola Mundo desde el Backend")
})

server.listen(port, () => {
console.log(`Server runing at http://localhost:${port}`);
})
