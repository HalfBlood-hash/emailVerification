
import express from "express"
import { getusername, register, resendOpt, verifyemail } from "../controllers/Auth.js";

const AuthRoute=express.Router();
AuthRoute.post('/register',register);
AuthRoute.get('/get',getusername)
AuthRoute.post('/verifyemail',verifyemail);
AuthRoute.post('/resend',resendOpt)

export default AuthRoute