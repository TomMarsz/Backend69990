import express from 'express'
import handlebars  from 'express-handlebars'
import PORT from './configs/server.config.js'
import router from  './router/index.js'

const app = express()

app.use(express.static(process.cwd() + '/src/public'))

router(app)

app.engine('handlebars', handlebars.engine())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'handlebars')

const server = app.listen(PORT, () => {
  console.log(`Server runing at http://localhost:${PORT}`)
})
server.on('error', (err) => console.log(`Server Error: ${err}`))