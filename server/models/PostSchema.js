const mongoose= require('mongoose');
const commentSchema = require("./Comment")
const {Schema} = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  photos: [String],
  tags: [String],
}, {
  timestamps: true
}, {
  comment: {
    type: Schema.Types.ObjectId,
    ref: commentSchema
  }
}
);

module.exports = mongoose.model("PostSchema", postSchema);