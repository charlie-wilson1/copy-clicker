const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const CopySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  category: {
    type: String,
    required: true
  },
  subject: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  sequence_name: {
    type: String
  },
  sequence_position: {
    type: Number
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  featured: {
    type: Boolean,
    required: false
  },
  featured_order: {
    type: Number
  }
});

module.exports = Copy = mongoose.model('copy', CopySchema);
