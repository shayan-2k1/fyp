const personalInfoSchema = require("../Models/personalInfoModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

    let {
      firstName,
      lastName,
      contactNo,
      gender,
      Nationality,
      countryOfResidence,
      dob,
    } = req.body;

    // Check if the user's information already exists in the database
    const existingInfo = await personalInfoSchema.findOne({ user: userId });

    if (existingInfo) {
      // If information exists, update it
      await personalInfoSchema.findOneAndUpdate(
        { user: userId },
        {
          firstName,
          lastName,
          contactNo,
          gender,
          Nationality,
          countryOfResidence,
          dob,
        },
        { new: true } // This ensures you get the updated document
      );

      res.status(200).json({ message: "User information updated successfully" });
    } else {
      // If no information exists, create a new profile
      const profile = new personalInfoSchema({
        user: userId,
        firstName,
        lastName,
        contactNo,
        gender,
        Nationality,
        countryOfResidence,
        dob,
      });

      await profile.save();
      res.status(201).json({ message: "User information created successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
    console.log(error);
  }
}

module.exports = {
  personalInfo,
};
