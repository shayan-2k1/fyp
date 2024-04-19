const express =require("express");
const { fetchusers ,getuser ,updateStatus} = require('../Controllers/shortlistedInsight');
const inrrouter = express.Router();
inrrouter.get("/fetch-applications/:scholarshipId" , fetchusers)
inrrouter.get("/fetchApplications/:applicationId" , getuser)
inrrouter.put("/updateStatus/:applicationId" , updateStatus)
module.exports = inrrouter;