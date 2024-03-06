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
  personalInfo: {
    contactNo: {
      type: String
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'] // You can adjust the options as needed
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
    fieldOfInterest: {
      type: String
    },
    participationYear: {
      type: Number
    },
    achievements: {
      type: String
    },
    certificates: [{
      value: String,
      label: String,
      fileUrl: String
    }]
  }],
  admissionRequirements: {
    ielts: {
      type: String
    },
    toefl: {
      type: String
    }
  },
//   visaRequirements: {
//     passport: {
//       type: String // Store document URL or path
//     }
//   },
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
  }
}, { timestamps: true });

const ScholarshipApplication = mongoose.model('ScholarshipApplication', scholarshipApplicationSchema);

module.exports = ScholarshipApplication;
