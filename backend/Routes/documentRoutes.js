const express = require('express');
const multer = require('multer');
const { docWallet } = require('../Controllers/documentController');
const docRouter = express.Router();
const GridFsStorage = require('multer-gridfs-storage');



  
  const upload = multer();

// Apply the upload middleware for the '/upload' route
docRouter.post('/upload', upload.array('files', 10), docWallet);

module.exports = docRouter;
