const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postId: { type: String, required: true },
  userId: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);
