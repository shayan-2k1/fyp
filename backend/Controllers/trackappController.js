const ShortList = require("../Models/shortListModel");
const ScholarshipApp = require("../Models/scholarshipApplicationModel");
const University = require("../Models/universityModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function tracking(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    const studentShortlist = await ShortList.findOne({
      userId: userId,
    });

    if (studentShortlist) {
      const scholarshipID = studentShortlist.scholarshipId;
      const userId = studentShortlist.userId;

      return res.status(200).json({ scholarshipID, userId });
    } else {
      return res.status(404).json({ error: "User not found in shortlisted Model" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getLink(req, res) {
  try {
    const uniId = '65e7702b45c1477759476ce1';
    if (!uniId) {
      return res.status(400).json({ error: "University ID not found in cookies" });
    }
    console.log("uniii idddd" , uniId)
    // Find the university using the uniId from cookies
    const university = await University.findById(uniId);
    if (!university) {
      return res.status(404).json({ error: "University not found" });
    }

    // Return the Calendly link
    const { calendly: calendlyLink } = university;
    return res.status(200).json({ calendlyLink });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { tracking, getLink };
