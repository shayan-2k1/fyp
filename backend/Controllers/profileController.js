const multer = require('multer');
const profileModel = require("../Models/profileModel");

// Multer setup for file upload
const storage = multer.memoryStorage(); // Store file in memory (you can modify this to save to disk or cloud storage)
const upload = multer({ storage });

// API endpoint for file upload
async function Addpicture(req, res) {
  try {
    const { originalname, buffer, mimetype } = req.file;

    // Create a new document in MongoDB
    const newProfilePicture = new profileModel({
      filename: originalname,
      contentType: mimetype,
      data: buffer,
    });

    await newProfilePicture.save();

    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  Addpicture,
};
