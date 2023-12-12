const express= require("express"); 
//imports the Express library, which provides a framework for building web applications in Node.js
// const multer = require('multer');
const mongoose=require("mongoose")
const studentRoute = require("./Routes/RegistrationRoutes.js")
const documentRoute = require("./Routes/documentRoutes.js")
const infoRoute = require("./Routes/personalInfoRoutes.js")

const academicRoute = require("./Routes/academicRoutes.js")
const academicPrefRoute = require("./Routes/studyInterestRoutes.js")
const profileRouter=require("./Routes/profileRouter.js")
const projectRouter = require("./Routes/projectRoutes.js")

const cors = require('cors');

require("dotenv").config();
const app= express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use("/student" , studentRoute);
app.use("/document" , documentRoute); 
app.use("/students" , infoRoute); 
app.use("/profile" , profileRouter); 
app.use("/academic" , academicRoute); 
app.use("/studyInterest" , academicPrefRoute); 
app.use("/user", projectRouter)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})

mongoose.connect(process.env.MONGO_URL).then( ()=>{ 
     console.log("connected to mongo db server")
}).catch(err=>{
    console.log(err)
})