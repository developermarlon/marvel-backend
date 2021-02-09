const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class User extends Model{}

User.init({
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: DataTypes.STRING(70),
    name: DataTypes.STRING(50),
    password: DataTypes.STRING(100),
},{
    sequelize,
    modelName: 'user'
})

module.exports = User