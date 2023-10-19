const documentSchema = require('../models/documentModel');
// const multer = require('multer');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const util = require('util');
const fs = require('fs');

require('dotenv').config();

 const uploadDirectory = 'D:/FYP/fyp/backend/uploads';


const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink); // For file cleanup

async function saveDocumentToFileSystem(file, storedName) {
  const filePath = `${uploadDirectory}/${storedName}`;
  //  console.log(filePath)
  // console.log(storedName)
  try {
    

    // Use the 'writeFile' function to save the file to the specified directory
    await writeFile(filePath, file.buffer);

    
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

    // Extract the document from req.files (multer handles it)
    const documents = req.files; // Access the array of uploaded files

    if (!documents || documents.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const savedDocuments = [];

    for (const document of documents) {
      const originalName = document.originalname;
      const storedName = `${Date.now()}-${originalName}`;

      uploadResult = await saveDocumentToFileSystem(document, storedName);

      const newDocument = {
        originalName,
        storedName: uploadResult.storedName,
        fileType: document.mimetype.split('/')[1],
      };

      // Push the new document to the user's `files` array in MongoDB
      await documentSchema.updateOne(
        { user: decodedToken.id }, // Find the document by user ID
        { $push: { files: newDocument } } // Push the new document into the 'files' array
      );

      savedDocuments.push(newDocument);
    }

    

    res.status(200).json({
      message: 'Documents uploaded and saved successfully',
      documents: savedDocuments,
    });
  } catch (error) {
    console.error(error);

    if (uploadResult) {
      try {
        await unlink(uploadResult.filePath);
      } catch (unlinkError) {
        console.error(`Failed to remove the uploaded file: ${unlinkError.message}`);
      }
    }

    // Respond with an error status code and message
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.close();
  }
}



module.exports = {
  docWallet,
}