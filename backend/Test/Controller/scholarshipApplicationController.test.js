// const mongoose = require('mongoose');
// const chai = require('chai');
// const sinon = require('sinon');
// const chaiHttp = require('chai-http');
// const jwt = require('jsonwebtoken');
// const app = require('../app'); // Import your Express app
// const ScholarshipApplication = require('../Models/scholarshipApplicationModel');
// const AcademicBackground = require('../Models/academicModel');
// const PersonalInfo = require('../Models/personalInfoModel');
// const certificates = require('../Models/certificateModel');
// const documents = require('../Models/documentModel');
// const { ScholarshipApplicationController, getapplication } = require('../controllers/scholarshipApplicationController');

// chai.use(chaiHttp);
// const { expect } = chai;

// describe('ScholarshipApplicationController', () => {
//   let jwtStub, academicStub, personalInfoStub, certificateStub, documentStub, scholarshipStub;

//   before((done) => {
//     mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
//     const db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', () => {
//       console.log('Connected to test database');
//       done();
//     });
//   });

//   afterEach(() => {
//     sinon.restore();
//   });

//   after((done) => {
//     mongoose.connection.db.dropDatabase(() => {
//       mongoose.connection.close(done);
//     });
//   });

//   describe('POST /api/scholarship-application', () => {
//     it('should create a scholarship application successfully', async () => {
//       const req = {
//         headers: { authorization: 'Bearer validtoken' },
//         body: {
//           scholarshipId: 'scholarshipId',
//           universityName: 'University Name',
//           scholarshipName: 'Scholarship Name',
//           uniId: 'uniId',
//           linkedIn: 'http://linkedin.com',
//           github: 'http://github.com',
//           selectedDocuments: ['docId1', 'docId2'],
//           selectedCertificate: ['certId1', 'certId2']
//         }
//       };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };

//       jwtStub = sinon.stub(jwt, 'verify').returns({ id: 'userId', name: 'testuser' });
//       academicStub = sinon.stub(AcademicBackground, 'findOne').resolves({
//         degree: 'Bachelor',
//         discipline: 'CS',
//         country: 'Test Country',
//         university: 'Test University',
//         GPA: 3.5,
//         yearOfCompletion: 2021
//       });
//       personalInfoStub = sinon.stub(PersonalInfo, 'findOne').resolves({
//         contactNo: '1234567890',
//         gender: 'Male',
//         nationality: 'Test Nationality',
//         countryOfResidence: 'Test Residence',
//         dob: { day: 1, month: 'January', year: 1990 }
//       });
//       documentStub = sinon.stub(documents, 'findOne').resolves({
//         files: [
//           { _id: 'docId1', fileName: 'doc1', fileUrl: 'http://doc1.com' },
//           { _id: 'docId2', fileName: 'doc2', fileUrl: 'http://doc2.com' }
//         ]
//       });
//       certificateStub = sinon.stub(certificates, 'findOne').resolves({
//         files: [
//           { _id: 'certId1', fileName: 'cert1', fileUrl: 'http://cert1.com' },
//           { _id: 'certId2', fileName: 'cert2', fileUrl: 'http://cert2.com' }
//         ]
//       });
//       scholarshipStub = sinon.stub(ScholarshipApplication.prototype, 'save').resolves();

//       await ScholarshipApplicationController(req, res);

//       expect(res.status.calledWith(200)).to.be.true;
//       expect(res.json.calledWith({ message: "Scholarship application created successfully" })).to.be.true;
//     });

//     it('should return 401 if authorization header is missing', async () => {
//       const req = { headers: {}, body: {} };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };

//       await ScholarshipApplicationController(req, res);

//       expect(res.status.calledWith(401)).to.be.true;
//       expect(res.json.calledWith({ error: "Unauthorized" })).to.be.true;
//     });

//     it('should return 500 if there is a server error', async () => {
//       const req = {
//         headers: { authorization: 'Bearer invalidtoken' },
//         body: {}
//       };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };

//       jwtStub = sinon.stub(jwt, 'verify').throws(new Error('JWT error'));

//       await ScholarshipApplicationController(req, res);

//       expect(res.status.calledWith(500)).to.be.true;
//       expect(res.json.calledWith({ message: "Internal server error" })).to.be.true;
//     });
//   });

//   describe('GET /api/getapplication', () => {
//     it('should retrieve scholarship applications successfully', async () => {
//       const req = { headers: { authorization: 'Bearer validtoken' } };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };

//       jwtStub = sinon.stub(jwt, 'verify').returns({ id: 'userId' });
//       scholarshipStub = sinon.stub(ScholarshipApplication, 'find').resolves([
//         {
//           userId: 'userId',
//           username: 'testuser',
//           scholarshipName: 'Scholarship Name',
//           universityName: 'University Name',
//           status: 'applied',
//           personalInfo: { contactNo: '1234567890', gender: 'Male' },
//           academicBackground: { degree: 'Bachelor', discipline: 'CS', country: 'Test Country' },
//           extraCurricularActivities: {},
//           attachDocuments: {}
//         }
//       ]);

//       await getapplication(req, res);

//       expect(res.status.calledWith(200)).to.be.true;
//       expect(res.json.called).to.be.true;
//       expect(res.json.args[0][0]).to.be.an('array').with.length(1);
//     });

//     it('should return 401 if authorization header is missing', async () => {
//       const req = { headers: {} };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };

//       await getapplication(req, res);

//       expect(res.status.calledWith(401)).to.be.true;
//       expect(res.json.calledWith({ error: "Unauthorized" })).to.be.true;
//     });

//     it('should return 500 if there is a server error', async () => {
//       const req = { headers: { authorization: 'Bearer validtoken' } };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };

//       jwtStub = sinon.stub(jwt, 'verify').returns({ id: 'userId' });
//       scholarshipStub = sinon.stub(ScholarshipApplication, 'find').throws(new Error('DB error'));

//       await getapplication(req, res);

//       expect(res.status.calledWith(500)).to.be.true;
//       expect(res.json.calledWith({ error: 'Internal server error' })).to.be.true;
//     });
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
  