const express = require('express');
const {
  getCommentsByPost,
  getCommentById,
  addComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');
const router = express.Router();

router.get('/:id/comments', getCommentsByPost);
router.get('/:id/comments/:commentId', getCommentById);
router.post('/:id/comments', addComment);
router.put('/:id/comments/:commentId', updateComment);
router.delete('/:id/comments/:commentId', deleteComment);

module.exports = router;