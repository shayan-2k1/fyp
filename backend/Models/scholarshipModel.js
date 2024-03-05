const mongoose = require('mongoose');


const scholarshipSchema= new mongoose.Schema({
  scholarshipName:{
    type: String,
   
  },

  deadline:{
    type: Date,
   
  },

  amount: {
    type: Number
    
  }
})

// const scholarshipSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'studentModel',
//     required: true,
//   },

//   arrayOfScholarships:{
//     type: [subSchema],
//     default: [],
//   }
// });

module.exports = mongoose.model('Scholarship', scholarshipSchema);