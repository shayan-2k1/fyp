const express = require("express");
const { fetchusers  } = require('../Controllers/shortlistedInsight');
const inrrouter = express.Router();
inrrouter.get("/fetch-applications/:scholarshipId" , fetchusers)
module.exports = inrrouter;