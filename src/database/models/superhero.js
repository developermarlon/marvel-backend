const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class Superhero extends Model{}

Superhero.init({
    id_superhero: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING(50),
    new: DataTypes.BOOLEAN,
    photo: DataTypes.STRING(100),
    description: DataTypes.STRING(250),
    link: DataTypes.STRING(50)
},{
    sequelize,
    modelName: 'superhero'
})

module.exports = Superhero