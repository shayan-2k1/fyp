const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures that each email is unique
  },
  
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
