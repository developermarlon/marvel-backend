const { Sequelize } = require('sequelize')
const { db } = require('../constants/config')

const sequelize = new Sequelize(
    db.database,
    db.user,
    db.password, {
        host: db.host,
        dialect: db.dialect,
        port: db.port,
        timezone: 'America/Bogota',
        dialectOptions: {
			timezone: "local"
		}
    }
    
)

module.exports = sequelize