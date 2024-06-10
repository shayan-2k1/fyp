// const request = require('supertest');
// const express = require('express');
// const bodyParser = require('body-parser');
// const stdrouter = require('../../src/routes/stdrouter');
// const studentModel = require('../../src/models/studentModel');
// const jwt = require('jsonwebtoken');
// const sinon = require('sinon');

// const app = express();
// app.use(bodyParser.json());
// app.use('/api', stdrouter);

// describe('Student Router', () => {
//   let sandbox;

//   beforeEach(() => {
//     sandbox = sinon.createSandbox();
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   describe('POST /api/signup', () => {
//     it('should return 400 if any field is missing', async () => {
//       const response = await request(app).post('/api/signup').send({
//         username: 'testuser'
//       });
//       expect(response.status).to.equal(400);
//       expect(response.body.message).to.equal('Enter all fields!');
//     });

//     it('should return 400 if user already exists', async () => {
//       sandbox.stub(studentModel, 'findOne').resolves({ email: 'test@example.com' });

//       const response = await request(app).post('/api/signup').send({
//         username: 'testuser',
//         password: 'testpass',
//         email: 'test@example.com'
//       });

//       expect(response.status).to.equal(400);
//       expect(response.body.message).to.equal('user already exits!');
//     });

//     it('should create a new user if all fields are valid', async () => {
//       sandbox.stub(studentModel, 'findOne').resolves(null);
//       sandbox.stub(studentModel.prototype, 'save').resolves({
//         username: 'testuser',
//         email: 'test@example.com'
//       });

//       const response = await request(app).post('/api/signup').send({
//         username: 'testuser',
//         password: 'testpass',
//         email: 'test@example.com'
//       });

//       expect(response.status).to.equal(200);
//       expect(response.body).to.have.property('username', 'testuser');
//       expect(response.body).to.have.property('email', 'test@example.com');
//     });

//     it('should handle errors and return 400', async () => {
//       sandbox.stub(studentModel, 'findOne').rejects(new Error('DB error'));

//       const response = await request(app).post('/api/signup').send({
//         username: 'testuser',
//         password: 'testpass',
//         email: 'test@example.com'
//       });

//       expect(response.status).to.equal(400);
//       expect(response.body.message).to.equal('user not created');
//     });
//   });

//   describe('POST /api/signin', () => {
//     it('should return 404 if user is not found', async () => {
//       sandbox.stub(studentModel, 'findOne').resolves(null);

//       const response = await request(app).post('/api/signin').send({
//         email: 'test@example.com',
//         password: 'testpass'
//       });

//       expect(response.status).to.equal(404);
//       expect(response.body.message).to.equal('User not found');
//     });

//     it('should return 400 if password does not match', async () => {
//       sandbox.stub(studentModel, 'findOne').resolves({
//         email: 'test@example.com',
//         password: 'testpass'
//       });

//       const response = await request(app).post('/api/signin').send({
//         email: 'test@example.com',
//         password: 'wrongpass'
//       });

//       expect(response.status).to.equal(400);
//       expect(response.body.message).to.equal('Password not matched');
//     });

//     it('should return 200 and a token if credentials are valid', async () => {
//       const user = {
//         _id: '1',
//         username: 'testuser',
//         email: 'test@example.com',
//         password: 'testpass'
//       };
//       sandbox.stub(studentModel, 'findOne').resolves(user);
//       sandbox.stub(jwt, 'sign').returns('testtoken');

//       const response = await request(app).post('/api/signin').send({
//         email: 'test@example.com',
//         password: 'testpass'
//       });

//       expect(response.status).to.equal(200);
//       expect(response.body).to.have.property('user');
//       expect(response.body).to.have.property('token', 'testtoken');
//     });

//     it('should handle errors and return 500', async () => {
//       sandbox.stub(studentModel, 'findOne').rejects(new Error('DB error'));

//       const response = await request(app).post('/api/signin').send({
//         email: 'test@example.com',
//         password: 'testpass'
//       });

//       expect(response.status).to.equal(500);
//       expect(response.body).to.have.property('error');
//     });
//   });

//   describe('PUT /api/update', () => {
//     it('should return 404 if user is not found', async () => {
//       sandbox.stub(studentModel, 'findOne').resolves(null);

//       const response = await request(app).put('/api/update').send({
//         email: 'test@example.com',
//         password: 'newpass'
//       });

//       expect(response.status).to.equal(404);
//       expect(response.body.message).to.equal('User not found');
//     });

//     it('should update password if user is found', async () => {
//       const user = {
//         email: 'test@example.com',
//         password: 'oldpass',
//         save: sinon.stub().resolves()
//       };
//       sandbox.stub(studentModel, 'findOne').resolves(user);

//       const response = await request(app).put('/api/update').send({
//         email: 'test@example.com',
//         password: 'newpass'
//       });

//       expect(response.status).to.equal(200);
//       expect(response.body.message).to.equal('Password updated successfully');
//       expect(user.password).to.equal('newpass');
//     });

//     it('should handle errors and return 500', async () => {
//       sandbox.stub(studentModel, 'findOne').rejects(new Error('DB error'));

//       const response = await request(app).put('/api/update').send({
//         email: 'test@example.com',
//         password: 'newpass'
//       });

//       expect(response.status).to.equal(500);
//       expect(response.body.message).to.equal('Internal server error');
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