const express = require('express');
const router = express.Router();
const authController = require('../Controllers/universityRegistrationController');

// Route to register a new university
router.post('/registerUniversity', authController.registerUniversity);
router.post('/login' , authController.signin);
router.put('/update', authController.update)
// Route to verify the email of a university using OTP
// router.post('/verifyUniversityOTP', authController.verifyUniversityOTP);

module.exports = router;
