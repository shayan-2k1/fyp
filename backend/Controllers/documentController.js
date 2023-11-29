const Document = require('../Models/documentModel');
const jwt = require("jsonwebtoken");
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

// Function to upload a document to S3


const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

// Create an S3 client with your AWS access key and secret key
const s3Client = new S3Client({
  region: 'US East (N. Virginia) us-east-1',
  credentials: {
    accessKeyId: 'AKIA6DVS3KHYZX3VMEUB',
    secretAccessKey: '02WWlBJr3xa1WM1Qz179/YOxS40ZGcPTSpHdpUax',
  },
});

// Function to upload a document to S3
const uploadToS3 = async (fileData, fileName) => {
  try {
    const params = {
      Bucket: 'YOUR_S3_BUCKET_NAME',
      Key: fileName,
      Body: fileData,
    };

    const uploadCommand = new PutObjectCommand(params);
    const uploadResult = await s3Client.send(uploadCommand);

    return uploadResult.Location;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

// Use the uploadToS3 function as needed





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

