const express = require('express');
const multer = require('multer');
const { docWallet,showDocuments } = require('../Controllers/documentController');
const docRouter = express.Router();
const GridFsStorage = require('mongodb').GridFSBucket.GridFsStorage;



  
  const upload = multer();

// Apply the upload middleware for the '/upload' route
docRouter.post('/upload', upload.array('files', 10), docWallet);
docRouter.get('/get',showDocuments)
module.exports = docRouter;
