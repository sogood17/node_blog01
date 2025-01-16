const express = require("express");
const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);
router.get('/:id', getPostById);
router.put('/:id', updatePostById);
router.delete('/:id', deleteUserById);

module.exports= router;