const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

module.exports = Data = mongoose.model('data', DataSchema);
