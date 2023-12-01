const express = require('express');
const multer = require('multer');
const { documentUpload, fetchDocument } = require('../Controllers/documentController');
const docRouter = express.Router();
const storage = multer.memoryStorage(); // You can configure storage as needed
const upload = multer({ storage: storage });

docRouter.post('/upload', upload.single('file'), documentUpload);
docRouter.get('/get' , fetchDocument)

module.exports = docRouter;
