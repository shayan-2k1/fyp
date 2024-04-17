const express = require("express");
const {scholarship,getSavedScholarships, getScholarshipsUni,saveNotification,getNotification,deleteNotification} = require("../Controllers/scholarshipController") 
const scholarshipRouter = express.Router(); 
scholarshipRouter.get("/get", getScholarshipsUni)
scholarshipRouter.post("/save" ,scholarship)
scholarshipRouter.post("/snotification" ,saveNotification)
scholarshipRouter.get("/getsave",getSavedScholarships)
scholarshipRouter.get("/getnotification",getNotification)
scholarshipRouter.delete("/dismissnotifications/:notificationId", deleteNotification);
module.exports = scholarshipRouter