const express = require('express');
const router = express.Router();
const multer = require('multer');
const {Addpicture,AddExpertise} = require('../Controllers/profileController');

// Multer setup for file upload
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// API endpoint for file upload
router.post('/add-picture', upload.single('profilePicture'), Addpicture);
router.post('/add-expertise', AddExpertise);
module.exports = router;
