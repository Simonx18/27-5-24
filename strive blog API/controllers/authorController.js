const Author = require('../models/author');

const registerAuthor = async (req, res) => {
  const { name, email, password } = req.body;

  const authorExists = await Author.findOne({ email });

  if (authorExists) {
    res.status(400).send({ message: 'Author already exists' });
  } else {
    const author = await Author.create({
      name,
      email,
      password,
    });

    if (author) {
      res.status(201).json({
        _id: author._id,
        name: author.name,
        email: author.email,
        token: generateToken(author._id),
      });
    } else {
      res.status(400).send({ message: 'Invalid author data' });
    }
  }
};

module.exports = { registerAuthor };