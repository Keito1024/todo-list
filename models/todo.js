var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  item: String,
  limitDate: Date
});

module.exports = mongoose.model('Todo', todoSchema);
