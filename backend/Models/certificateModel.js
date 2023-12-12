const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (modify as per your actual user model)
    required: true,
  },
  files: [
    {
      fileName: String,
      fileUrl: String,
      fileType: String,
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
