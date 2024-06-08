const BlogPost = require('../models/blogPost');

const uploadCover = async (req, res) => {
  const { blogPostId } = req.params;
  const imageUrl = req.file.path;
  await BlogPost.findByIdAndUpdate(blogPostId, { cover: imageUrl });
  res.status(200).send({ message: 'Cover updated successfully', imageUrl });
};

module.exports = { uploadCover };