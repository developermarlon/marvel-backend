
const User = require('./models/user')
const Superhero = require('./models/superhero')
const Vote = require('./models/vote')

// MODEL User
User.hasMany(Vote, {foreignKey: 'id_user'})

//MODEL Superhero
Superhero.hasMany(Vote, {foreignKey: 'id_superhero'})

//MODEL Vote
Vote.belongsTo(User, {foreignKey: 'id_user'})
Vote.belongsTo(Superhero, {foreignKey: 'id_superhero'})