const ScholarshipApplication = require("../Models/scholarshipApplicationModel");
const AcademicBackground = require("../Models/academicModel"); // Assuming you have this model
const PersonalInfo = require("../Models/personalInfoModel"); // Assuming you have this model
// const { createServerWithCookieHandling } = require('./index');
const certificates = require("../Models/certificateModel.js");
const documents = require("../Models/documentModel");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
// app.use(cookieParser());
const dotenv = require("dotenv");
dotenv.config();

// app.get('/getcookie', function (req, res) {
//   res.send(req.cookies);
// })

async function ScholarshipApplicationController( req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    console.log("nhhjhnh")
    // console.log(cookies)
    // const { scholarshipId, universityName, scholarshipName } = req.cookies;

    
    const secretKey = process.env.SECRET_KEY;
    // console.log(secretKey)
    const token = authorization.split(" ")[1];
    // console.log(token)
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    console.log(decodedToken.id);
    const username = decodedToken.name;
    console.log(username);
    const {
      scholarshipId, universityName, scholarshipName, uniId,
      // ielts,
      // toefl,
      linkedIn,
      github
      // fieldOfInterest,
      // participationYear,
      // achievements,
      
     

    } = req.body;
    const existingApplication = await ScholarshipApplication.findOne({
      userId: userId,
      scholarshipId: scholarshipId
    });
    
    if (existingApplication) {
      return res.status(400).json({ error: "You have already applied for this scholarship" });
    }
    // const existingApplication = await ScholarshipApplication.findOne({
    //   userId: userId,
    //   scholarshipId: scholarshipId
    // });

    // // If an existing application is found, return an error response
    // if (existingApplication) {
    //   return res.status(400).json({ error: "You have already applied for this scholarship" });
    // }
    // Check if the user meets the admission requirements
    // else{
    if (
      // !ielts ||
      // !toefl ||
      !linkedIn ||
      !github 
      // !fieldOfInterest ||
      // !participationYear ||
      // !achievements
    ) {
      return res.status(400).json({ error: "Fill all the required fields!" });
    }

    const academicBackground = await AcademicBackground.findOne({
      user: userId,
    }); // Assuming you have a userId field in AcademicBackground model

    const studentDoc = await documents.findOne({
      user: userId,
    });
    // console.log(studentDoc)
    const documentOptions = studentDoc.files.map((document) => ({
      value: document._id,
      label: document.fileName,
      fileUrl: document.fileUrl, // Assuming you have a fileUrl field in the Certificate model
    }));
    const selectedDocumentIds = req.body.selectedDocuments;
    console.log(selectedDocumentIds) //in frontend these are certificates
    // Filter the document options based on the selected document IDs
    const selectedDocuments = documentOptions.filter((option) =>
      selectedDocumentIds.includes(option.value)
    );

    //   const academicBackground = await AcademicBackground.findById(academicBackgroundId);
    const studentCertificate = await certificates.findOne({ user: userId });
    const certificateOptions = studentCertificate.files.map((certificate) => ({
      value: certificate._id,
      label: certificate.fileName,
      fileUrl: certificate.fileUrl, // Assuming you have a fileUrl field in the Certificate model
    }));

    const selectedCertificateIds = req.body.selectedCertificate;

    // Check if selectedCertificateIds is an array
    // if (!Array.isArray(selectedCertificateIds)) {
    //     return res.status(400).json({ error: "Selected certificates must be an array" });
    // }

    // Filter the certificateOptions based on the selectedCertificateIds
    console.log(selectedCertificateIds)
    const selectedCertificate = certificateOptions.filter((option) =>
      selectedCertificateIds.includes(option.value)
    );
    console.log(certificateOptions);
    const personalInfo = await PersonalInfo.findOne({ user: userId }); // Assuming you have a userId field in PersonalInfo model
    console.log(personalInfo.gender)
    // Populate the fields in the scholarship application form
    const scholarshipApplication = new ScholarshipApplication({
      userId: userId,
      username: decodedToken.name,
      scholarshipId : scholarshipId,
      uniId: uniId,
      universityName: universityName ,
      scholarshipName: scholarshipName
,
      personalInfo: {
        contactNo: personalInfo.contactNo,
        gender: personalInfo.gender,
        nationality: personalInfo.nationality,
        countryOfResidence: personalInfo.countryOfResidence,
        dob: personalInfo.dob,
      },
      academicBackground: {
        degree: academicBackground.degree,
        discipline: academicBackground.discipline,
        country: academicBackground.country,
        university: academicBackground.university,
        GPA: academicBackground.GPA,
        yearOfCompletion: academicBackground.yearOfCompletion,
      },
      extraCurricularActivities: {
        
        certificates: selectedCertificate,
      },
      
      attachDocuments: {
        transcript: selectedDocuments,
        links: {
          linkedIn,
          github,
        },
      },
    });

    await scholarshipApplication.save();
  // }
    return res
      .status(200)
      .json({ message: "Scholarship application created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getapplication(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    // Query the scholarship application collection to retrieve all applications
    const scholarships = await ScholarshipApplication.find();

    // Create an array to store the matched scholarships
    const matchedScholarships = [];

    // Iterate through each scholarship application
    scholarships.forEach((scholarship) => {
      // If the scholarship matches the userId, add it to the matched scholarships array
      if (scholarship.userId.toString() === userId) {
        matchedScholarships.push({
          // scholarshipId: scholarship._id,
          // userId: scholarship.userId,
          scholarshipName: scholarship.scholarshipName,
          universityName: scholarship.universityName,
          status: scholarship.status,
          personalInfo: scholarship.personalInfo,
          academicBackground: scholarship.academicBackground,
          extraCurricularActivities: scholarship.extraCurricularActivities,
          attachDocuments: scholarship.attachDocuments,
          // Add other relevant fields you want to display for each scholarship
        });
        
      }
    });

    // Send the matched scholarships as a response
    res.json(matchedScholarships);
  } catch (error) {
    console.error('Error retrieving scholarships:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



module.exports = {
  ScholarshipApplicationController,
  getapplication
};