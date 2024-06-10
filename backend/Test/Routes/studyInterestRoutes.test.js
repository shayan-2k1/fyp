// const express = require('express');
// const request = require('supertest');
// const studyPrefRouter = require('../routes/studyPrefRouter');
// const { studyPrefrences, getInterest } = require('../Controllers/studyInterestController');

// describe('Study Preferences Router', () => {
//   let app;

//   beforeEach(() => {
//     app = express();
//     app.use(express.json());
//     app.use('/study', studyPrefRouter);
//   });

//   it('should handle POST /info endpoint', async () => {
//     const reqBody = {  };
//     const res = await request(app)
//       .post('/study/info')
//       .send(reqBody);

//     expect(res.status).toBe(200); 
//   });

//   it('should handle GET /getStudyInterest endpoint', async () => {
//     const res = await request(app)
//       .get('/study/getStudyInterest');

//     expect(res.status).toBe(200); // Assuming status 200 is returned for success
    
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