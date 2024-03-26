const mongoose = require("mongoose");
const mentorSchema = mongoose.Schema({
  uniid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'universityModel',
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

}, {
  timestamps: true
});

module.exports = mongoose.model("mentors", mentorSchema);
