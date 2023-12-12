const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'studentModel',
    // required: true,
  },
  filename: String,
  contentType: String,
  data: Buffer,
  AboutMe:String,
  expertise: [String],
  language:[String],
  interest:[String],
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

