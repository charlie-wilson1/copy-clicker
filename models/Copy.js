const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const CopySchema = new Schema({
  category: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
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
  }
});

module.exports = Copy = mongoose.model('copy', CopySchema);
