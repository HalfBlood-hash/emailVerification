

import mongoose from "mongoose";


const dbCon= async()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/mydatabase')
        console.log("connection sucessful");
    }
    catch{
        console.log("connection failed ",err);
    }
}


export default dbCon