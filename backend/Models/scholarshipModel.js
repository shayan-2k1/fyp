const mongoose = require('mongoose');


const subSchema= new mongoose.Schema({
  scholarshipName:{
    type: String
  },

  deadline:{
    type: String
  },

  amount: {
    type: Number
  }
})

const scholarshipSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'studentModel',
    required: true,
  },

  arrayOfScholarships:{
    type: [subSchema],
    default: [],
  }
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);