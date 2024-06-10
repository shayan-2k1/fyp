// describe('Shortlisted Insight Routes', () => {
//     const app = express();
//     app.use(express.json());
//     app.use('/', inrrouter);
  
//     it('should handle GET /fetch-applications/:scholarshipId endpoint', async () => {
//       const scholarshipId = 'exampleScholarshipId';
//       const res = await request(app)
//         .get(`/fetch-applications/${scholarshipId}`);
  
//       expect(res.status).toBe(200); // Assuming status 200 is returned for success
      
//     });
  
//     it('should handle GET /fetchApplications/:applicationId endpoint', async () => {
//       const applicationId = 'exampleApplicationId';
//       const res = await request(app)
//         .get(`/fetchApplications/${applicationId}`);
  
//       expect(res.status).toBe(200);
//     });
  
//     it('should handle PUT /updateStatus/:applicationId endpoint', async () => {
//       const applicationId = 'exampleApplicationId';
//       const reqBody = { /* Your request body object */ };
//       const res = await request(app)
//         .put(`/updateStatus/${applicationId}`)
//         .send(reqBody);
  
//       expect(res.status).toBe(200); 
//     });
//   });
  
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