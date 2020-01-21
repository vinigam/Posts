const Express = require('express')
const app = Express()
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const Post  = require('./models/Post')
//Config
    //Template engine
        app.engine('handlebars', handlebars());
        app.set('view engine', 'handlebars');

    //Body barser
        app.use(bodyparser.urlencoded({extended:false}))
        app.use(bodyparser.json())


//Routes

    app.get('/register', function(req, res){
        res.render('form')
    })
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'ASC']]}).then(function(posts){
          
            res.render('home', {posts: posts})
        })
       
    })
    app.post('/add', function(req,res){
        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then(function(){
            res.redirect('/')
        }).catch(function(err){
            res.send("Fail in register post " + err)
        })
    })
    app.get('/delete/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('Post deleted !')            
        }).catch(function(err){
            res.send("Post does not exists !")
        })
    })
    //Listen

    app.listen(8081, function(){
        console.log("Server running on : http://localhost:8081")
    })