
var mongoose = require('mongoose');
var express = require('express');
var todoController = require('./controllers/todoController');
//connect to the datebase
mongoose.connect('mongodb://test:test@ds113702.mlab.com:13702/todo');

var app = express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
// app.listen(3000);
app.listen(process.env.PORT || 3000);
console.log('Your are listening to port 3000');
