const documentSchema = require("../Models/documentModel");
const jwt = require("jsonwebtoken");
const { MongoClient, GridFSBucket } = require("mongodb");
const multer = require("multer");
const { Readable } = require("stream");
require("dotenv").config();
const fs = require('fs');
const {ObjectId} = require('mongodb')

// Some code using fs...

// const Readable = require("stream").Readable;

const uri = process.env.MONGO_URL;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("EaseAssist");
const bucket = new GridFSBucket(db, {
  bucketName: "uploads",
});

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

async function docWallet(req, res) {
  try {
    await client.connect();

    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);

    const documents = req.files;

    if (!documents || documents.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const savedDocuments = [];

    for (const document of documents) {
      const originalName = document.originalname;

      const uploadStream = bucket.openUploadStream(originalName);
      const bufferStream = new Readable();

      // Push the binary data from the buffer into the Readable stream
      bufferStream.push(document.buffer);
      bufferStream.push(null); // Signal the end of the stream

      bufferStream.pipe(uploadStream).on("error", (error) => {
        console.error("Error during streaming:", error);
      });

      // Wait for the upload to finish
      await new Promise((resolve, reject) => {
        uploadStream.on("finish", resolve);
        uploadStream.on("error", reject);
      });

      const newDocument = {
        originalName,
        storedName: uploadStream.id.toString(),
        fileType: document.mimetype.split("/")[1],
      };

      // Save the metadata to MongoDB
      await documentSchema.updateOne(
        { user: decodedToken.id },
        { $push: { files: newDocument } },
        { upsert: true }
      );

      savedDocuments.push(newDocument);
    }

    res.status(200).json({
      message: "Documents uploaded and saved successfully",
      documents: savedDocuments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.close();
  }
}
async function showDocuments(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);

    // Find documents associated with the user
    const userDocuments = await documentSchema.findOne({ user: decodedToken.id });

    if (!userDocuments) {
      return res.status(404).json({ error: "No documents found for this user." });
    }

    // Send the documents as a response
    res.status(200).json(userDocuments.files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



async function getFileFromGridFS(fileId) {
  try {
    const fileMetadata = await db.collection('uploads.files').findOne({ _id: new ObjectId(fileId) });

    if (!fileMetadata) {
      console.log("File not found in uploads.files for ID:", fileId);
      return null; // File not found
    }

    const fileChunksCursor = db.collection('uploads.chunks').find({ files_id: new ObjectId(fileId) });
    const chunks = await fileChunksCursor.toArray();

    // Ensure chunks are Buffers and then concatenate them
    const bufferChunks = chunks.map(chunk => Buffer.from(chunk.data));
    const completeFileData = Buffer.concat(bufferChunks);

    console.log("Metadata found:", fileMetadata);
    return {
      metadata: fileMetadata,
      data: completeFileData,
    };
    
  } catch (error) {
    console.error("Error in getFileFromGridFS:", error);
    return null; // Handle errors
  }
}


async function fetchdocument(req, res) {
  try {
    const fileId = req.params.fileId;
    console.log("fileId" , fileId)
    const file = await getFileFromGridFS(fileId);

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.set({
      'Content-Type': file.metadata.contentType,
      'Content-Disposition': `attachment; filename="${file.metadata.filename}"`,
    });

    const fileStream = bucket.openDownloadStream(new ObjectId(fileId));
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error in fetchdocument:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  docWallet,
  showDocuments, 
  fetchdocument
  
};
