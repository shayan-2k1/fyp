const express = require ('express');
const {ScholarshipApplicationController } = require ("../Controllers/scholarshipApplicationController")
const applyRoute = express.Router();
applyRoute.post("/applyS" , ScholarshipApplicationController)
module.exports = applyRoute