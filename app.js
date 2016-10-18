var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var routes = require('./routes/index');
var app = express();

 
var PORT = process.env.NODE_ENV || 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


var Sequelize = require('sequelize');


var sequelize = new Sequelize("myKlovrUsers","root","1111");
2


// var sequelize = new Sequelize('myKlovrUsers','root', 'root');
var Newusers = sequelize.define('auser',{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  first: Sequelize.STRING,
  last: Sequelize.STRING,
  email: Sequelize.STRING
})

Newusers.sync();

// var sequelize = new Sequelize('myKlovrUsers','root', 'root');
var Newambassador = sequelize.define('ambassador',{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  schoolname: Sequelize.STRING
})

Newambassador.sync();

// var sequelize = new Sequelize('myKlovrUsers','root', 'root');
var Newbusiness = sequelize.define('business',{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  companytitle: Sequelize.STRING,
  companyname: Sequelize.STRING
})

Newbusiness.sync();

// var sequelize = new Sequelize('myKlovrUsers','root', 'root');
var Newschool = sequelize.define('school',{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  schooltitle: Sequelize.STRING,
  schoolname: Sequelize.STRING
})

Newschool.sync();

// var sequelize = new Sequelize('myKlovrUsers','root', 'root');
var Neweducator = sequelize.define('educator',{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  subject: Sequelize.STRING,
  schoolname: Sequelize.STRING
})

Neweducator.sync();

// var sequelize = new Sequelize('myKlovrUsers','root', 'root');
var Newmessage = sequelize.define('message',{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.INTEGER,
  message: Sequelize.STRING
})

Newmessage.sync();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/views/index.html'));
});


//signup form
app.post('/signup', function(req, res){
    Newusers.findAll({
    where: {email: req.body.email}
  }).then(function(userArray){
    console.log(userArray);
    if (userArray.length > 0){
    
     console.log("Already have this email")
          // res.json({have:true})
          res.redirect('/')
    }else{
      Newusers.create({
        first: req.body.first,
        last:req.body.last,
        email:req.body.email
      }).then(function(user){

        console.log(user);
        // res.json(user);
        res.redirect('/')

      })
    }
  })
})


//ambassador form
app.post('/ambassador', function(req, res){
    Newambassador.findAll({
    where: {email: req.body.email}
  }).then(function(ambassadorArray){
    console.log(ambassadorArray);
    if (ambassadorArray.length > 0){
    
     console.log("Already have this email")
          // res.json({have:true})
          res.redirect('/')
    }else{
      Newambassador.create({
        name: req.body.name,
        email:req.body.email,
        school:req.body.schoolname
      }).then(function(ambassador){

        console.log(ambassador);
        // res.json(user);
        res.redirect('/')

      })
    }
  })
})

//business form
app.post('/business', function(req, res){
    Newbusiness.findAll({
    where: {email: req.body.email}
  }).then(function(businessArray){
    console.log(businessArray);
    if (businessArray.length > 0){
    
     console.log("Already have this email")
          // res.json({have:true})
          res.redirect('/')
    }else{
      Newbusiness.create({
        name: req.body.name,
        email:req.body.email,
        companytitle:req.body.companytitle,
        companyname:req.body.companyname
      }).then(function(business){

        console.log(business);
        // res.json(user);
        res.redirect('/')

      })
    }
  })
})

//school form
app.post('/school', function(req, res){
    Newschool.findAll({
    where: {email: req.body.email}
  }).then(function(schoolArray){
    console.log(schoolArray);
    if (schoolArray.length > 0){
    
     console.log("Already have this email")
          // res.json({have:true})
          res.redirect('/')
    }else{
      Newschool.create({
        name: req.body.name,
        email:req.body.email,
        schooltitle:req.body.schooltitle,
        schoolname:req.body.schoolname
      }).then(function(school){

        console.log(school);
        // res.json(user);
        res.redirect('/')

      })
    }
  })
})

//educator form
app.post('/educator', function(req, res){
    Neweducator.findAll({
    where: {email: req.body.email}
  }).then(function(educatorArray){
    console.log(educatorArray);
    if (educatorArray.length > 0){
    
     console.log("Already have this email")
          // res.json({have:true})
          res.redirect('/')
    }else{
      Neweducator.create({
        name: req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        school:req.body.schoolname
      }).then(function(educator){

        console.log(educator);
        // res.json(user);
        res.redirect('/')

      })
    }
  })
})

//message form
app.post('/message', function(req, res){
    Newmessage.findAll({
    where: {email: req.body.email}
  }).then(function(messageArray){
    console.log(messageArray);
    if (messageArray.length > 0){
    
     console.log("Already have this email")
          // res.json({have:true})
          res.redirect('/')
    }else{
      Newmessage.create({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
      }).then(function(message){

        console.log(message);
        // res.json(user);
        res.redirect('/')

      })
    }
  })
})

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});


module.exports = app;