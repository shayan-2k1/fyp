const bcrypt = require('bcrypt');
const Admin = require('../Models/adminmodel');
const jwt = require('jsonwebtoken');
const University = require ('../Models/universityModel')
async function createAdmin(req, res) {
  try {
    // Check if an admin with the specified email already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@gmail.com' });
    if (existingAdmin) {
      return res.status(400).json({ error: 'An admin with this email already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash('easeassist', 10); // Use bcrypt to hash the password

    // Create a new admin document
    const newAdmin = new Admin({
    //   username: 'admin', // You can set the username to any desired value
      password: hashedPassword,
      email: 'admin@gmail.com',
    //   role: 'admin' // Assign the 'admin' role
    });

    // Save the new admin document to the database
    await newAdmin.save();

    // Respond with a success message
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    // If an error occurs, respond with an error message
    console.error('Error creating admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function adminLogin(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the admin exists
    const foundAdmin = await Admin.findOne({ email });
    if (!foundAdmin) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, foundAdmin.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // If the email and password are correct, generate a JWT token
    const token = jwt.sign(
      {
        id: foundAdmin._id,
        email: foundAdmin.email
      },
      process.env.SECRET_KEY,
      { expiresIn: '24h' }
    );

    // Set the JWT token as a cookie
    res.cookie('auth_token', token, { httpOnly: true });

    // Respond with success message
    res.status(200).json({ message: 'Admin logged in successfully', token });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getRegisteredUniversitiesEmails = async (req, res) => {
  try {
    // Extract the authorization token from the request headers
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Extract the token from the authorization header
    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify the token using the secret key
    const secretKey = process.env.SECRET_KEY;
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;

    // Check if the user is registered as an admin
    const isAdmin = await Admin.findOne({ _id: userId });
    if (!isAdmin) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    // Assuming you have a Universities model and it has fields for email addresses, names, and phone numbers
    const universities = await University.find({}, 'uniname email phoneNumber');

    // Extract email, name, and phone number from the universities data
    const universityInfo = universities.map(university => ({
      uniname: university.uniname,
      email: university.email,
      phoneNumber: university.phoneNumber
    }));

    res.status(200).json({ universityInfo });
  } catch (error) {
    console.error('Error fetching registered universities emails:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createAdmin,
  adminLogin,
  getRegisteredUniversitiesEmails
};
