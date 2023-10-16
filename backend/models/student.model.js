import mongoose from "mongoose";
const studentSchema=mongoose.Schema({ 
    
    id:{
        type:Number,
        required:true,
    },

    name:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },
    study_pref:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        required:true, 
    },
    phoneno:{
        type:String,
        required:true,
    },
    nationality:{
        type:String,
        required:true,
    },

    documents:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"document"
    }]
},
{
    timestamps:true
})

export const studentModel=mongoose.model("student",studentSchema);
