

import {Verification_Email_Template, Welcome_Email_Template} from "./emailTemplate.js"
import transporter from "./emailconfig.js"



   const sendEmailverification=async(email,verificationCode)=>{
    try{
        const info = await transporter.sendMail({
            from: '"laptophub 👻" <sanusatyam28@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "verification code", // Subject line
            text: "email verifaication code", // plain text body
            html:Verification_Email_Template.replace("{verificationCode}",verificationCode), // html body
          });
        console.log(info);
        }
    catch(error)
    {
        console.log("error form node a mailer",error);
    }
  }
   const welcomeEmail=async(email,name)=>{
    try{
        const info = await transporter.sendMail({
            from: '"laptophub 👻" <sanusatyam28@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "verification code", // Subject line
            text: "email verifaication code", // plain text body
            html:Welcome_Email_Template.replace("{name}",name), // html body
          });
        console.log(info);
        }
    catch(error)
    {
        console.log("error form node a mailer",error);
    }
  }

  export  {sendEmailverification,welcomeEmail}