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
        type: String,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
    },
  ],
  socketId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("students", studentSchema);
