const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
});

module.exports = mongoose.model('Author', authorSchema);