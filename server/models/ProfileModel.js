const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  instaUrl: String,
  youtubeUrl: String
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
