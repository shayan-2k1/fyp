const mongoose = require('mongoose');

// Define a schema for the CV data
const cvdataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studentModel',
        required: true,
      },
    
    education_info: {
        university_name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        degree_level: {
            type: String,
            required: true
        },
        discipline: {
            type: String,
            required: true
        }
    },
    personal_info: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String, // Corrected field name
            required: true
        },
        linkedin: {
            type: String,
            required: true
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


// Define a model for the CV data
const CV = mongoose.model('extractedData', cvdataSchema);

module.exports = CV;
