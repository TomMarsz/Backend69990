import express from "express";

const app = express()
const port = 8080

app.get("/", (req, res) => {
  res.status(200).send("Welcome")
})

// * Objeto request
//= req.params
app.get("/client/:name", (req, res) => {
  const { name } = req.params
  res.status(200).send(`Client name is ${name}`)
})

const arrProducts = [
  { id: 1, name: "fideos", price: 150 },
  { id: 2, name: "arroz", price: 150 },
  { id: 3, name: "vino", price: 150 },
  { id: 4, name: "azucar", price: 150 },
  { id: 5, name: "carne", price: 150 }
]

app.get("/products", (req, res) => {
  res.status(200).send(arrProducts)
})

app.get("/products/:id", (req, res) => {
  const { id } = req.params
  const findProduct = arrProducts.find(product => product.id === parseInt(id))
  findProduct ? res.status(200).send(findProduct) : res.status(404).send("Product not found")
})


//= req.query
app.get("/user", (req, res) => {
  const { name, lastname } = req.query
  res.status(200).send(`User full name is ${name} ${lastname}`)
})


const server = app.listen(port, () => {
  console.log(`Server runing at http://localhost:${port}`)
})
server.on('error', (err) => console.log(`Server Error: ${err}`))