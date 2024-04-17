const ShortlistStudent = require('../Models/shortListModel');
const SchlarshipPost = require ("../Models/scholarshipPostModel")
const Student = require ("../Models/studentModel")
const University = require("../Models/universityModel")
const jwt=require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config();
// Controller to shortlist a student for a scholarship
async function shortlistedScholarship(req, res) {
    try {
      const { authorization } = req.headers;
  
      if (!authorization) {
        return res.status(401).json({ error: "Unauthorized!" });
      }
  
      const token = authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decodedToken.id;
      console.log(userId);
  
      const { scholarshipId } = req.body; // Make sure scholarshipId is available in the request body
      console.log(scholarshipId);
      let existingShortlist = await ShortlistStudent.findOne({ scholarshipId });
  
      if (existingShortlist) {
        if (existingShortlist.userIds.includes(userId)) {
          return res.status(400).json({ error: 'Student already shortlisted for this scholarship' });
        } else {
          existingShortlist.userIds.push(userId);
          await existingShortlist.save();
        }
      } else {
        const shortlist = new ShortlistStudent({ scholarshipId, userIds: [userId] });
        await shortlist.save();
      }
  
      res.status(201).json({ message: 'Student successfully shortlisted for the scholarship' });
    } catch (error) {
      console.error('Error shortlisting student:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

async function showShortlisted(req, res) {
    try {
      // Extract uniId from the authorization header
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const secretKey = process.env.SECRET_KEY;
      const token = authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, secretKey);
      const uniId = decodedToken.id;
  
      // Find all scholarships associated with the uniId
      const scholarships = await SchlarshipPost.find({ uniId });
  
      if (!scholarships) {
        return res.status(404).json({ error: "No scholarships found" });
      }
      const scholarshipIdArray = [];
      // Extract scholarshipIds from the scholarships found
      const scholarshipIds = scholarships.map((scholarship) => scholarship._id);
      console.log(scholarshipIds)
      // Find shortlisted scholarships based on the extracted scholarshipIds
      const shortlistedScholarships = await ShortlistStudent.find({
        scholarshipId: { $in: scholarshipIds },
      });
      console.log("i am shortlisted",shortlistedScholarships)
      if (!shortlistedScholarships || shortlistedScholarships.length === 0) {
        console.log("No shortlisted scholarships found");
      } else {
        

// Iterate over each shortlisted scholarship and push its scholarshipId into the array
shortlistedScholarships.forEach((scholarship) => {
  scholarshipIdArray.push(scholarship.scholarshipId);
});

// Now scholarshipIdArray contains all the scholarshipIds
        
      }
      console.log("Scholarship IDs:", scholarshipIdArray);
      const documents = await SchlarshipPost.find({ _id: { $in: scholarshipIdArray } });

      documents.forEach((document) => {
        console.log("University Name:", document.scholarshipName);
      });
      
      const userIds = shortlistedScholarships.map((scholarship) => scholarship.userId);
   
      // Find students based on the extracted userIds
      const students = await Student.find({ _id: { $in: userIds } });
  
      if (!students) {
        return res.status(404).json({ error: "No students found" });
      }

      
      const shortlistedStudents = students.map((student) => ({
        username: student.username,
        email: student.email,
        // Get the university name using the university ID
      }));
    //   const uniname = universities.uniname
    return res.status(200).json({ shortlistedStudents, scholarshipName: documents.map(document => document.scholarshipName) });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}



module.exports={
    shortlistedScholarship,
    showShortlisted
}