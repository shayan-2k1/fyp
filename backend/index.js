import express from "express" 
import mongoose from "mongoose";
import {sRoute} from "./routes/student.routes.js"
import cors from "cors"

import dotenv, { config } from "dotenv"
dotenv.config();
const app= express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use("/students" , sRoute);

app.listen(config.env.PORT || 3000, ()=>{
    console.log(`App listening on port ${config.env.PORT}`)
})

mongoose.connect(config.env.ATLAS_URI).then( ()=>{ 
     console.log("connected")
}).catch(err=>{
    console.log(err)
})