const Post = require('../models/Post');

// get all posts
exports.getAllPosts = async () => {
  return await Post.find();
};

// create a new post
exports.createPost = async (postData) => {
  const newPost = new Post(postData);
  return await newPost.save();
};
