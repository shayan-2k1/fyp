const studyInterestSchema = require("../Models/studyInterestModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function studyPrefrences(req, res) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }
    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    let { studyInterest, placeToStudy, startTime, budgetPref } = req.body;

    // Check if the user's information already exists in the database
    const existingInfo = await studyInterestSchema.findOne({ user: userId });

    if (existingInfo) {
      // If information exists, update it
      await studyInterestSchema.findOneAndUpdate(
        { user: userId },
        {
          studyInterest,
          placeToStudy,
          startTime,
          budgetPref,
        },
        { new: true }
      );

      res.status(200).json({ message: "Study Preferences updated successfully" });
    } else {
      // If no information exists, add study preferences
      const studypref = new studyInterestSchema({
        user: userId,
        studyInterest,
        placeToStudy,
        startTime,
        budgetPref,
      });

      await studypref.save();
      res.status(201).json({ message: "Study Preferences added successfully." });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
    console.log(error);
  }
}

async function getInterest(req,res){
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }
    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    const existingInfo = await studyInterestSchema.findOne({ user: userId });

    if(existingInfo){ 
      res.send(existingInfo.data);
    }
  }
  catch(error){
    res.status(500).json({ error: "Server Error" });
    console.log(error);
  }
}

module.exports = {
  studyPrefrences,
  getInterest,
};
