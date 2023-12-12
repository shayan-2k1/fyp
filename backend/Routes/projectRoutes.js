const express = require("express");
const { project } = require('../Controllers/project Controller');
const { getGithubRepos } = require('../Controllers/project Controller');
const projectrouter = express.Router();
projectrouter.post("/projectupload",project);
projectrouter.get("/getproject",getGithubRepos);
module.exports = projectrouter;