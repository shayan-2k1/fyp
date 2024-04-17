const universityModel = require("../Models/universityModel");
//const User=require("../Models/userModel")
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
// const generateOTP = require("../Utils/generateOTP");
// const sendEmail = require("../Utils/sendEmail");
async function registerUniversity(req, res) {
  try {
      // Validate the request body
      const { uniname, password, email, phoneNumber, address, calendly } = req.body;
      if (!uniname || !password || !email || !phoneNumber || !address || !calendly) {
          return res.status(400).json({ msg: "Enter all fields!" });
      }

      // Check if university email already exists
      const existingUniversity = await universityModel.findOne({ email });
      if (existingUniversity) {
          return res.status(400).json({ msg: "University with this email already exists" });
      }

      // Generate OTP
      // const otp = await generateOTP();

      // Send OTP via email
      // await sendEmail(email, otp);

      // Hash the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      // Create and save the new university
      const newUniversity = new universityModel({
          uniname,
          password: passwordHash,
          email,
          phoneNumber,
          address,
          calendly
         
      });
      const savedUniversity = await newUniversity.save();

      res.status(200).json({
          msg: "University registered successfully. Please verify your email with OTP.",
          id: savedUniversity._id,
          status: true
      });

  } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
  }
}

/**
 * Generates a random OTP (One Time Password).
 * @param {number} length - The length of the OTP to generate.
 * @returns {string} - The generated OTP.
 */
function generateOTP(length = 6) {
  const charset = '0123456789'; // You can customize the characters to include in the OTP
  let otp = '';
  for (let i = 0; i < length; i++) {
      otp += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return otp;
}

const nodemailer = require('nodemailer');

/**
 * Sends an email with the given details.
 * @param {string} to - The email address of the recipient.
 * @param {string} otp - The OTP to include in the email.
 * @returns {Promise<void>} - A Promise that resolves when the email is sent successfully.
 */
async function sendEmail(email, otp) {
    const transporter = nodemailer.createTransport({
        // Configuration for your email service provider (e.g., Gmail, SendGrid)
        service: 'gmail',
        auth: {
            user: 'easeassist24@gmail.com', // Your email address
            pass: 'abcd@12345' // Your email password
        }
    });

    const mailOptions = {
        from: 'easeassist24@gmail.com',
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is ${otp}.`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Propagate the error to handle it where the function is called
    }
}



async function signin(req, res) {
  const { email, password } = req.body;

  try {
    const founduni = await universityModel.findOne({ email });

    if (!founduni) {
      return res.status(404).send({ message: 'University not found' });
    }
    
    // Compare hashed password
    const passwordMatch = await bcrypt.compare(password, founduni.password);

    if (!passwordMatch) {
      return res.status(400).send({ message: 'Password not matched' });
    }

    // If password matches, proceed with generating token and sending response
    const token = jwt.sign(
      {
        id: founduni._id,
        uniname: founduni.uniname,
        
      },
      process.env.SECRET_KEY,
      { expiresIn: '24h' }
    );

    res.cookie('auth_token', token, { httpOnly: true });
    
  
    res.status(200).send({ user: founduni, token });
  } catch (error) {
    res.status(500).send({ error });
  }
}

  
  async function update(req, res) {
    const { email, password } = req.body;
    
    try {
      const founduni = await universityModel.findOne({ email });
      
      if (!founduni) {
        return res.status(404).send({ message: 'University not found' });
      }
      
      founduni.password = password;
      await founduni.save();
      
      return res.status(200).send({ message: 'Password updated successfully' });
    } catch (error) {
      return res.status(500).send({ message: 'Internal server error' });
    }
  }
  
  async function updateCalendly(req, res) {
    const { email, calendly } = req.body;
    
    try {
      const foundUni = await universityModel.findOne({ email });
      
      if (!foundUni) {
        return res.status(404).send({ message: 'University not found' });
      }
      
      foundUni.calendly = calendly;
      await foundUni.save();
      
      return res.status(200).send({ message: 'Calendly link updated successfully' });
    } catch (error) {
      return res.status(500).send({ message: 'Internal server error' });
    }
  }
  

module.exports = {
    registerUniversity,
    updateCalendly,
    signin,
    update
};