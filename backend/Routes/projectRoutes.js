const express = require("express");
const { project } = require('../Controllers/projectController');
const { getGithubRepos } = require('../Controllers/projectController');
const projectrouter = express.Router();
projectrouter.post("/projectupload",project);
projectrouter.get("/getproject",getGithubRepos);
module.exports = projectrouter;