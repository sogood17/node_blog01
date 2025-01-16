const postService = require("../services/postController");

// get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json( {message : err.message});
  }
}

//create post
exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({message : err.message});
  }
}