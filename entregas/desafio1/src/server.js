import express from "express"
import router from "./router/index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

router(app)

export default app