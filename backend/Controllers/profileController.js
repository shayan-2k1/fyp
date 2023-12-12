const multer = require('multer');
const profileModel = require("../Models/profileModel");
// const Document = require('../Models/documentModel');
// Multer setup for file upload
const storage = multer.memoryStorage(); // Store file in memory (you can modify this to save to disk or cloud storage)
const upload = multer({ storage });
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();
// API endpoint for file upload
async function Addpicture(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    // const userDocuments = await Document.find({ user: decodedToken.id });
    const { originalname, buffer, mimetype } = req.file;

    // Create a new document in MongoDB
    const newProfilePicture = new profileModel({
      user: userId ,
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



async function saveAboutMe(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    const { aboutMe } = req.body; // Assuming 'aboutMe' is sent from the frontend

    // Find the profile for the given userId
    let profile = await profileModel.findOne({ user: userId });

    if (!profile) {
      // If profile not found, create a new one
      const newProfile = new profileModel({
        user: userId,
        AboutMe: aboutMe,
      });

      // Save the new profile with AboutMe and userId
      await newProfile.save();
      return res.status(200).json({ message: 'Profile created with About Me' });
    } else {
      // If profile exists, update the AboutMe field
      profile.AboutMe = aboutMe;

      // Save the updated profile with AboutMe
      await profile.save();
      return res.status(200).json({ message: 'About Me updated successfully' });
    }
  } catch (error) {
    // Handle any errors
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
  

async function AddExpertise(req, res) {
  try {
    const { expertise } = req.body;
 
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    // Create a new document in MongoDB
    const newProfile = new profileModel({
      user: userId ,
      expertise: expertise, // Assuming expertise is an array of strings
    });

    await newProfile.save();

    res.json({ message: 'Expertise added successfully' });
  } catch (error) {
    console.error('Error adding expertise:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getExpertise(req, res) {
  try {
    const expertiseList = await profileModel.find({}, 'expertise');
    res.json(expertiseList.map(profile => profile.expertise));
  } catch (error) {
    console.error('Error fetching expertise:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function AddInterest(req, res) {
  try {
    const { interest } = req.body;

    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    // Create a new document in MongoDB
    const newProfile = new profileModel({
      user: userId ,
      interest: interest, // Assuming expertise is an array of strings
    });

    await newProfile.save();

    res.json({ message: 'Interest added successfully' });
  } catch (error) {
    console.error('Error adding Interest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getInterest(req, res) {
  try {
    const interestList = await profileModel.find({}, 'interest');
    res.json(interestList.map(profile => profile.interest));
  } catch (error) {
    console.error('Error fetching interest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function AddLanguage(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    const { language } = req.body;

    // Create a new document in MongoDB
    const newProfile = new profileModel({
      user: userId ,
      language: language, // Assuming expertise is an array of strings
    });

    await newProfile.save();

    res.json({ message: 'language added successfully' });
  } catch (error) {
    console.error('Error adding Language:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getLanguage(req, res) {
  try {
    const languageList = await profileModel.find({}, 'language');
    res.json(languageList.map(profile => profile.language));
  } catch (error) {
    console.error('Error fetching language:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = {
  Addpicture,
  AddExpertise,
  getExpertise,
  AddInterest,
  getInterest,
  AddInterest,
  getLanguage,
  saveAboutMe,
  AddLanguage
};
