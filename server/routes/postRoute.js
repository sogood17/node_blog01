const express = require("express");
const router = express.Router();
const {getAllPosts, createPost, getPostById, updatePostById, deletePostById} = require("../controllers/postController");

router.get('/', getAllPosts);
router.post('/', createPost);
router.get('/:id', getPostById);
router.put('/:id', updatePostById);
router.delete('/:id', deletePostById);

module.exports= router;