const mongoose= require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }},
  {
    timestamps: true
  })

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
  commentSchema
}

);

model.exports = mongoose.model("postSchema", postSchema);