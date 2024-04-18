const personalInfoSchema = require("../Models/personalInfoModel");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const extractedData = require('../Models/extractedDataModel')
// const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URL;
dotenv.config();
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

async function personalInfo(req, res) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    const dataExtraction = await extractedData .findOne({
      user: userId,
    });
    let {
     
      gender,
      nationality,
      countryOfResidence,
      dob,
    } = req.body;

    // Check if personal information already exists for the user
    let profile = await personalInfoSchema.findOne({ user: userId });

    if (!profile) {
      // If personal information doesn't exist, create a new one
      profile = new personalInfoSchema({
        user: userId,
        firstName: dataExtraction.personal_info.first_name,
        lastName: dataExtraction.personal_info.last_name,
        contactNo: dataExtraction.personal_info.phone,
        gender,
        nationality,
        countryOfResidence,
        dob,
      });
    } else {
      // If personal information already exists, update it
      profile.firstName = dataExtraction.personal_info.first_name;
      profile.lastName = dataExtraction.personal_info.last_name;
      profile.contactNo = dataExtraction.personal_info.phone;
      profile.gender = gender;
      profile.nationality = nationality;
      profile.countryOfResidence = countryOfResidence;
      profile.dob = dob;
    }

    await profile.save();

    res.status(201).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}


async function getPersonalInfo(req, res) {
  console.log("alinaaaa")
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    // Find the personal information for the given user ID
    const userProfile = await personalInfoSchema.findOne({ user: userId });

    if (!userProfile) {
      return res.status(404).json({ error: "User profile not found" });
    }

    // Extract relevant information from the user profile
    const { firstName, lastName, contactNo, countryOfResidence, gender,
      nationality,
      dob } = userProfile;

    res.status(200).json({
      firstName,
      lastName,
      contactNo,
      gender,
      nationality,
      dob,
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
