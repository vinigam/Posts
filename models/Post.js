const dbase = require('./dbase')

const Post = dbase.sequelize.define('posts', {
    title:{
        type: dbase.Sequelize.STRING
    },
    content: {
        type: dbase.Sequelize.TEXT
    }
})

//Post.sync({force: true})  --> Only when create table 

module.exports = Post

