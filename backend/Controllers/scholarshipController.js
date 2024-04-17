const Students = require('../Models/studentModel');
const ScholarshipPost = require('../Models/scholarshipPostModel')
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
    const { scholarshipName, deadline, amount } = req.body;

    // Find the user
    const user = await Students.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Initialize savedScholarships array if not present
    user.savedScholarships = user.savedScholarships || [];

    // Add scholarship details to the savedScholarships array
    user.savedScholarships.push({
      scholarshipName,
      deadline,
      amount,
    });

    // Save the user document
    await user.save();

    res.status(201).json({ message: 'Scholarship details saved successfully' });
  } catch (error) {
    console.error('Error saving Scholarship', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function saveNotification(req, res) {
  console.log("In save scholarship")
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);

    const userId = decodedToken.id;
    const { message } = req.body;

    // Find the user
    const user = await Students.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Initialize notifications array if not present
    user.notifications = user.notifications || [];

    // Add notification to the notifications array
    user.notifications.push({
      message,
      timestamp: new Date(),
    });

    // Save the user document
    await user.save();

    res.status(201).json({ message: 'Notification saved successfully' });
  } catch (error) {
    console.error('Error saving Notification', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function getSavedScholarships(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);

    const userId = decodedToken.id;
    const user = await Students.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ savedScholarships: user.savedScholarships });
  } catch (error) {
    console.error('Error fetching saved scholarships', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function getNotification(req, res) {
  console.log("in get notification")
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);

    const userId = decodedToken.id;
    const user = await Students.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ notifications: user.notifications });
  } catch (error) {
    console.error('Error fetching saved notifications', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getScholarshipsUni (req,res) {

try {

  const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    // console.log(token)
    const decodedToken = jwt.verify(token, secretKey);
    // console.log(decodedToken)
    const uniId = decodedToken.id;
    console.log(uniId)
    const scholarships = await ScholarshipPost.find({ uniId });

    if (!scholarships || scholarships.length === 0) {
      return res.status(404).json({ error: 'No scholarships found for the specified university' });
    }

    res.status(200).json({ scholarships });


  }catch (error) {
  console.error('Error fetching scholarships', error);
  res.status(500).json({ error: 'Internal Server Error' });
}

}
async function deleteNotification(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);

    const userId = decodedToken.id;
    const { notificationId } = req.params; // Assuming the notificationId is passed as a URL parameter

    // Find the user
    const user = await Students.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Filter out the notification to be deleted
    user.notifications = user.notifications.filter(notification => notification._id.toString() !== notificationId);

    // Save the user document
    await user.save();

    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    console.error('Error deleting Notification', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  scholarship,
  getSavedScholarships,
  getScholarshipsUni,
  saveNotification,
  getNotification,
  deleteNotification,
};
