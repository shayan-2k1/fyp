const Document = require('../Models/documentModel');
const jwt = require("jsonwebtoken");
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

// Function to upload a document to S3

const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { fromBase64 } = require('@aws-sdk/util-base64-node'); // For converting Base64 data to binary

// Create an S3 client
const s3Client = new S3Client({ region: 'US East (N. Virginia) us-east-1' });

// Function to upload a document to S3
const uploadToS3 = async (fileData, fileName) => {
  try {
    const buffer = fromBase64(fileData); // Convert Base64 data to binary buffer if needed

    const params = {
      Bucket: 'student-doc-uploads',
      Key: fileName,
      Body: buffer,
    };

    const uploadCommand = new PutObjectCommand(params);
    const uploadResult = await s3Client.send(uploadCommand);

    return uploadResult.Location; // Return the S3 file URL
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

async function documentUpload(req, res)  {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);

    const fileData = req.file.buffer; // Assuming file buffer is in req.file.buffer
    const fileName = req.file.originalname; // Assuming original filename is in req.file.originalname

    const s3Url = await uploadToS3(fileData, fileName);

    const document = new Document({
      user: decodedToken.id,
      s3Url,
      originalName: fileName,
      fileType: 'image/png', // Replace with the actual file type
    });

    const savedDocument = await document.save();
    console.log('Document metadata saved:', savedDocument);
    res.status(200).json({ message: 'Document uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
    documentUpload
    
  };

