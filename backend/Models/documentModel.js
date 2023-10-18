const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'studentModel',
    required: true,
  },
  files: [
    {
      originalName: String,
      storedName: String,
      fileType: String,
      uploadedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
