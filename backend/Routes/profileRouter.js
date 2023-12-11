const express = require('express');
const router = express.Router();
const multer = require('multer');
const {Addpicture,AddExpertise, getExpertise,AddInterest, getInterest,saveAboutMe} = require('../Controllers/profileController');

// Multer setup for file upload
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// API endpoint for file upload
router.post('/add-picture', upload.single('profilePicture'), Addpicture);
router.post('/add-expertise', AddExpertise);
router.get('/get-expertise',getExpertise);
router.post('/add-interest', AddInterest);
router.get('/get-interest',getInterest);
router.post('/save-about-me', saveAboutMe);
module.exports = router;
