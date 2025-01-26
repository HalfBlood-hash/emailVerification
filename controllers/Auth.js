
import mongoose from "mongoose";
import usermodel from "../modals/user.js"
import bycrpt from "bcrypt"
import {sendEmailverification,welcomeEmail} from "../middleware/emailverification.js"
const register=async(req,res)=>{
   

        const {email,name,password}=req.body
        if(!email||!name||!password)
        {
            return res.status(400).json({success:false,message:"All felid is required"})
        }
        const existuser=await usermodel.findOne({email})
        if(existuser)
        {
            return res.status(400).json({success:false,message:"user already exits please login"})
        }
       let userlist = new usermodel(req.body)
       let hashpass=await bycrpt.hash(userlist.password,10);
       userlist.password=hashpass
       let code=Math.floor(100000+Math.random()*900000).toString()
       userlist.verificationCode=code
       let newCreatedUser=await userlist.save();
       sendEmailverification(userlist.email,userlist.verificationCode)

        res.status(200).json({success:true,message:"user created",Payload:newCreatedUser})
}
 

const  getusername=async(req,res)=>{
    // console.log("this controller")
    res.send({message:"get username"})


}
const verifyemail=async(req,res)=>{
    let userlist =req.body;
    console.log(userlist);
    let user=await usermodel.findOne({verificationCode:userlist.code})
    if(!user)
    {
       return res.status(400).json({success:true,message:"Code is expored or invalid"})
    }
    console.log(user)
    user.isVerifed=true;
    user.verificationCode=undefined
    await user.save();
    welcomeEmail(user.email,user.name)
    res.status(200).json({success:true,message:"Verification successful"})

}
export {register ,getusername,verifyemail}