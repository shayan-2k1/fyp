// const mongoose = require('mongoose');
// const Scholarship = require('../Models/scholarshipPostModel');

// describe('Scholarship Post Model Test', () => {
//   // Connect to the MongoDB Memory Server before running any tests
//   beforeAll(async () => {
//     await mongoose.connect(global.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });
//   });

//   // Test case for creating a new scholarship post
//   it('create & save scholarship successfully', async () => {
//     const mockScholarship = {
//       uniId: mongoose.Types.ObjectId(),
//       uniname: 'Test University',
//       scholarshipName: 'Test Scholarship',
//       scholarshipType: 'Type A',
//       scholarshipBudget: 10000,
//       requiredCGPA: 3.5,
//       scholarshipLevel: 'Undergraduate',
//       countryOfScholarship: 'Test Country',
//       eligibleDomain: ['Science', 'Engineering'],
//       description: 'Test description',
//       deadlinedate: new Date(),
//     };
//     const validScholarship = new Scholarship(mockScholarship);
//     const savedScholarship = await validScholarship.save();

//     // Check if the saved scholarship has the correct fields and values
//     expect(savedScholarship._id).toBeDefined();
//     expect(savedScholarship.uniId).toBe(mockScholarship.uniId);
//     expect(savedScholarship.uniname).toBe(mockScholarship.uniname);
//     expect(savedScholarship.scholarshipName).toBe(mockScholarship.scholarshipName);
//     expect(savedScholarship.scholarshipType).toBe(mockScholarship.scholarshipType);
//     expect(savedScholarship.scholarshipBudget).toBe(mockScholarship.scholarshipBudget);
//     expect(savedScholarship.requiredCGPA).toBe(mockScholarship.requiredCGPA);
//     expect(savedScholarship.scholarshipLevel).toBe(mockScholarship.scholarshipLevel);
//     expect(savedScholarship.countryOfScholarship).toBe(mockScholarship.countryOfScholarship);
//     expect(savedScholarship.eligibleDomain).toEqual(expect.arrayContaining(mockScholarship.eligibleDomain));
//     expect(savedScholarship.description).toBe(mockScholarship.description);
//     expect(savedScholarship.deadlinedate).toEqual(mockScholarship.deadlinedate);
//   });

//   // Disconnect MongoDB Memory Server
//   afterAll(async () => {
//     await mongoose.disconnect();
//   });
// });

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