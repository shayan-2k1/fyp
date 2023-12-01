const Document = require('../Models/documentModel');
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
      Bucket: 'student-doc-uploads',
      Key: fileName,
      Body: fileData,
    };

    const command = new PutObjectCommand(params);
    const uploadResult = await s3Client.send(command);

    // Ensure to return the S3 URL upon successful upload
    if (uploadResult && uploadResult.$metadata && uploadResult.$metadata.httpStatusCode === 200) {
      const s3Url = `https://student-doc-uploads.s3.amazonaws.com/${fileName}`;
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
    
    const existingDocument = await Document.findOne({ user: decodedToken.id });

    if (existingDocument) {
      // If document exists, update the file array by adding a new document
      existingDocument.files.push({
        fileName: fileName,
        fileUrl: await uploadToS3(fileData, fileName),
        fileType: getMimeType(fileName),
        uploadedAt: new Date(),
      });

      const updatedDocument = await existingDocument.save();
      console.log('Document metadata updated:', updatedDocument);
      res.status(200).json({ message: 'Document added successfully.' });
    } else {
    const document = new Document({
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
    


  //  console.log(document)
    const savedDocument = await document.save();
    console.log('Document metadata saved:', savedDocument);
    res.status(200).json({ message: 'Document uploaded successfully.' });
  }

  } catch (error) {
    console.error('Error uploading document:', error);
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
    const userDocuments = await Document.find({ user: decodedToken.id });
    console.log("documents ", userDocuments)

    if (!userDocuments || userDocuments.length === 0) {
      return res.status(404).json({ message: 'No documents found for the user.' });
    }

    // Extract URLs of the documents
    const documentUrls = await Promise.all(userDocuments.map(async (document) => {
      const urls = await Promise.all(document.files.map(async (file) => {
        const params = {
          Bucket: 'student-doc-uploads',
          Key: file.fileName, // Assuming the file key is the fileName
          Expires: 3600, // URL expires in 1 hour (you can adjust the expiry time)
        };

        // Generate presigned URL for each file
        const url = await s3.getSignedUrlPromise('getObject', params);
        return {
          fileName: file.fileName,
          fileUrl: url,
          // Add other necessary document information as needed
        };
      }));
      return urls;
    }));

    const flattenedUrls = documentUrls.flat(); // Flatten the array of arrays into a single array
    res.status(200).json(flattenedUrls); // Send the document URLs to the client
  } catch (error) {
    console.error('Error retrieving documents:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function delDocument(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);

    const { documentId } = req.params;

    // Find the document by ID and the associated user
    const document = await Document.findOne({
      user: decodedToken.id,
      'files._id': documentId,
    });

    if (!document) {
      console.log('Document not found or unauthorized');
      return res.status(404).json({ error: 'Document not found or unauthorized.' });
    }

    // Check if the document ID is present in the files array
    const fileIndex = document.files.findIndex((file) => String(file._id) === String(documentId));

    if (fileIndex === -1) {
      console.log('Document ID not found in files array');
      return res.status(404).json({ error: 'Document ID not found in files array.' });
    }

    // Perform deletion logic here
    // Example: Delete the document reference from the database
    await Document.findOneAndUpdate({ _id: document._id }, { $pull: { files: { _id: documentId } } });

    // Now, delete the document from the AWS S3 bucket
    const s3 = new AWS.S3({
      region: 'us-east-1', // Replace with your S3 bucket region
      accessKeyId: 'AKIA6DVS3KHYZX3VMEUB', // Replace with your AWS access key ID
      secretAccessKey: '02WWlBJr3xa1WM1Qz179/YOxS40ZGcPTSpHdpUax', // Replace with your AWS secret access key
    });

    const fileName = document.files[fileIndex].fileName; // Get the file name from your document model

    const params = {
      Bucket: 'student-doc-uploads', // Replace with your S3 bucket name
      Key: fileName, // Replace with the file key to be deleted
    };

    // Delete file from S3 bucket
    await s3.deleteObject(params).promise();

    res.status(200).json({ message: 'Document deleted successfully.' });
    console.log('Document deleted successfully.');
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  documentUpload,
  fetchDocument,
  delDocument
};



