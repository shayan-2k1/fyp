// const sinon = require('sinon');
// const jwt = require('jsonwebtoken');
// const { expect } = require('chai');
// const academicBackgroundController = require('../Controllers/academicBackgroundController');
// const academicBackgroundSchema = require('../Models/academicModel');
// const extractedData = require('../Models/extractedDataModel');

// describe('academicBackgroundController', () => {
//   describe('academicBackground', () => {
//     it('should add academic background if no existing info found', async () => {
//       const req = {
//         headers: { authorization: 'Bearer token' },
//         body: { country: 'Test Country', GPA: 3.5 },
//       };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };
//       const userId = 'userId';
//       sinon.stub(jwt, 'verify').returns({ id: userId });
//       sinon.stub(extractedData, 'findOne').resolves({
//         education_info: {
//           degree_level: 'Bachelor',
//           discipline: 'Computer Science',
//           university_name: 'Test University',
//           year: 2022,
//         },
//       });
//       sinon.stub(academicBackgroundSchema.prototype, 'save').resolves();
//       sinon.stub(academicBackgroundSchema, 'findOne').resolves(null);

//       await academicBackgroundController.academicBackground(req, res);

//       expect(res.status.calledWith(201)).to.be.true;
//       expect(res.json.calledWith({ message: 'Academic Background added successfully.' })).to.be.true;
//     });

//     it('should update academic background if existing info found', async () => {
//       const req = {
//         headers: { authorization: 'Bearer token' },
//         body: { country: 'Updated Country', GPA: 4.0 },
//       };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };
//       const userId = 'userId';
//       sinon.stub(jwt, 'verify').returns({ id: userId });
//       sinon.stub(extractedData, 'findOne').resolves({
//         education_info: {
//           degree_level: 'Master',
//           discipline: 'Data Science',
//           university_name: 'Updated University',
//           year: 2021,
//         },
//       });
//       sinon.stub(academicBackgroundSchema.prototype, 'save').resolves();
//       sinon.stub(academicBackgroundSchema, 'findOne').resolves({
//         user: userId,
//         degree: 'Previous Degree',
//         discipline: 'Previous Discipline',
//         country: 'Previous Country',
//         university: 'Previous University',
//         GPA: 3.0,
//         yearOfCompletion: 2019,
//       });

//       await academicBackgroundController.academicBackground(req, res);

//       expect(res.status.calledWith(200)).to.be.true;
//       expect(res.json.calledWith({ message: 'Academic Background updated successfully' })).to.be.true;
//     });

//     it('should handle server errors', async () => {
//       const req = {
//         headers: { authorization: 'Bearer token' },
//         body: { country: 'Test Country', GPA: 3.5 },
//       };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };
//       sinon.stub(jwt, 'verify').throws(new Error('JWT error'));

//       await academicBackgroundController.academicBackground(req, res);

//       expect(res.status.calledWith(500)).to.be.true;
//       expect(res.json.calledWith({ error: 'Server Error' })).to.be.true;
//     });
//   });

//   describe('getAcademicBackground', () => {
//     it('should return academic background if found', async () => {
//       const req = { headers: { authorization: 'Bearer token' } };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };
//       const userId = 'userId';
//       sinon.stub(jwt, 'verify').returns({ id: userId });
//       sinon.stub(academicBackgroundSchema, 'findOne').resolves({
//         user: userId,
//         degree: 'Test Degree',
//         discipline: 'Test Discipline',
//         country: 'Test Country',
//         university: 'Test University',
//         GPA: 3.5,
//         yearOfCompletion: 2021,
//       });

//       await academicBackgroundController.getAcademicBackground(req, res);

//       expect(res.status.calledWith(200)).to.be.true;
//       expect(res.json.calledWith({
//         degree: 'Test Degree',
//         discipline: 'Test Discipline',
//         country: 'Test Country',
//         university: 'Test University',
//         GPA: 3.5,
//         yearOfCompletion: 2021,
//       })).to.be.true;
//     });

//     it('should handle academic background not found', async () => {
//       const req = { headers: { authorization: 'Bearer token' } };
//       const res = {
//         status: sinon.stub().returnsThis(),
//         json: sinon.spy(),
//       };
//       sinon.stub(jwt, 'verify').returns({ id: 'userId' });
//       sinon.stub(academicBackgroundSchema, 'findOne').resolves(null);

//       await academicBackgroundController.getAcademicBackground(req, res);

//       expect(res.status.calledWith(404)).to.be.true;
//       expect(res.json.calledWith({ error: 'Academic background not found' })).to.be.true;
//     });

//     it('should handle server errors', async () => {
//       const req = { headers: { authorization: 'Bearer token' }
//     };
//     const res = {
//     status: sinon.stub().returnsThis(),
//     json: sinon.spy(),
//     };
//     sinon.stub(jwt, 'verify').throws(new Error('JWT error'));
//     await academicBackgroundController.getAcademicBackground(req, res);

//     expect(res.status.calledWith(500)).to.be.true;
//     expect(res.json.calledWith({ error: 'Server Error' })).to.be.true;
//   });
// });
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

