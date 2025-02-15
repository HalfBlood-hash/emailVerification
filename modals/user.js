
import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    isVerifed:{
        type:Boolean,
        default:false
    },
    verificationCode:String,
    
},{timestamps:true})
const usermodel=mongoose.model("user",userSchema)

export default usermodel