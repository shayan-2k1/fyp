const ScholarshipApplication = require("../Models/scholarshipApplicationModel");
const AcademicBackground = require("../Models/academicModel"); // Assuming you have this model
const PersonalInfo = require("../Models/personalInfoModel"); // Assuming you have this model
const certificates = require("../Models/certificateModel.js");
const documents = require("../Models/documentModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function ScholarshipApplicationController(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }

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
      ielts,
      toefl,
      linkedIn,
      github,
      fieldOfInterest,
      participationYear,
      achievements,
    } = req.body;

    // Check if the user meets the admission requirements
    if (
      !ielts ||
      !toefl ||
      !linkedIn ||
      !github ||
      !fieldOfInterest ||
      !participationYear ||
      !achievements
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
    const selectedCertificate = certificateOptions.filter((option) =>
      selectedCertificateIds.includes(option.value)
    );
    console.log(certificateOptions);
    const personalInfo = await PersonalInfo.findOne({ user: userId }); // Assuming you have a userId field in PersonalInfo model

    // Populate the fields in the scholarship application form
    const scholarshipApplication = new ScholarshipApplication({
      userId: userId,
      username: decodedToken.name,

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
        fieldOfInterest,
        participationYear,
        achievements,
        certificates: selectedCertificate,
      },
      admissionRequirements: {
        ielts: ielts,
        toefl: toefl,
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

    return res
      .status(201)
      .json({ message: "Scholarship application created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  ScholarshipApplicationController,
};
