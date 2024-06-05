import port from "./configs/server.config.js"
import app from "./server.js"

app.get("/", (req, res) => {
  res.status(404).json({ error: "Use the routes '/api/products' or '/api/carts'" });
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not Found 404' })
})

const server = app.listen(port, () => {
  console.log(`Server runing at http://localhost:${port}`)
})
server.on('error', (err) => console.log(`Server Error: ${err}`))