const mongoose = require('mongoose');

const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const scholarshipApplicationSchema = new mongoose.Schema({

 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studentModel',
        required: true,
      },
      username:{

        type: String,
        ref: 'studentModel',
        required: true,
      },
uniId:{
  type: mongoose.Schema.Types.ObjectId,
  // ref: 'scholarshipPostModel', // Reference to the scholarship model
  required: true,
},
      scholarshipId: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'scholarshipPostModel', // Reference to the scholarship model
        required: true,
      },
      scholarshipName
: {
        type: String,
        // ref: 'scholarshipPostModel',
        required: true,
      },
      universityName: {
        type: String,
        // ref: 'scholarshipPostModel',
        required: true,
      },
  personalInfo: {
    contactNo: {
      type: String
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other', 'male' , 'female' , 'other'] // You can adjust the options as needed
    },
    nationality: {
      type: String
    },
    countryOfResidence: {
      type: String
    },
    dob: {
      day: {
        type: Number,
        min: 1,
        max: 31,
        // required: true,
      },
      month: {
        type: String, // Store the month as a string
        enum: monthNames, // Validate that the month value is one of the month names
        // required: true,
      },
      year: {
        type: Number,
        min: 1970, 
        max: 2023, 
        // required: true,
      }
    }
    
  },
  academicBackground: {
    degree: {
      type: String
    },
    discipline: {
      type: String
    },
    country: {
      type: String
    },
    university: {
      type: String
    },
    GPA: {
      type: Number
    },
    yearOfCompletion: {
      type: Number
    }
  },
  extraCurricularActivities: [{
    
    certificates: [{
      value: String,
      label: String,
      fileUrl: String
    }]
  }],
 
  attachDocuments: {
    transcript: [{
      value: String,
      label: String,
      fileUrl: String
    }],
    
    links: {
      linkedIn: {
        type: String
      },
      github: {
        type: String
      }
    }
  },

  status: {
    type: String,
    enum: ['applied', 'Shortlisted', 'rejected', 'accepted'], // Add other possible statuses as needed
    default: 'applied', // Default status when application is created
  }
}, { timestamps: true });

const ScholarshipApplication = mongoose.model('ScholarshipApplication', scholarshipApplicationSchema);

module.exports = ScholarshipApplication