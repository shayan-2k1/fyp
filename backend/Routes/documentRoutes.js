const express = require('express');
const multer = require('multer');
const { docWallet } = require('../Controllers/documentController');
const docRouter = express.Router();

// Create storage for multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the destination directory where files will be saved
    cb(null, 'D:/FYP/fyp/backend/uploads');
  },
  filename: (req, file, cb) => {
    // Generate a unique file name
    const uniqueFileName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueFileName);
  },
});

// Create the upload middleware
const upload = multer({ storage });

// Apply the upload middleware for the '/upload' route
docRouter.post('/upload', upload.single('file'), docWallet);

module.exports = docRouter;
