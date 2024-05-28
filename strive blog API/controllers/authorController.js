const Author = require('../models/author');
const sendEmail = require('../services/emailService');

const uploadAvatar = async (req, res) => {
  const { authorId } = req.params;
  const imageUrl = req.file.path;
  await Author.findByIdAndUpdate(authorId, { avatar: imageUrl });
  res.status(200).send({ message: 'Avatar updated successfully', imageUrl });
};

module.exports = { uploadAvatar };