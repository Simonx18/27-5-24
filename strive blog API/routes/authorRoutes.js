const express = require('express');
const { uploadAvatar } = require('../controllers/authorController');
const upload = require('../services/uploadService');
const router = express.Router();

router.patch('/:authorId/avatar', upload.single('image'), uploadAvatar);

module.exports = router;