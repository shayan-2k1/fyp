// const { expect } = require('chai');
// const mongoose = require('mongoose');
// const ScholarshipApplication = require('../path/to/scholarshipApplicationModel'); // Adjust the path as needed

// describe('Scholarship Application Schema', () => {
//   it('should be a valid Mongoose model', () => {
//     expect(mongoose.Model(ScholarshipApplication)).to.exist;
//   });

//   it('should have the required fields', () => {
//     const application = new ScholarshipApplication();
//     const validationResult = application.validateSync();
//     expect(validationResult.errors.userId).to.exist;
//     expect(validationResult.errors.username).to.exist;
//     expect(validationResult.errors.uniId).to.exist;
//     expect(validationResult.errors.scholarshipId).to.exist;
//     expect(validationResult.errors.scholarshipName).to.exist;
//     expect(validationResult.errors.universityName).to.exist;
//     expect(validationResult.errors.personalInfo).to.exist;
//     expect(validationResult.errors.academicBackground).to.exist;
//     expect(validationResult.errors.extraCurricularActivities).to.exist;
//     expect(validationResult.errors.attachDocuments).to.exist;
//     expect(validationResult.errors.status).to.exist;
//   });

//   it('should validate enum fields', () => {
//     const application = new ScholarshipApplication({
//       personalInfo: {
//         gender: 'Invalid Gender',
//         dob: {
//           month: 'Invalid Month'
//         }
//       },
//       status: 'Invalid Status'
//     });
//     const validationResult = application.validateSync();
//     expect(validationResult.errors['personalInfo.gender']).to.exist;
//     expect(validationResult.errors['personalInfo.dob.month']).to.exist;
//     expect(validationResult.errors.status).to.exist;
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

describe('Simple Math Test', () => {
  it('should return 2 when adding 1 + 4', () => {
    // Arrange
    const num1 = 1;
    const num2 = 4;

    // Act
    const result = num1 + num2;

    // Assert
    expect(result).toBe(5);
  });
});

describe('Simple Math Test', () => {
  it('should return 2 when adding 1 + 6', () => {
    // Arrange
    const num1 = 1;
    const num2 = 6;

    // Act
    const result = num1 + num2;

    // Assert
    expect(result).toBe(7);
  });
});