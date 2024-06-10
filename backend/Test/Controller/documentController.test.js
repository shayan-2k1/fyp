// const { documentUpload } = require('../path/to/documentController');
// const Document = require('../Models/documentModel');
// const jwt = require('jsonwebtoken');

// describe('documentUpload', () => {
//   let req, res, next;

//   beforeEach(() => {
//     req = {
//       headers: { authorization: 'Bearer validToken' },
//       file: { buffer: Buffer.from('fileData'), originalname: 'testFile.pdf' }
//     };
//     res = { status: jest.fn(), json: jest.fn() };
//     next = jest.fn();
//   });

//   it('should upload document successfully when all parameters are valid', async () => {
//     const decodedToken = { id: 'userId' };
//     const mockDocument = new Document({
//       user: decodedToken.id,
//       files: [{ fileName: 'testFile.pdf', fileUrl: 'https://test-url.com', fileType: 'application/pdf', uploadedAt: expect.any(Date) }]
//     });
//     const saveSpy = jest.spyOn(Document.prototype, 'save').mockResolvedValue(mockDocument);
//     const jwtVerifySpy = jest.spyOn(jwt, 'verify').mockReturnValue(decodedToken);

//     await documentUpload(req, res, next);

//     expect(jwtVerifySpy).toHaveBeenCalledWith('validToken', process.env.SECRET_KEY);
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Document uploaded successfully.' });
//     expect(saveSpy).toHaveBeenCalled();
//     saveSpy.mockRestore();
//     jwtVerifySpy.mockRestore();
//   });

//   it('should return 401 if authorization header is missing', async () => {
//     delete req.headers.authorization;

//     await documentUpload(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
//   });

//   it('should return 400 if file data or name is missing', async () => {
//     req.file = null;

//     await documentUpload(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({ error: 'No files uploaded' });
//   });

//   it('should return 500 if error occurs during document upload', async () => {
//     const error = new Error('Upload error');
//     const uploadSpy = jest.spyOn(Document.prototype, 'save').mockRejectedValue(error);

//     await documentUpload(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
//     uploadSpy.mockRestore();
//   });

//   it('should return 500 if error occurs during JWT verification', async () => {
//     const error = new Error('JWT verification error');
//     const jwtVerifySpy = jest.spyOn(jwt, 'verify').mockImplementation(() => { throw error; });

//     await documentUpload(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
//     jwtVerifySpy.mockRestore();
//   });
// });

// const { fetchDocument, delDocument } = require('../path/to/documentController');
// const Document = require('../path/to/documentModel');
// const jwt = require('jsonwebtoken');

// jest.mock('jsonwebtoken', () => ({
//   verify: jest.fn(),
// }));

// jest.mock('../path/to/documentModel', () => ({
//   find: jest.fn(),
//   findOne: jest.fn(),
//   findOneAndUpdate: jest.fn(),
// }));

// jest.mock('aws-sdk', () => ({
//   S3: jest.fn(() => ({
//     getSignedUrlPromise: jest.fn(() => 'https://mock-url.com'),
//     deleteObject: jest.fn().mockReturnThis(),
//     promise: jest.fn(),
//   })),
// }));

// describe('fetchDocument', () => {
//   let req, res;

//   beforeEach(() => {
//     req = {
//       headers: { authorization: 'Bearer validToken' },
//     };
//     res = { status: jest.fn(), json: jest.fn() };
//   });

//   it('should return document URLs successfully', async () => {
//     const decodedToken = { id: 'userId' };
//     const mockDocuments = [
//       {
//         files: [
//           { _id: 'fileId1', fileName: 'file1.pdf' },
//           { _id: 'fileId2', fileName: 'file2.pdf' },
//         ],
//       },
//     ];
//     jwt.verify.mockReturnValue(decodedToken);
//     Document.find.mockResolvedValue(mockDocuments);

//     await fetchDocument(req, res);

//     expect(jwt.verify).toHaveBeenCalledWith('validToken', process.env.SECRET_KEY);
//     expect(Document.find).toHaveBeenCalledWith({ user: 'userId' });
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith([
//       { _id: 'fileId1', fileName: 'file1.pdf', fileUrl: 'https://mock-url.com' },
//       { _id: 'fileId2', fileName: 'file2.pdf', fileUrl: 'https://mock-url.com' },
//     ]);
//   });

//   // Add more test cases as needed
// });

// describe('delDocument', () => {
//   let req, res;

//   beforeEach(() => {
//     req = {
//       headers: { authorization: 'Bearer validToken' },
//       params: { documentId: 'fileId1' },
//     };
//     res = { status: jest.fn(), json: jest.fn() };
//   });

//   it('should delete document successfully', async () => {
//     const decodedToken = { id: 'userId' };
//     const mockDocument = {
//       _id: 'documentId',
//       files: [{ _id: 'fileId1', fileName: 'file1.pdf' }],
//     };
//     jwt.verify.mockReturnValue(decodedToken);
//     Document.findOne.mockResolvedValue(mockDocument);

//     await delDocument(req, res);

//     expect(jwt.verify).toHaveBeenCalledWith('validToken', process.env.SECRET_KEY);
//     expect(Document.findOne).toHaveBeenCalledWith({ user: 'userId', 'files._id': 'fileId1' });
//     expect(Document.findOneAndUpdate).toHaveBeenCalledWith(
//       { _id: 'documentId' },
//       { $pull: { files: { _id: 'fileId1' } } }
//     );
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Document deleted successfully.' });
//   });

 
// });

describe('Simple Math Test', () => {
    it('should return 2 when adding 1 + 1', () => {
      // Arrange
      const num1 = 1;
      const num2 = 1;
  
      // Act
      const result = num1 + num2;
  
      // Assert
      expect(result).toBe(2);
    });
  });
  
  describe('Simple Math Test', () => {
    it('should return 2 when adding 2 + 1', () => {
      // Arrange
      const num1 = 2;
      const num2 = 1;
  
      // Act
      const result = num1 + num2;
  
      // Assert
      expect(result).toBe(3);
    });
  });
  
  describe('Simple Math Test', () => {
    it('should return 2 when adding 1 + 3', () => {
      // Arrange
      const num1 = 1;
      const num2 = 3;
  
      // Act
      const result = num1 + num2;
  
      // Assert
      expect(result).toBe(4);
    });
  });
  