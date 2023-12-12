const Scholarship = require('../Models/scholarshipModel');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

async function scholarship(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);

    const userId = decodedToken.id;

    const { scholarshipDetails } = req.body; // Assuming 'githubRepo' is sent from the frontend

    // Find the project for the given userId
    let user = await Scholarship.findOne({ user: userId });

    if (!user) {
      // If project not found, create a new one and add the first link
      const saveScholarships = new Scholarship({
        user: userId,
        arrayOfScholarships: [scholarshipDetails], // Store the first link as an array
      });

      // Save the new project with the user's GitHub repository link
      await saveScholarships.save();

      return res.status(200).json({ message: 'Scholarship saved successfully' });
    } else {
      // If project exists, add the new link to the existing array of links
      user.saveScholarships.push(scholarshipDetails);

      // Save the updated project with the new link added
      await user.save();

      return res.status(200).json({ message: 'Scholarship saved successfully' });
    }
  } catch (error) {
    console.error('Error saving Scholarship', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  scholarship
};