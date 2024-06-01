const jwt = require('jsonwebtoken');
const Author = require('../models/author');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const author = await Author.findOne({ email });

  if (author && (await author.matchPassword(password))) {
    res.json({
      _id: author._id,
      name: author.name,
      email: author.email,
      token: generateToken(author._id),
    });
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
};

const getMe = async (req, res) => {
  const author = await Author.findById(req.user.id).select('-password');
  res.json(author);
};

module.exports = { login, getMe };