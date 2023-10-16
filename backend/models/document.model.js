import mongoose from "mongoose";
const documentSchema=mongoose.Schema({ 
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"student"
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("document",documentSchema);