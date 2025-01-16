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

// get post by id
exports.getPost = async (id) => {
  return await Post.findById(id);
}

// update post by id
exports.updatePost = async (id, updatedPostData) => {
  const updatedPost = Post.findByIdAndUpdate(id, updatedPostData, { new: true, runValidators: true })
}

// delete post by id
exports.deletePost = async (id) => {
  const deletedPost = Post.findByIdAndDelete(id);
}