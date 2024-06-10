// const {
//     createScholarship,
//     getAllScholarships,
//     checkCountryExists,
//     getOneScholarship,
//   } = require('../path/to/controllers');
  
//   describe('createScholarship', () => {
//     let req, res;
  
//     beforeEach(() => {
//       req = {
//         headers: { authorization: 'Bearer validToken' },
//         body: {
//           scholarshipName: 'Test Scholarship',
//           scholarshipType: 'Type',
//           scholarshipBudget: 40000,
//           scholarshipLevel: 'Level',
//           countryOfScholarship: 'Country',
//           eligibleDomain: 'Domain',
//           description: 'Description',
//           deadlinedate: new Date(),
//           requiredCGPA: 3.5,
//         },
//       };
//       res = { status: jest.fn(), json: jest.fn() };
//     });
  
//     it('should create a new scholarship successfully', async () => {
//       const decodedToken = { id: 'userId', uniname: 'University' };
//       const mockScholarship = { _id: 'scholarshipId', ...req.body };
//       jwt.verify.mockReturnValue(decodedToken);
//       Scholarship.prototype.save.mockResolvedValue(mockScholarship);
//       checkCountryExists.mockResolvedValue(true);
  
//       await createScholarship(req, res);
  
//       expect(jwt.verify).toHaveBeenCalledWith('validToken', process.env.SECRET_KEY);
//       expect(res.status).toHaveBeenCalledWith(201);
//       expect(res.json).toHaveBeenCalledWith(mockScholarship);
//     });
  
//     it('should return 400 if scholarship budget is less than or equal to 30000', async () => {
//       req.body.scholarshipBudget = 25000;
  
//       await createScholarship(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(400);
//       expect(res.json).toHaveBeenCalledWith({ error: 'Scholarship budget must be greater than 30,000' });
//     });
  
//     it('should return 400 if country does not exist', async () => {
//       checkCountryExists.mockResolvedValue(false);
  
//       await createScholarship(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(400);
//       expect(res.json).toHaveBeenCalledWith({ error: 'Country does not exist' });
//     });
  
//     it('should return 500 if an error occurs during scholarship creation', async () => {
//       const error = new Error('Internal server error');
//       Scholarship.prototype.save.mockRejectedValue(error);
  
//       await createScholarship(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(500);
//       expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
//     });
//   });
  
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
  