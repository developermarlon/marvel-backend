const Vote = require('../database/models/vote')
const jwt_decode  = require('jwt-decode')

const addLike = async (req, res) => {
  try {

    const {
      id_superhero
    } = req.body

    const id_user = jwt_decode(req.headers.token).id
    const io = req.app.get('io')

    const result = await Vote.create({
      id_superhero: id_superhero,
      id_user,
      like: true
    })

    io.emit('addLike', 'Voto creado')

    res.status(200).json({
      message: 'Voto creado'
    })

  }catch(error){
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor'
    })
  }
}

const addDislike = async (req, res) => {
  try {

    const {
      id_superhero
    } = req.body

    const id_user = jwt_decode(req.headers.token).id
    const io = req.app.get('io')

    const result = await Vote.create({
      id_superhero: id_superhero,
      id_user,
      like: false
    })

    io.emit('addLike', 'Voto creado')

    res.status(200).json({
      message: 'Voto creado'
    })

  }catch(error){
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor'
    })
  }
}

module.exports = {
  addLike,
  addDislike
}