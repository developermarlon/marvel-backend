const Superhero = require('../database/models/superhero')
const Vote = require('../database/models/vote')

const createDefault = async (req, res) => {
  try {
    const result = await Superhero.bulkCreate([
      {
        name: 'Flash',
        new: true,
        photo: '/images/superheros/flash.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
        link: 'https://wikipedia.com'
    },
    {
        name: 'Capitana',
        new: true,
        photo: '/images/superheros/capitana.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
        link: 'https://wikipedia.com'
    },
    {
        name: 'Ironman',
        new: true,
        photo: '/images/superheros/ironman.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
        link: 'https://wikipedia.com'
    },
    {
        name: 'Deadpool',
        new: true,
        photo: '/images/superheros/deadpool.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
        link: 'https://wikipedia.com'
    },
    {
        name: 'Aquaman',
        new: true,
        photo: '/images/superheros/aquaman.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
        link: 'https://wikipedia.com'
    },
    {
        name: 'Spiderman',
        new: false,
        photo: '/images/superheros/spiderman.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
        link: 'https://wikipedia.com'
    },
    {
        name: 'Wolverine',
        new: false,
        photo: '/images/superheros/wolverine.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
        link: 'https://wikipedia.com'
    },
    {
      name: 'Superman',
      new: false,
      photo: '/images/superheros/superman.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
      link: 'https://wikipedia.com'
    },
    {
      name: 'Batman',
      new: false,
      photo: '/images/superheros/batman.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
      link: 'https://wikipedia.com'
    },
    {
      name: 'Hulk',
      new: false,
      photo: '/images/superheros/hulk.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad unde voluptatibus sequi ipsa vel expedita minima doloremque sapiente ipsum, sit quia iusto, voluptatum, perferendis quisquam saepe consectetur. Vero, omnis modi!',
      link: 'https://wikipedia.com'
    }
    ])
    // console.log(result)
    res.status(200).json({
      message: 'Superheroes creados exitosamente'
    })
  }catch(error) {
    console.log(error)
  }
}

const getAll = async (req, res) => {
  try{
    const result =  await Superhero.findAll({
      include: [
        {
            model: Vote,
            required: false,
        }
      ]
    })
    res.status(200).json(result)
  }catch(error){
    
  }
}

module.exports = {
  createDefault,
  getAll
}