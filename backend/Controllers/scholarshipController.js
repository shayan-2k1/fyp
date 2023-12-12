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

    const { scholarshipDetails } = req.body; // Assuming 'scholarshipDetails' is sent from the frontend

    // Find the scholarship details for the given userId
    let user = await Scholarship.findOne({ user: userId });

    if (!user) {
      // If scholarship details not found, create a new one and add the scholarship details
      const saveScholarships = new Scholarship({
        user: userId,
        arrayOfScholarships: [scholarshipDetails],
      });

      // Save the new scholarship details
      await saveScholarships.save();

      return res.status(200).json({ message: 'Scholarship saved successfully' });
    } else {
      // If scholarship details exist, add the new details to the existing array
      user.arrayOfScholarships.push(scholarshipDetails);

      // Save the updated scholarship details
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
