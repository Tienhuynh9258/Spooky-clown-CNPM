const mongoose = require('mongoose');

const HandleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
});

module.exports = Handle = mongoose.model('handles', HandleSchema);
