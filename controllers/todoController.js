var bodyParser = require('body-parser');
var Todo = require('../models/todo');

//Create a schema - this is like a blueprint
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {

  // 入力情報を取得
  app.get('/todo', function(req, res) {
    //get data from mongodb and pass it to view
    Todo.find({}, function(err, data) {
      if (err) throw err;
      res.render('todo', {
        todos: data
      });
    });

  });




  // 投稿機能
  app.post('/todo', urlencodedParser, function(req, res) {
    //get data from view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data) {
      if (err) throw err;
      res.json(data);
    })
  });




  // 削除機能
  app.delete('/todo/:item', function(req, res) {
    //delete the requested item from mongodb
    Todo.find({
      todo: req.params.item.replace(/\-/g, " ")
    }).remove(function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

};
