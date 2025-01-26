
npm init
make a file index.js
then import the express and env and mongoose
server set up for this in the package.json  in script "dev":"nodemon index.js"
now check by writing hello in the index.js
set up for import and export for this  "type": "module", in package.json below main
now start making the server 
import express and 
const app =express()
app.listen (5000,()=>{
    console.log("running)
})
make floder structure route ,controllers, modal,lib,middleware
connect to db create file in libs db.js 
npm i mongoose 

