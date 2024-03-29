const mentorModel = require("../Models/mentorModel");
const universityModel = require("../Models/universityModel");
const MentorProfileModel = require("../Models/MentorProfileModel");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken")
require("dotenv").config();
async function signup(req, res) {

  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized!" });
  }
  try {
    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    const founduni = await universityModel.findById(userId);
    const uniEmail = founduni.email;
    const uniPassword = founduni.password;
    let { email, password } = req.body;
    

    if (!password || !email) {
      return res.status(400).json({ message: "Enter all fields!" })
    }
    else {
      let existuser = await mentorModel.findOne({ email: email })
      //after search from database check email
      if (existuser) {
        return res.status(400).json({ message: "user already exits!" })
      }

      else {
        let user = new mentorModel({
          uniid: userId,
          password,
          email
        });
      
        await user.save();
        res.status(200).json(user); // Send the response immediately after saving the user
      
        // Proceed with sending the email, but don't wait for it or handle the result here
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: uniEmail, 
            pass: 'bwap ieis ktvd mgsn', // replace with your email password
          },
        });
      
        const mailOptions = {
          from: uniEmail,
          to: email,
          subject: 'Mentor Account Created',
          text: `Your account has been created. Login with:\nEmail: ${email}\nPassword: ${password}`,
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
          } else {
            console.log('Email sent:', info.response);
          }
        });
      }
      
      

    }
  } catch (error) {

    res.status(400).json({ error: error, message: "user not created" })
  }

}

async function signin(req, res) {
  const { email, password } = req.body;

  try {
    const foundUser = await mentorModel.findOne({ email });

    if (!foundUser) {
      return res.status(404).send({ message: 'Mentor not found' });
    }

    if (password !== foundUser.password) {
      return res.status(400).send({ message: 'Password not matched' });
    }

    const token = jwt.sign(
      {
        id: foundUser._id,

      },
      process.env.SECRET_KEY,
      { expiresIn: '24h' }
    );

    res.cookie('auth_token', token, { httpOnly: true });


    res.status(200).send({ user: foundUser, token });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function update(req, res) {
  const { email, password } = req.body;

  try {
    const foundUser = await mentorModel.findOne({ email });

    if (!foundUser) {
      return res.status(404).send({ message: 'User not found' });
    }

    foundUser.password = password;
    await foundUser.save();

    return res.status(200).send({ message: 'Password updated successfully' });
  } catch (error) {
    return res.status(500).send({ message: 'Internal server error' });
  }
}

async function getmentor(req, res) {
  
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    console.log(userId);
    const mentorProfile = await MentorProfileModel.findOne({ userid: userId });

    if (!mentorProfile) {
      
      return res.status(404).json({ error: "Mentor Profile not found" });
    }

    res.status(200).json(mentorProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
async function mentorset(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    const {
      name,
      title,
      email,
      tel,
      skills,
      about,
      universityname
    } = req.body;

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    const existingInfo = await MentorProfileModel.findOne({ userid: userId });

    if (existingInfo) {
      // If information exists, update it
      await MentorProfileModel.findOneAndUpdate(
        { userid: userId },
        {
          name,
          title,
          email,
          tel,
          skills,
          about,
          universityname,
        },
        { new: true }
      );

      res.status(200).json({ message: "Mentor updated successfully" });
    } else {
      // If no information exists, add mentor profile
      const mentorProfile = new MentorProfileModel({
        userid: userId,
        name,
        title,
        email,
        tel,
        skills,
        about,
        universityname,
      });

      await mentorProfile.save();
      res.status(201).json({ message: "Mentor added successfully." });
    }
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: "Server Error" });
  }
}
async function getMentorProfiles(req, res) {
  console.log("H1")
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    const universityId = decodedToken.id;
      console.log(universityId)
    const mentors = await mentorModel.find({ uniid: universityId });

    if (!mentors.length) {
      
      return res.status(404).json({ message: "No mentors found for this university" });
    }

    const mentorProfiles = await Promise.all(
      mentors.map(async (mentor) => {
        return MentorProfileModel.findOne({ userid: mentor._id });
      })
    );

    res.status(200).json(mentorProfiles .filter(profile => profile != null));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}

async function getAllMentorProfiles(req, res) {
 console.log("In all mentor")
  
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized!" });
    }
    const mentors = await MentorProfileModel.find();

    if (!mentors.length) {
      return res.status(404).json({ message: "No mentors found" });
    }

    res.status(200).json(mentors);
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(500).json({ error: "Internal server error" });
  }

    
    
};

module.exports = {
  signup,
  signin,
  mentorset,
  getmentor,
  getMentorProfiles,
  getAllMentorProfiles,
};