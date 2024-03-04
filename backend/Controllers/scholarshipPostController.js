const Scholarship = require('../Models/scholarshipPostModel');
// const Country = require('../models/Country'); // Assuming you have a Country model
const axios = require('axios');
// Controller to create a new scholarship
const createScholarship = async (req, res) => {
    try {
        console.log("before req.body")
        const {
            scholarshipName,
            scholarshipType,
            scholarshipBudget,
            educationPreference,
            countryOfScholarship,
            eligibleDomain,
            description,
            deadlinedate
        } = req.body;
        console.log("nnnn")
        // Validate budget constraint
        if (scholarshipBudget <= 30000) {
            return res.status(400).json({ error: 'Scholarship budget must be greater than 30,000' });
        }

        // Validate date
        const currentDate = new Date();
        const oneYearFromNow = new Date(currentDate);
        oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);
        if (new Date(deadlinedate) > oneYearFromNow) {
            return res.status(400).json({ error: 'Scholarship date must be within one year from today' });
        }

        // Check if the country exists
        const countryExists = await checkCountryExists(countryOfScholarship);
        if (!countryExists) {
            return res.status(400).json({ error: 'Country does not exist' });
        }

        // Create a new scholarship document
        const scholarship = new Scholarship({
            scholarshipName,
            scholarshipType,
            scholarshipBudget,
            educationPreference,
            countryOfScholarship,
            eligibleDomain,
            description,
            deadlinedate
        });

        // Save the scholarship to the database
        const savedScholarship = await scholarship.save();

        res.status(201).json(savedScholarship);
    } catch (error) {
        console.error('Error creating scholarship:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function checkCountryExists(countryName) {
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`;
    
    try {
        const response = await axios.get(url);
        return response.data.length > 0;
    } catch (error) {
        console.error('Error checking country:', error);
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
        console.error('Error fetching scholarships:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Export the controller functions
module.exports = {
    createScholarship,
    getAllScholarships,
    checkCountryExists
};
