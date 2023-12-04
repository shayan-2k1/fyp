const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer,
  expertise: [String],
  language:[String],
  interest:[String],
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

