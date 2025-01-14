const mongoose= require('mongoose');
const User = require("./User");

const commentSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: User,
    required: true
  },
  content: {
    type: String,
    required: true
  }},
  {
    timestamps: true
  })

  module.exports = mongoose.model("Comment", commentSchema);