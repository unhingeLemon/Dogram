const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
  url: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('image', ImageSchema);
