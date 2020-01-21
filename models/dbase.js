const Sequelize = require('sequelize')
//Mysql dbase

const sequelize = new Sequelize('posts', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}