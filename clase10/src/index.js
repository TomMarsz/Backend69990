import express from 'express'
import PORT from './configs/server.config.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import router from './router/index.js'

const app = express()

app.use(express.json())
app.use(express.static(process.cwd() + '/src/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'handlebars')

router(app)

const httpServer = app.listen(PORT, () => {
  console.log(`Server runing at http://localhost:${PORT}`)
})
httpServer.on('error', (err) => console.log(`Server Error: ${err}`))

const io = new Server(httpServer)

io.on('connection', socket => {
  console.log(socket.id);

  socket.on('message', data => {
    console.log(data);
  })

  socket.emit('messageServer', 'Hi from server')

  socket.broadcast.emit('messageOther', 'Hi other less than the primary')

  io.emit('messageAll', 'Hi all')
})