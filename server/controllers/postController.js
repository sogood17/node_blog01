const postService = require("../services/postService");

// get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json( {message : err.message});
  }
}

// create post
exports.createPost = async (req, res) => {
  try {
    const newPost = await postService.createPost(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json({message : err.message});
  }
}

// get post by id
exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPost(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({message : err.message});
  }
}

// update post by id
exports.updatePostById = async (req, res) => {
  try {
    const updatedPost = await postService.updatePost(req.params.id, req.body);
    res.status(200).json(updatedPost);
  } catch {
    res.status(400).json({message : err.message})
  }
}


// delete post by id
exports.deletePostById = async (req, res) => {
  try {
    const deletedPost = await postService.deletePost(req.params.id);
    res.status(200).json({message : "delete success"});
  } catch (err) {
    res.status(500).json({message : err.message})
  }
}