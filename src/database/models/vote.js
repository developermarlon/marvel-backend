const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class Vote extends Model{}

Vote.init({
    id_vote: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: DataTypes.INTEGER,
    id_superhero: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN
},{
    sequelize,
    modelName: 'vote'
})

module.exports = Vote