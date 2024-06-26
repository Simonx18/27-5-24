const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const passport = require('passport');
require('./config/passport');

const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
app.use(cors({ origin:'https://27-5-24-simonx18s-projects.vercel.app' }));
const { protect } = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(passport.initialize());
app.use('/authors', authorRoutes);
app.use('/blogPosts', protect, postRoutes);
app.use('/blogPosts', protect, commentRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});