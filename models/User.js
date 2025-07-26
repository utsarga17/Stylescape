// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  githubId: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model('User', UserSchema);
