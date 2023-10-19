const mongoose = require('mongoose');

const academicBackgroundSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'studentModel', // Reference to the user model
    required: true,
  },
  degree :{
    type:String,
    required: true
  },
  discipline :{
    type:String,
    required: true
  },

  country :{
    type:String,
    required: true
  },
  university :{
    type:String,
    required: true
  },
  GPA :{
    type:String,
    required: true
  },
  yearOfCompletion :{
    type:String,
    required: true
  }
});

module.exports = mongoose.model('AcademicBackground', academicBackgroundSchema);
