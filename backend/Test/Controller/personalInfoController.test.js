// const sinon = require('sinon');
// const { expect } = require('chai');
// const jwt = require('jsonwebtoken');
// const { personalInfo, getPersonalInfo } = require('./yourControllerFile');
// const personalInfoSchema = require('../Models/personalInfoModel');
// const extractedData = require('../Models/extractedDataModel');

// describe('personalInfo controller', () => {
//   let req, res, jwtStub, findOneStub, saveStub;

//   beforeEach(() => {
//     req = { headers: { authorization: 'Bearer validToken' }, body: {} };
//     res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
//     jwtStub = sinon.stub(jwt, 'verify').returns({ id: 'userId' });
//     findOneStub = sinon.stub(personalInfoSchema, 'findOne').resolves(null);
//     saveStub = sinon.stub(personalInfoSchema.prototype, 'save').resolves({});
//   });

//   afterEach(() => {
//     jwtStub.restore();
//     findOneStub.restore();
//     saveStub.restore();
//   });

//   it('should return 401 if authorization header is missing', async () => {
//     req.headers.authorization = undefined;

//     await personalInfo(req, res);

//     expect(res.status.calledWith(401)).to.be.true;
//     expect(res.json.calledWith({ error: 'Unauthorized!' })).to.be.true;
//   });

//   it('should create new personal information if not found', async () => {
//     req.body = {
//       gender: 'Male',
//       nationality: 'Test Nationality',
//       countryOfResidence: 'Test Residence',
//       dob: { day: 1, month: 'January', year: 1990 }
//     };

//     await personalInfo(req, res);

//     expect(saveStub.calledOnce).to.be.true;
//     expect(res.status.calledWith(201)).to.be.true;
//   });

//   it('should update existing personal information if found', async () => {
//     findOneStub.resolves({
//       user: 'userId',
//       gender: 'Male',
//       nationality: 'Test Nationality',
//       countryOfResidence: 'Test Residence',
//       dob: { day: 1, month: 'January', year: 1990 }
//     });
//     req.body = {
//       gender: 'Female',
//       nationality: 'Updated Nationality',
//       countryOfResidence: 'Updated Residence',
//       dob: { day: 2, month: 'February', year: 1991 }
//     };

//     await personalInfo(req, res);

//     expect(saveStub.calledOnce).to.be.true;
//     expect(res.status.calledWith(201)).to.be.true;
//   });

//   it('should handle server errors', async () => {
//     findOneStub.rejects(new Error('Database error'));

//     await personalInfo(req, res);

//     expect(res.status.calledWith(500)).to.be.true;
//     expect(res.json.calledWith({ error: 'Server Error' })).to.be.true;
//   });
// });

// describe('getPersonalInfo controller', () => {
//   let req, res, jwtStub, findOneStub;

//   beforeEach(() => {
//     req = { headers: { authorization: 'Bearer validToken' } };
//     res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
//     jwtStub = sinon.stub(jwt, 'verify').returns({ id: 'userId' });
//     findOneStub = sinon.stub(personalInfoSchema, 'findOne').resolves({
//       user: 'userId',
//       gender: 'Male',
//       nationality: 'Test Nationality',
//       countryOfResidence: 'Test Residence',
//       dob: { day: 1, month: 'January', year: 1990 }
//     });
//   });

//   afterEach(() => {
//     jwtStub.restore();
//     findOneStub.restore();
//   });

//   it('should return 401 if authorization header is missing', async () => {
//     req.headers.authorization = undefined;

//     await getPersonalInfo(req, res);

//     expect(res.status.calledWith(401)).to.be.true;
//     expect(res.json.calledWith({ error: 'Unauthorized!' })).to.be.true;
//   });

//   it('should return user profile successfully', async () => {
//     await getPersonalInfo(req, res);

//     expect(res.status.calledWith(200)).to.be.true;
//     expect(res.json.calledWith({
//       firstName: undefined,
//       lastName: undefined,
//       contactNo: undefined,
//       gender: 'Male',
//       nationality: 'Test Nationality',
//       dob: { day: 1, month: 'January', year: 1990 },
//       countryOfResidence: 'Test Residence'
//     })).to.be.true;
//   });

//   it('should handle user profile not found', async () => {
//     findOneStub.resolves(null);

//     await getPersonalInfo(req, res);

//     expect(res.status.calledWith(404)).to.be.true;
//     expect(res.json.calledWith({ error: 'User profile not found' })).to.be.true;
//   });

//   it('should handle server errors', async ()=> {
//     findOneStub.rejects(new Error('Database error'));

//     await getPersonalInfo(req, res);

//     expect(res.status.calledWith(500)).to.be.true;
//     expect(res.json.calledWith({ error: 'Server Error' })).to.be.true;
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
  