const documentSchema = require('../Models/documentModel');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const util = require('util');
const fs = require('fs');

require('dotenv').config();

const uploadDirectory = 'D:/FYP/fyp/backend/uploads';

// Create storage for multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const uniqueFileName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage });

// Convert fs functions to promise-based
const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink); // For file cleanup

async function saveDocumentToFileSystem(file, storedName) {
  const filePath = `${uploadDirectory}/${storedName}`;
  // console.log(file)
  // console.log(storedName)
  try {
    // Use the 'writeFile' function to save the file to the specified directory
    await writeFile(filePath, file.buffer);

    // Return details about the saved document, including the storedName and file path
    console.log(file.buffer)
    console.log(filePath)
    return { storedName, filePath };
    
  } catch (error) {
    throw new Error(`Failed to save the document: ${error.message}`);
  }
}

async function docWallet(req, res) {
  const uri = process.env.MONGO_URL;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  let uploadResult; // Define outside of try block to make it accessible in catch block

  try {
    await client.connect();

    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1]; // for bearer token
    const decodedToken = jwt.verify(token, secretKey);

    // Extract the document from req.file (multer handles it)
    const document = req.file;
    if (!document) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const originalName = document.originalname;
    const storedName = `${Date.now()}-${originalName}`;
    // console.log(originalName)
    // Perform document upload and save logic
    console.log(document)
     console.log(storedName)
    uploadResult = await saveDocumentToFileSystem(document, storedName);

    // Save document details to MongoDB
    const documentDetails = new documentSchema({
      user: decodedToken._id, 
      originalName,
      storedName: uploadResult.storedName,
      fileType: document.mimetype.split('/')[1],
      // Add other document metadata as needed
    });

    const savedDocument = await documentDetails.save();

    // Send a success response
    res.status(200).json({ message: 'Document uploaded and saved successfully', document: savedDocument });
  } catch (error) {
    console.error(error);

    // In case of an error, attempt to remove the uploaded file
    if (uploadResult) {
      try {
        await unlink(uploadResult.filePath);
      } catch (unlinkError) {
        console.error(`Failed to remove the uploaded file: ${unlinkError.message}`);
      }
    }

    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.close();
  }
}

module.exports = {
  docWallet,
};
