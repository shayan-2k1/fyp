const Certificate = require('../Models/certificateModel');
const jwt = require("jsonwebtoken");
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

// Function to upload a document to S3
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
 const { fromBase64 } = require('@aws-sdk/util-base64-node');
const { GetObjectCommand } = require('@aws-sdk/client-s3');




// Create an S3 client
const s3Client = new S3Client({
  region: 'us-east-1', // Change the region if needed
  credentials: {
    accessKeyId: 'AKIA6DVS3KHYZX3VMEUB',
    secretAccessKey: '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',
  },
});

// Function to upload a document to S3
const uploadToS3 = async (fileData, fileName) => {
  try {
    const params = {
      Bucket: 'certificates-githublinks-students',
      Key: fileName,
      Body: fileData,
    };

    const command = new PutObjectCommand(params);
    const uploadResult = await s3Client.send(command);

    // Ensure to return the S3 URL upon successful upload
    if (uploadResult && uploadResult.$metadata && uploadResult.$metadata.httpStatusCode === 200) {
      const s3Url = `https://certificates-githublinks-students.s3.amazonaws.com/${fileName}`;
      return s3Url;
    } else {
      throw new Error('S3 upload did not return a valid URL');
    }
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

// Function to get MIME type from file extension
const getMimeType = (fileName) => {
  const fileExtension = fileName.split('.').pop().toLowerCase();
  const mimeTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    pdf: 'application/pdf',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    // Add more file types and their MIME types as needed
  };
  return mimeTypes[fileExtension] || 'application/octet-stream'; // Default MIME type if not found
};

async function documentUpload(req, res) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      const secretKey = process.env.SECRET_KEY;
      const token = authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, secretKey);
      // console.log(req.file);
      const fileData = req.file.buffer; // Assuming file buffer is in req.file.buffer
      const fileName = req.file.originalname; // Assuming original filename is in req.file.originalname
  
      if (!fileData && !fileName) {
              return res.status(400).json({ error: "No files uploaded" });
            }
  
      // console.log(fileName)
      // console.log(fileData)
      const s3Url = await uploadToS3(fileData, fileName);
      console.log("url in s3",s3Url)
      
      const existingCertificate = await Certificate.findOne({ user: decodedToken.id });
  
      if (existingCertificate) {
        // If document exists, update the file array by adding a new document
        existingCertificate.files.push({
          fileName: fileName,
          fileUrl: await uploadToS3(fileData, fileName),
          fileType: getMimeType(fileName),
          uploadedAt: new Date(),
        });
  
        const updatedCertificate = await existingCertificate.save();
        console.log('Document metadata updated:', updatedCertificate);
        res.status(200).json({ message: 'Document added successfully.' });
      } else {
      const document = new Certificate({
        user: decodedToken.id,
        files: [
          {
            fileName: fileName, // Original filename
            fileUrl: s3Url,     // URL of the uploaded file in S3
            fileType: getMimeType(fileName), // MIME type based on file extension
            uploadedAt: new Date(), // Set the upload timestamp
          },
        ],
      });
      //correcting errors
  
  
    //  console.log(document)
      const savedDocument = await document.save();
      console.log('Certificate metadata saved:', savedDocument);
      res.status(200).json({ message: 'Certificate uploaded successfully.' });
    }
} catch (error) {
    console.error('Error uploading Certificate:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
} 

async function fetchDocument(req, res) {
    try {
      const s3 = new AWS.S3({
        region: 'us-east-1', // Change the region if needed
        credentials: {
          accessKeyId: 'AKIA6DVS3KHYZX3VMEUB',
          secretAccessKey: '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',
        },
      });
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      const secretKey = process.env.SECRET_KEY;
      const token = authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, secretKey);
  
      // Find documents uploaded by the user
      const userCertificates = await Certificate.find({ user: decodedToken.id });
      // console.log("documents ", userDocuments)
  
      if (!userCertificates || userCertificates.length === 0) {
        return res.status(404).json({ message: 'No documents found for the user.' });
      }
  
      // Extract URLs of the documents
      const certificatUrls = await Promise.all(userCertificates.map(async (document) => {
        const urls = await Promise.all(document.files.map(async (file) => {
          const params = {
            Bucket: 'certificates-githublinks-students',
            Key: file.fileName, // Assuming the file key is the fileName
            // Expires: 3600, // URL expires in 1 hour 
          };
  
          // Generate presigned URL for each file
          const url = await s3.getSignedUrlPromise('getObject', params);
          return {
            _id: file._id,
            fileName: file.fileName,
            fileUrl: url,
            // Add other necessary document information as needed
          };
        }));
        return urls;
      }));
  
      const flattenedUrls = certificatUrls.flat(); // Flatten the array of arrays into a single array
      res.status(200).json(flattenedUrls); // Send the document URLs to the client
    } catch (error) {
      console.error('Error retrieving documents:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

module.exports={
    documentUpload,
    fetchDocument
}