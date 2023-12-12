const academicBackgroundSchema = require("../Models/academicModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function academicBackground(req, res) {

  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }
    let {
      degree,
      discipline,
      country,
      university,
      GPA,
      yearOfCompletion
    } = req.body



    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    const existingInfo = await academicBackgroundSchema.findOne({ user: userId });

    if (existingInfo) {
      // If information exists, update it
      await academicBackgroundSchema.findOneAndUpdate(
        { user: userId },
        {
          degree: req.body.degree,
          discipline: req.body.discipline,
          country: req.body.country,
          university: req.body.university,
          GPA: req.body.GPA,
          yearOfCompletion: req.body.yearOfCompletion,
        },
        { new: true }
      );


      res.status(200).json({ message: "Academic Background updated successfully" });
    } else {
      // If no information exists, add academicbackground
      const academicBackground = new academicBackgroundSchema({
        user: userId,
        degree,
        discipline,
        country,
        university,
        GPA,
        yearOfCompletion
      });

      await academicBackground.save();
      res.status(201).json({ message: "Academic Background added successfully." });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
    console.log(error);
  }
}
async function getAcademicBackground(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    const academicBackground = await academicBackgroundSchema.findOne({ user: userId });

    if (!academicBackground) {
      return res.status(404).json({ error: "Academic background not found" });
    }

    res.status(200).json(academicBackground);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
module.exports = {
  academicBackground,
  getAcademicBackground,
};
