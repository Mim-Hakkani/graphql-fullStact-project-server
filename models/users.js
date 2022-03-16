import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
       last:{
        type:String,
        required:true
    },
       firstName:{
        type:String,
        required:true
    },
       email:{
        type:String,
        required:true
    },

    pass:{
        type:String,
        required:true
    }
})

mongoose.model("User",userSchema)