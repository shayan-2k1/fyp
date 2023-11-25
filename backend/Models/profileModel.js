const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({

    filename: String,
    contentType: String,
    data: Buffer,
  });
  
  const Profile = mongoose.model('Profile', profileSchema);
  
  module.exports = Profile;
  