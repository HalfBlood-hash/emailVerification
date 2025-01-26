

import express from "express";
import dotenv from "dotenv"
import dbCon from "./libs/db.js"
import AuthRoute from "./routes/Auth.route.js";


dotenv.config();
dbCon()


const PORT=process.env.PORT|| 80000
const app =express();
app.use(express.json())
app.use('/auth',AuthRoute)


app.use((err,req,res,next)=>{
    res.send({message:'message from error handler',payload:err.message})
})


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
})
