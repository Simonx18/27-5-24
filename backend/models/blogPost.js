const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
});

module.exports = mongoose.model('BlogPost', blogPostSchema);