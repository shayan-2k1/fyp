const mongoose = require('mongoose');

const shortlistStudent = new mongoose.Schema({

    scholarshipId:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'scholarshipPostModel',
        type : String,
        required: true,
    },
    userIds:{
        // ref: 'scholarshipPostModel',
        type : String,
        required: true,
    },

})

module.exports = mongoose.model('shortlisted', shortlistStudent);