const express = require ('express');
const {ScholarshipApplicationController, getID} = require ("../Controllers/scholarshipApplicationController")
const applyRoute = express.Router();
applyRoute.post("/applyS" , ScholarshipApplicationController)
applyRoute.get("/getID", getID)
module.exports = applyRoute