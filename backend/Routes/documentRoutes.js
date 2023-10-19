const express = require('express');
const multer = require('multer');
const { docWallet } = require('../controllers/documentController');
const docRouter = express.Router();
const GridFsStorage = require('mongodb').GridFSBucket.GridFsStorage;


const storage = new GridFsStorage({
    url: process.env.MONGO_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      return {
        bucketName: 'uploads', // Name of the collection
        filename: `${Date.now()}-${file.originalname}`,
      };
    },
  });
  
  const upload = multer({ storage });

// Apply the upload middleware for the '/upload' route
docRouter.post('/upload', upload.array('files', 10), docWallet);

module.exports = docRouter;
