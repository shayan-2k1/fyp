const express = require('express');

const { documentUpload } = require('../Controllers/documentController');
const docRouter = express.Router();


docRouter.post('/upload', documentUpload);


module.exports = docRouter;
