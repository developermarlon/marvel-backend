const express = require('express')
const app = express()

const moment = require('moment-timezone')
moment().tz("America/Bogota").format()

const NODE_ENV = process.env.NODE_ENV || 'development'
require('dotenv').config({
    path: `.env.${NODE_ENV}`
})

const morgan = require('morgan')
const cors = require('cors')
const port = 2000
const sequelize = require('./database/db')
require('./database/asociations')

//PERMITIR INTERCAMBIO DE RECURSOS DE OTROS SERVIDORES
app.use(cors())
 
//VALIDAR EL PUERTO POR DEFAULT
app.set('port', process.env.PORT || port)
app.set('trust proxy', true)

//LEVANTA EL SERVICIO CON EL PROTOCOLO HTTP
const server = app.listen(app.get('port'), function(){
  console.log("My http server listening on port " + app.get('port') + "...")
  sequelize.sync({force: false}).then(() => {    
    console.log('conexion mediante sequelize')
  })
  .catch(error => {
    console.log(error) 
  })
})

//MIDDLEWARES 
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//DIRECTORIO PUBLICO
app.use(express.static(__dirname + '/public'))

//WEB SOCKETS
const io = require('socket.io')(server);
app.set('io', io) //USO --> const io = req.app.get('io')

io.on('connection', (socket) => {
  socket.on('listen-server', (data) => {
      console.log('listen', data);
  })
})

//RUTAS API
app.use(require('./routes/user'))
app.use(require('./routes/superhero'))
app.use(require('./routes/vote'))




