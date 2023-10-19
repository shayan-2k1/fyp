const express = require("express");
const { signup } = require('../controllers/studentRegistrationController');
const { signin } = require('../controllers/studentRegistrationController');
const { update } = require('../controllers/studentRegistrationController');
const stdrouter = express.Router();
stdrouter.post("/signup",signup);

stdrouter.post("/signin",signin);
stdrouter.put("/update" , update)
module.exports = stdrouter;
