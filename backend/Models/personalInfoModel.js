const mongoose = require('mongoose');

// Define an array of month names
const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const personalInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'studentModel',
    // required: true,
  },
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  contactNo: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  nationality: {
    type: String,
    // required: true,
  },
  countryOfResidence: {
    type: String,
    required: true,
  },
  dob: {
    day: {
      type: Number,
      min: 1,
      max: 31,
      required: true,
    },
    month: {
      type: String, // Store the month as a string
      enum: monthNames, // Validate that the month value is one of the month names
      required: true,
    },
    year: {
      type: Number,
      min: 1970, 
      max: 2023, 
      // required: true,
    }
  }

});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
