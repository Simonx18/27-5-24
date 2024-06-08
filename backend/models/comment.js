const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  blogPost: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' },
});

module.exports = mongoose.model('Comment', commentSchema);