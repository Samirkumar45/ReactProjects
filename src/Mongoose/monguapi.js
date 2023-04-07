const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  stname: String,
  stcity: String,
  stphone: Number,
});
module.exports = mongoose.model('stuinfo', StudentSchema);
