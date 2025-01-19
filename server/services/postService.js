const PostSchema = require("../models/PostSchema.js");
const User = require("../models/User.js")

// get all posts
exports.getAllPosts = async () => {
  return await PostSchema.find();
};

// create a new post
exports.createPost = async (postData) => {
  const newPost = new PostSchema(postData);
  return await newPost.save();
};

// get post by id
exports.getPost = async (id) => {
  return await PostSchema.findById(id);
}

// update post by id
exports.updatePost = async (id, updatedPostData) => {
  const updatedPost = PostSchema.findByIdAndUpdate(id, updatedPostData, { new: true, runValidators: true })
}

// delete post by id
exports.deletePost = async (id) => {
  const deletedPost = PostSchema.findByIdAndDelete(id);
}