const { Schema, model } = require('mongoose');

const UserShema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('testUser', UserShema);
