const express = require('express');
const router = express.Router();
const multer = require('multer');
const {Addpicture,AddInterest, saveAboutMe,AddLanguage,getpicture, getAllInterests,getAllLanguages,getAboutMe} = require('../Controllers/profileController');

// Multer setup for file upload
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// API endpoint for file upload
router.post('/add-picture', upload.single('profilePicture'), Addpicture);
router.post('/add-language',AddLanguage);
router.post('/add-interest', AddInterest);
router.get('/get-interest',getAllInterests);
router.get('/get-language',getAllLanguages);
router.post('/save-about-me', saveAboutMe);
router.get('/get-profilepicture', getpicture);
router.get('/get-AboutMe',getAboutMe );
module.exports = router;
