import express from "express"
import displayRoutes from "express-routemap"
import userRoutes from "./routes/user.routes.js"

const PORT = 8080
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/user", userRoutes)

app.get("/", (req, res) => {
  res.send("Bienvenido a mi primer servidor")
})

const server = app.listen(PORT, () => {
  displayRoutes(app)
  console.log(`Server runing at http://localhost:${PORT}`)
})
server.on('error', (err) => console.log(`Server Error: ${err}`))