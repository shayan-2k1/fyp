const mongoose = require("mongoose") // imports the Mongoose library, which provides an object modeling tool for MongoDB
const studentSchema=mongoose.Schema({ 
    
    username:{
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
    }
   
    },
{
    timestamps:true
})

module.exports=mongoose.model("students",studentSchema); //exports the user schema as a Mongoose model called user. 
//This makes it possible to create, read, update, and delete user documents in the MongoDB database using the methods provided by Mongoose