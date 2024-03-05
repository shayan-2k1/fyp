const mongoose = require('mongoose');

const scholarshipApplicationSchema = new mongoose.Schema({
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
        type: Number
      },
      month: {
        type: Number
      },
      year: {
        type: Number
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
      type: String // Store document URLs or paths
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
  visaRequirements: {
    passport: {
      type: String // Store document URL or path
    }
  },
  attachDocuments: {
    transcript: [{
      type: String // Store document URLs or paths
    }],
    otherCertificates: [{
      type: String // Store document URLs or paths
    }],
    links: {
      linkedIn: {
        type: String
      },
      github: {
        type: String
      },
      other: {
        type: String
      }
    }
  }
}, { timestamps: true });

const ScholarshipApplication = mongoose.model('ScholarshipApplication', scholarshipApplicationSchema);

module.exports = ScholarshipApplication;
