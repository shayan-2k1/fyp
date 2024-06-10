// const request = require('supertest');
// const express = require('express');
// const router = require('../routes/profileRoutes');

// describe('Profile Routes', () => {
//   const app = express();
//   app.use(express.json());
//   app.use('/', router);

//   it('should upload a profile picture successfully', async () => {
//     const response = await request(app)
//       .post('/add-picture')
//       .attach('profilePicture', 'path/to/profilePicture.jpg');
      
//     expect(response.status).toBe(200);
//     expect(response.body.message).toBe('Profile picture added successfully.');
//   });

//   // Add more test cases for other routes as needed
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
  
  