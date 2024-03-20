const mongoose = require('mongoose');

const MentorProfileModel = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mentorModel', // Reference to the user model
    required: true,
  },
  name :{
    type:String,
    required: true
  },
  title :{
    type:String,
    required: true
  },

  email :{
    type:String,
    required: true
  },
  tel :{
    type:String,
    required: true
  },
  skills :{
    type:String,
    required: true
  },
  about :{
    type:String,
    required: true
  },
  universityname :{
    type:String,
   
  },
});

module.exports = mongoose.model('mentorProfile', MentorProfileModel);
