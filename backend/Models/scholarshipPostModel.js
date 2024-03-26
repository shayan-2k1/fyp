const mongoose = require('mongoose');

// Define schema for Scholarship
const scholarshipPostSchema = new mongoose.Schema({
    uniId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'universityModel',
            required: true,
    },
    uniname: {
            type: String,
            ref: 'universityModel',
            required: true,
    },
    scholarshipName: {
        type: String,
        required: true
    },
    scholarshipType: {
        type: String,
        required: true
    },
    scholarshipBudget: {
        type: Number,
        required: true
    },
    requiredCGPA:{
        type:Number,
        required: true
    },
    educationPreference: {
        type: String,
        required: true
    },
    countryOfScholarship: {
        type: String,
        required: true
    },
    eligibleDomain: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadlinedate: {
        type: Date,
        // default: Date.now
    }
});

// Create and export the Scholarship model
module.exports = mongoose.model('ScholarshipPosts', scholarshipPostSchema);
