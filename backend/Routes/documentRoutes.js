const express = require('express');
const multer = require('multer');
const { documentUpload, fetchDocument, delDocument, cvUpload, fetchCv, getExtractedData } = require('../Controllers/documentController');
// const {storeCVData} = require('../Controllers/extractedDataController')
const docRouter = express.Router();
const storage = multer.memoryStorage(); // You can configure storage as needed
const upload = multer({ storage: storage });

docRouter.post('/upload', upload.single('file'), documentUpload);
docRouter.get('/get' , fetchDocument)
docRouter.delete('/delete/:documentId' , delDocument)
docRouter.post('/uploadcv' , upload.single('file'), cvUpload)
docRouter.get('/getCv' , fetchCv)
docRouter.get('/getextracted' , getExtractedData)
// docRouter.post('/extractedData', storeCVData)
module.exports = docRouter;
