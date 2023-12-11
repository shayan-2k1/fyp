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



async function saveAboutMe(req, res) {
  try {
    console.log("AlinaH")
    const { aboutMe } = req.body; // Assuming you're sending 'aboutMe' from the frontend

    // Find the profile (replace this with your logic to find the correct profile)
    const profile = await profileModel.findOne({ /* your query to find the correct profile */ });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Update the 'AboutMe' field
    profile.AboutMe = aboutMe;

    // Save the updated profile
    await profile.save();

    return res.status(200).json({ message: 'About Me saved successfully' });
  } catch (error) {
    console.error('Error saving About Me:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
async function AddExpertise(req, res) {
  try {
    const { expertise } = req.body;

    // Create a new document in MongoDB
    const newProfile = new profileModel({
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

    // Create a new document in MongoDB
    const newProfile = new profileModel({
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
    const { language } = req.body;

    // Create a new document in MongoDB
    const newProfile = new profileModel({
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
};
