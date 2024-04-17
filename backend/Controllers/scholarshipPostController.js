const Scholarship = require("../Models/scholarshipPostModel");
// const Country = require('../models/Country'); // Assuming you have a Country model
const axios = require("axios");
const jwt = require("jsonwebtoken");
// Controller to create a new scholarship
const createScholarship = async (req, res) => {
    try {
      // Verify JWT token and extract user ID
      const token = req.headers.authorization.split(" ")[1]; // Assuming token is sent in the Authorization header
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const uniId = decodedToken.id;
      const uniname = decodedToken.uniname;
      // Retrieve scholarship data from request body
      const {
        scholarshipName,
        scholarshipType,
        scholarshipBudget,
        scholarshipLevel,
        countryOfScholarship,
        eligibleDomain,
        description,
        deadlinedate,
        requiredCGPA,
      } = req.body;
  
      // Validate budget constraint
      if (scholarshipBudget <= 30000) {
        return res
          .status(400)
          .json({ error: "Scholarship budget must be greater than 30,000" });
      }
  
      // Validate date
      
  
      // Check if the country exists
      const countryExists = await checkCountryExists(countryOfScholarship);
      if (!countryExists) {
        return res.status(400).json({ error: "Country does not exist" });
      }
  
      // Create a new scholarship document
      const scholarship = new Scholarship({
        uniId:uniId, // Associate scholarship with user ID
        uniname:uniname,
        scholarshipName,
        scholarshipType,
        scholarshipBudget,
        scholarshipLevel,
        countryOfScholarship,
        eligibleDomain,
        description,
        deadlinedate,
        requiredCGPA,
      });
  
      // Save the scholarship to the database
      const savedScholarship = await scholarship.save();
  
      res.status(201).json(savedScholarship);
    } catch (error) {
      console.error("Error creating scholarship:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
   
   

async function checkCountryExists(countryName) {
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
    countryName
  )}?fullText=true`;

  try {
    const response = await axios.get(url);
    return response.data.length > 0;
  } catch (error) {
    console.error("Error checking country:", error);
    return false;
  }
}

// Controller to fetch all scholarships
const getAllScholarships = async (req, res) => {
  try {
    // Fetch all scholarships from the database
    const scholarships = await Scholarship.find();

    res.status(200).json(scholarships);
  } catch (error) {
    console.error("Error fetching scholarships:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

async function getOneScholarship (req,res){

  try {
    const scholarshipId = req.params.scholarshipId; // Assuming the ID is passed as a URL parameter
    const scholarship = await Scholarship.findById(scholarshipId);
    console.log(scholarshipId)
    if (!scholarship) {
      return res.status(404).json({ error: 'Scholarship not found' });
    }

    // If scholarship is found, send it in the response
    res.status(200).json({ scholarship });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
const getOneScholarship = async (req, res) => {
  try {
    const scholarshipId = req.params.scholarshipId; // Assuming the ID is passed as a URL parameter
    console.log(scholarshipId);
    const scholarship = await Scholarship.findById(scholarshipId);
    console.log(scholarshipId)
    if (!scholarship) {
      return res.status(404).json({ error: 'Scholarship not found' });
    }

    // If scholarship is found, send it in the response
    res.status(200).json({ scholarship });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Export the controller functions
module.exports = {
  createScholarship,
  getAllScholarships,
  checkCountryExists,
  getOneScholarship,
}