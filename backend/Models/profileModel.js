const mongoose = require('mongoose');

const expertiseSchema = new mongoose.Schema({
  name: String,
 
});

const profileSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer,
  expertise: [expertiseSchema], // Array of expertise objects
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

