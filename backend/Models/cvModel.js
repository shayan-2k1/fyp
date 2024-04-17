const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema({
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

const Curriculum = mongoose.model('CVs', cvSchema);

module.exports = Curriculum;
