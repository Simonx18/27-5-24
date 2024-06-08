const Comment = require('../models/comment');

const getCommentsByPost = async (req, res) => {
  const { id } = req.params;
  const comments = await Comment.find({ blogPost: id }).populate('author', 'name');
  res.status(200).json(comments);
};

const getCommentById = async (req, res) => {
  const { id, commentId } = req.params;
  const comment = await Comment.findOne({ _id: commentId, blogPost: id }).populate('author', 'name');
  res.status(200).json(comment);
};

const addComment = async (req, res) => {
  const { id } = req.params;
  const { content, author } = req.body;
  const newComment = new Comment({ content, author, blogPost: id });
  await newComment.save();
  res.status(201).json(newComment);
};

const updateComment = async (req, res) => {
  const { id, commentId } = req.params;
  const { content } = req.body;
  const updatedComment = await Comment.findOneAndUpdate(
    { _id: commentId, blogPost: id },
    { content },
    { new: true }
  );
  res.status(200).json(updatedComment);
};

const deleteComment = async (req, res) => {
  const { id, commentId } = req.params;
  await Comment.findOneAndDelete({ _id: commentId, blogPost: id });
  res.status(204).send();
};

module.exports = {
  getCommentsByPost,
  getCommentById,
  addComment,
  updateComment,
  deleteComment,
};