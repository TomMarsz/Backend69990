import express from "express"
import petsRouter from "./routes/pets.routes.js"
import usersRouter from "./routes/users.routes.js"
import multer from "multer"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(process.cwd() + '/src/public'))

app.use("/api/pets", petsRouter)
app.use("/api/users", usersRouter)

// app.get("/", (req, res) => {
//   res.render("/pages/index.html")
// })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/img")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

app.post("/upload", upload.single("imagen"), (req, res) => {
  res.send("Upload!")
})

const server = app.listen(PORT, () => {
  console.log(`Server runing at http://localhost:${PORT}`)
})
server.on('error', (err) => console.log(`Server Error: ${err}`))