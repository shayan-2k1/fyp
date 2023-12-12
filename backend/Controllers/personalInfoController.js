const personalInfoSchema = require("../Models/personalInfoModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URL;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function personalInfo(req, res) {

  try {
    const { authorization } = req.headers;
   
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }
    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    let {
      firstName,
      lastName,
      contactNo,
      gender,
      nationality,
      countryOfResidence,
      dob,
    } = req.body;
     
    const profile = new personalInfoSchema({
      user: userId ,
      firstName:firstName,
      lastName:lastName,
      contactNo,
      gender,
      nationality,
      countryOfResidence,
      dob,
    });
    await profile.save();

    res.status(201).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error"});
  }
}

async function getPersonalInfo(req, res) {
  console.log("alinaaaa")
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    // Extract user ID from the token
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    // Find the personal information for the given user ID
    const userProfile = await personalInfoSchema.findOne({ user: userId });

    if (!userProfile) {
      return res.status(404).json({ error: "User profile not found" });
    }

    // Extract relevant information from the user profile
    const { firstname, lastname, contactNo, countryOfResidence } = userProfile;

    res.status(200).json({
      firstname,
      lastname,
      contactNo,
      countryOfResidence,
    });
  } catch (error) {
    console.error("Error fetching personal information:", error);
    res.status(500).json({ error: "Server Error" });
  }
}

module.exports = {
  personalInfo,
  getPersonalInfo,
};
