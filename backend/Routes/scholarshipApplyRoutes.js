const express = require ('express');
const {ScholarshipApplicationController, getapplication} = require ("../Controllers/scholarshipApplicationController")
const applyRoute = express.Router();
applyRoute.post("/applyS" , ScholarshipApplicationController)
applyRoute.get("/getApplication" , getapplication)
module.exports = applyRoute