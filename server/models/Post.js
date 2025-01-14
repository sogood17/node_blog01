const mongoose= require('mongoose');
const commentSchema = require("./Comment")

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  photos: [String],
  tags: [String]
}, {
  timestamps: true
}, {
  comment: {
    type: objectId,
    ref: commentSchema
  }
}
);

module.exports = mongoose.model("Post", postSchema);