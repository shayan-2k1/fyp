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
async function getpicture(req, res) {
  try {
   
    // Find the profile document for the given userId
    const profile = await profileModel.findOne({ user: userId });

    if (!profile || !profile.data) {
      return res.status(404).json({ error: 'Profile picture not found' });
    }

    // Send the profile picture data as a response
    res.set('Content-Type', profile.contentType);
    res.send(profile.data);
  } catch (error) {
    console.error('Error getting profile picture:', error);
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
async function getAboutMe(req, res) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    // Find the profile for the given userId
    const profile = await profileModel.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Retrieve the AboutMe field from the profile
    const aboutMe = profile.AboutMe;

    return res.status(200).json({ aboutMe });
  } catch (error) {
    // Handle any errors
    return res.status(500).json({ error: 'Internal Server Error' });
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

    // Find the existing profile document for the user
    const existingProfile = await profileModel.findOne({ user: userId });

    if (!existingProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Update the 'interest' field by adding the new interest
    existingProfile.interest.push(interest);

    // Save the updated profile
    await existingProfile.save();

    res.json({ message: 'Interest added successfully' });
  } catch (error) {
    console.error('Error adding Interest:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function AddLanguage(req, res) {
  try {
    const { language } = req.body;

    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    // Find the existing profile document for the user
    const existingProfile = await profileModel.findOne({ user: userId });

    if (!existingProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Update the 'interest' field by adding the new interest
    existingProfile.language.push(language);

    // Save the updated profile
    await existingProfile.save();

    res.json({ message: 'language added successfully' });
  } catch (error) {
    console.error('Error adding language:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}





async function getAllInterests(req, res) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    // Find all profile documents for the user
    const userProfiles = await profileModel.find({ user: userId });

    if (userProfiles.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Extract interests from each profile document
    const interests = userProfiles.map(profile => profile.interest);

    res.json({ interests });
  } catch (error) {
    console.error('Error getting interests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllLanguages(req, res) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    // Find all profile documents for the user
    const userProfiles = await profileModel.find({ user: userId });

    if (userProfiles.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Extract interests from each profile document
    const languages = userProfiles.map(profile => profile.language);

    res.json({ languages });
  } catch (error) {
    console.error('Error getting languages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  Addpicture,
  getpicture,
  AddInterest,
  getAllInterests,
  AddLanguage,
  getAllLanguages,
  saveAboutMe,
  getAboutMe,
  
 
};
