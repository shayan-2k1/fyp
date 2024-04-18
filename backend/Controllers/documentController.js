const Document = require('../Models/documentModel');
const CV = require('../Models/extractedDataModel');
const axios = require('axios');
const Cv = require ('../Models/cvModel')
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
    console.log(req.file);
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
    //correcting errors


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
    // console.log("documents ", userDocuments)

    if (!userDocuments || userDocuments.length === 0) {
      return res.status(404).json({ message: 'No documents found for the user.' });
    }

    // Extract URLs of the documents
    const documentUrls = await Promise.all(userDocuments.map(async (document) => {
      const urls = await Promise.all(document.files.map(async (file) => {
        const params = {
          Bucket: 'student-doc-uploads',
          Key: file.fileName, // Assuming the file key is the fileName
          // Expires: 7200, // URL expires in 1 hour 
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
    console.log("doc Id" , documentId)
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
    // console.log("file id " , file._id)
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

//CV uploading 
const uploadcvToS3 = async (fileData, fileName) => {
  try {
    const params = {
      Bucket: 's3cvbucket',
      Key: fileName,
      Body: fileData,
    };

    const command = new PutObjectCommand(params);
    const uploadResult = await s3Client.send(command);

    // Ensure to return the S3 URL upon successful upload
    if (uploadResult && uploadResult.$metadata && uploadResult.$metadata.httpStatusCode === 200) {
      const s3Url = `https://s3cvbucket.s3.amazonaws.com/${fileName}`;
      return s3Url;
    } else {
      throw new Error('S3 upload did not return a valid URL');
    }
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};


async function cvUpload(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);

    const fileData = req.file.buffer; // File buffer from request
    const fileName = req.file.originalname; // Original filename from request

    if (!fileData || !fileName) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const s3Url = await uploadcvToS3(fileData, fileName); // Upload file to S3

    // Check if a CV already exists for the user
    let existingCv = await Cv.findOne({ user: decodedToken.id });

    if (existingCv) {
      // If a CV exists, delete the existing CV file from S3
      await deleteFileFromS3(existingCv.files[0].fileUrl);
      // Delete the existing CV document from the database
      existingCv = await Cv.findOneAndDelete({ user: decodedToken.id });
    }

    // Create a new CV document with the uploaded file details
    const newCv = new Cv({
      user: decodedToken.id,
      files: [{
        fileName: fileName,
        fileUrl: s3Url,
        fileType: getMimeType(fileName),
        uploadedAt: new Date(),
      }],
    });

    // Save the new CV document
    const savedCv = await newCv.save();
    console.log('New CV uploaded:', savedCv);
    res.status(200).json({ message: 'CV uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading CV:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// const AWS = require('aws-sdk');

// Configure AWS credentials and region
AWS.config.update({
  accessKeyId: 'AKIA6DVS3KHYZX3VMEUB',
  secretAccessKey: '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',
  region: 'us-east-1',
});

// Create an S3 instance
const s3 = new AWS.S3();

async function deleteFileFromS3(fileUrl) {
  const bucketName = 's3cvbucket'; // Replace with your bucket name

  // Extract the key from the file URL
  const key = decodeURIComponent(fileUrl.split(`${bucketName}/`)[1]);

  const params = {
    Bucket: bucketName,
    Key: key, // Set the key parameter with the extracted key
  };

  try {
    await s3.deleteObject(params).promise();
    console.log(`File deleted from S3: ${fileUrl}`);
  } catch (error) {
    console.error('Error deleting file from S3:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
}



async function fetchCv(req, res) {
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
    const userid= decodedToken.id;
    // Find the CV uploaded by the user
    const cv = await Cv.findOne({ user: decodedToken.id });

    if (!cv) {
      return res.status(404).json({ message: 'CV not found for the user.' });
    }

    // Map the document files to get the presigned URL for each file
    const documentUrls = await Promise.all(cv.files.map(async (file) => {
      const params = {
        Bucket: 's3cvbucket',
        Key: file.fileName, // Assuming the file key is the fileName
        Expires: 3600, // URL expires in 1 hour 
      };
      
      // Generate presigned URL for each file
      const fileUrl = await s3.getSignedUrlPromise('getObject', params);
      return {
        _id: file._id,
        fileName: file.fileName,
        fileUrl: fileUrl, // Use the variable in this scope
        // Add other necessary document information as needed
      };
    }));

    // Extract the fileUrl from the first documentUrls entry
    const firstDocumentUrl = documentUrls.length > 0 ? documentUrls[0].fileUrl : null;
    // console.log(firstDocumentUrl)

    const flaskEndpoint = 'http://127.0.0.1:5000/extract_cv_data'; // Change to your Flask app's endpoint
    const response = await axios.post(flaskEndpoint, { fileUrl: firstDocumentUrl });


    const dataFromFlask = response.data;
        console.log('Data received from Flask:', dataFromFlask);
        await processDataFromFlask(dataFromFlask, userid);
    // Send the document URLs to the client
    res.status(200).json(documentUrls);
  } catch (error) {
    console.error('Error retrieving CV:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function processDataFromFlask(dataFromFlask, userid) {
  console.log('Data processed:', dataFromFlask);
  console.log('useriddd', userid)
  try {
    // Extract education_info and personal_info from dataFromFlask directly
    const { education_info, personal_info } = dataFromFlask;
    console.log("Received education info:", education_info);
    console.log("Received personal info:", personal_info);

    // Process education_info
    const educationEntries = {
      university_name: education_info.university_name,
      year: education_info.degree_year,
      degree_level: education_info.degree_level,
      discipline: education_info.degree_discipline
    };

    // Process personal_info
    const personalEntries = {
      first_name: personal_info.first_name,
      last_name: personal_info.last_name,
      phone: personal_info.phone,
      address: personal_info.email, // Assuming email is the address
      linkedin: personal_info.linkedin
    };

    // Create new CV object and save
    const newCV = new CV({
      user: userid,
      education_info: educationEntries,
      personal_info: personalEntries
    });

    await newCV.save();

    console.log('CV data saved successfully:', newCV);
    // Return result or throw error, instead of handling res directly
    return 'CV data saved successfully';
  } catch (error) {
    console.error('Error saving CV data:', error);
    // Throw error to be caught by the caller function
    throw new Error('Error saving CV data');
  }
}
  async function getExtractedData(req,res){

    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: "Unauthorized!" });
      }
  
      const secretKey = process.env.SECRET_KEY;
      const token = authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, secretKey);
      const userId = decodedToken.id;
      console.log(userId)
      const cvData = await CV .findOne({
        user: userId,
      });
      if (!cvData) {
        return res.status(404).json({ error: "CV data not found for the user." });
      }
  
      // Return the CV data
      res.status(200).json({ cvData });
    } catch (error) {
      console.error("Error fetching CV data:", error);
      res.status(500).json({ error: "Server Error" });
    }

  }





module.exports = {
  documentUpload,
  cvUpload,
  getExtractedData,
  fetchCv,
  fetchDocument,
  delDocument,
  deleteFileFromS3, 
  
};



