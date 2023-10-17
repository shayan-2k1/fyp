const express = require('express');
const multer = require('multer');
const { docWallet } = require('../Controllers/documentController');
const docRouter = express.Router();



// Create the upload middleware
const upload = multer();

// Apply the upload middleware for the '/upload' route
docRouter.post('/upload', upload.single('file'), docWallet);

module.exports = docRouter;
