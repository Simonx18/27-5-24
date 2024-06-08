const express = require('express');
const { uploadCover } = require('../controllers/postController');
const upload = require('../services/uploadService');
const router = express.Router();

router.patch('/:blogPostId/cover', upload.single('image'), uploadCover);

module.exports = router;