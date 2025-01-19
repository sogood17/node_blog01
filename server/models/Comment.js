const mongoose= require('mongoose');
const User = require("./User");
const {Schema}= mongoose;

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
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