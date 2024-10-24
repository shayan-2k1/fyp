const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  savedScholarships: [
    {
      scholarshipName: {
        type: String,
        required: true,
      },
      deadline: {
        type: Date,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
    },
  ],
  socketId: String,
  notifications: [
    {
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
}, {
  timestamps: true
});

module.exports = mongoose.model("students", studentSchema);
