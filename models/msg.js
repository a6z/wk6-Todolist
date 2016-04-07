var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds011870.mlab.com:11870/username');
var Schema = mongoose.Schema;

var msgSchema = new Schema({
  name : String,
  content  : String
});
module.exports = mongoose.model('msg', msgSchema);
