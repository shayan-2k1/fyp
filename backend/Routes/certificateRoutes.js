const express = require('express');
const multer = require('multer');
const { documentUpload, fetchDocument } = require('../Controllers/certificateController');
const cerRouter = express.Router();
const storage = multer.memoryStorage(); // You can configure storage as needed
const upload = multer({ storage: storage });

cerRouter.post('/upload', upload.single('file'), documentUpload);
cerRouter.get('/get',  fetchDocument);
module.exports=cerRouter