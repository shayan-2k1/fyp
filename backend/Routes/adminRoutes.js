const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController')

// Route to create a new admin
router.post('/acc', adminController.createAdmin);
router.post('/login' , adminController.adminLogin)
router.get('/getUniversities' , adminController.getRegisteredUniversitiesEmails)
module.exports = router;
