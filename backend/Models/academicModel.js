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
  GPA: {
    type: Number, // Use Number data type for GPA
    required: true,
    min: 0, // Minimum GPA value
    max: 4,  // Maximum GPA value (e.g., 4.0)
  },
  yearOfCompletion: {
    type: Number, // Use Number data type for year
    required: true,
    min: 2010, // Minimum year (e.g., 1970)
    max: 2023,
  }
});

module.exports = mongoose.model('AcademicBackground', academicBackgroundSchema);
