const express = require('express');
const { registerAuthor } = require('../controllers/authorController');
const router = express.Router();

router.post('/', registerAuthor);

module.exports = router;