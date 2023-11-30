const express = require('express');
const multer = require('multer');
const { documentUpload } = require('../Controllers/documentController');
const docRouter = express.Router();
const storage = multer.memoryStorage(); // You can configure storage as needed
const upload = multer({ storage: storage });

docRouter.post('/upload', upload.single('file'), documentUpload);


module.exports = docRouter;
