const mongoose = require('mongoose');

const studyInterestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'studentModel', // Reference to the user model
    required: true,
  },
  studyInterest:{
    type: String,
    required:true
  },
  placeToStudy:{
    type:String,
    required:true
  },
  startTime: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        // Check if the start time is in 2024
        const year = value.getFullYear();
        return year === 2024;
      },
      message: 'Start time must be in 2024.',
    },
  },
  budgetPref: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        // Check if the budget preference is greater than or equal to 200,000 (2 lakh) and less than 20,000,000 (2 crore)
        return value >= 200000 && value < 20000000;
      },
      message: 'Budget preference must be greater than or equal to 2 lakh and less than 2 crore.',
    },
  },
});

module.exports = mongoose.model('StudyInterest', studyInterestSchema);
