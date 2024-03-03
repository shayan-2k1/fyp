const mongoose = require("mongoose") // imports the Mongoose library, which provides an object modeling tool for MongoDB
const universitySchema=mongoose.Schema({ 
    
    uniname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true, 
    },
    phoneNumber: {
        type: String
      },
      address: {
        type: String
      }
    //   },
    //   otp: {
    //     type: String // Add this field for storing OTP
    // }
   
    },
{
    timestamps:true
})

module.exports=mongoose.model("universities",universitySchema); //exports the uni schema as a Mongoose model called user. 
//This makes it possible to create, read, update, and delete user documents in the MongoDB database using the methods provided by Mongoose