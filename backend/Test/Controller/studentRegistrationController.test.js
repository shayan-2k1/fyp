// const { expect } = require('chai');
// const sinon = require('sinon');
// const mockRequire = require('mock-require');
// const jwt = require('jsonwebtoken');

// describe('studentRegistration Controller', () => {
//   let studentModel, studentRegistration, req, res, sandbox;

//   before(() => {
//     studentModel = {
//       findOne: sinon.stub(),
//       prototype: {
//         save: sinon.stub()
//       }
//     };

//     mockRequire('../../src/models/studentModel', studentModel);
//     studentRegistration = require('../../src/controllers/studentRegistration');
//   });

//   beforeEach(() => {
//     sandbox = sinon.createSandbox();
//     req = {
//       body: {}
//     };
//     res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//       send: sinon.stub(),
//       cookie: sinon.stub()
//     };
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   describe('signup', () => {
//     it('should return 400 if any field is missing', async () => {
//       req.body = { username: 'testuser' }; // missing password and email
//       await studentRegistration.signup(req, res);
//       expect(res.status.calledWith(400)).to.be.true;
//       expect(res.json.calledWith({ message: 'Enter all fields!' })).to.be.true;
//     });

//     it('should return 400 if user already exists', async () => {
//       req.body = { username: 'testuser', password: 'testpass', email: 'test@example.com' };
//       studentModel.findOne.resolves({ email: 'test@example.com' });
//       await studentRegistration.signup(req, res);
//       expect(res.status.calledWith(400)).to.be.true;
//       expect(res.json.calledWith({ message: 'user already exits!' })).to.be.true;
//     });

//     it('should create a new user if all fields are valid', async () => {
//       req.body = { username: 'testuser', password: 'testpass', email: 'test@example.com' };
//       studentModel.findOne.resolves(null);
//       studentModel.prototype.save.resolves({ username: 'testuser', email: 'test@example.com' });
//       await studentRegistration.signup(req, res);
//       expect(res.status.calledWith(200)).to.be.true;
//       expect(res.json.calledWith({ username: 'testuser', email: 'test@example.com' })).to.be.true;
//     });

//     it('should handle errors and return 400', async () => {
//       req.body = { username: 'testuser', password: 'testpass', email: 'test@example.com' };
//       studentModel.findOne.rejects(new Error('DB error'));
//       await studentRegistration.signup(req, res);
//       expect(res.status.calledWith(400)).to.be.true;
//       expect(res.json.calledWith(sinon.match.has('message', 'user not created'))).to.be.true;
//     });
//   });

//   describe('signin', () => {
//     it('should return 404 if user is not found', async () => {
//       req.body = { email: 'test@example.com', password: 'testpass' };
//       studentModel.findOne.resolves(null);
//       await studentRegistration.signin(req, res);
//       expect(res.status.calledWith(404)).to.be.true;
//       expect(res.send.calledWith({ message: 'User not found' })).to.be.true;
//     });

//     it('should return 400 if password does not match', async () => {
//       req.body = { email: 'test@example.com', password: 'wrongpass' };
//       studentModel.findOne.resolves({ email: 'test@example.com', password: 'testpass' });
//       await studentRegistration.signin(req, res);
//       expect(res.status.calledWith(400)).to.be.true;
//       expect(res.send.calledWith({ message: 'Password not matched' })).to.be.true;
//     });

//     it('should return 200 and a token if credentials are valid', async () => {
//       req.body = { email: 'test@example.com', password: 'testpass' };
//       const user = { _id: '1', username: 'testuser', email: 'test@example.com', password: 'testpass' };
//       studentModel.findOne.resolves(user);
//       const token = 'testtoken';
//       sandbox.stub(jwt, 'sign').returns(token);
//       await studentRegistration.signin(req, res);
//       expect(res.status.calledWith(200)).to.be.true;
//       expect(res.send.calledWith({ user, token })).to.be.true;
//     });

//     it('should handle errors and return 500', async () => {
//       req.body = { email: 'test@example.com', password: 'testpass' };
//       studentModel.findOne.rejects(new Error('DB error'));
//       await studentRegistration.signin(req, res);
//       expect(res.status.calledWith(500)).to.be.true;
//       expect(res.send.calledWith(sinon.match.has('error'))).to.be.true;
//     });
//   });

//   describe('update', () => {
//     it('should return 404 if user is not found', async () => {
//       req.body = { email: 'test@example.com', password: 'newpass' };
//       studentModel.findOne.resolves(null);
//       await studentRegistration.update(req, res);
//       expect(res.status.calledWith(404)).to.be.true;
//       expect(res.send.calledWith({ message: 'User not found' })).to.be.true;
//     });

//     it('should update password if user is found', async () => {
//       req.body = { email: 'test@example.com', password: 'newpass' };
//       const user = { email: 'test@example.com', password: 'oldpass', save: sinon.stub().resolves() };
//       studentModel.findOne.resolves(user);
//       await studentRegistration.update(req, res);
//       expect(user.password).to.equal('newpass');
//       expect(user.save.calledOnce).to.be.true;
//       expect(res.status.calledWith(200)).to.be.true;
//       expect(res.send.calledWith({ message: 'Password updated successfully' })).to.be.true;
//     });

//     it('should handle errors and return 500', async () => {
//       req.body = { email: 'test@example.com', password: 'newpass' };
//       studentModel.findOne.rejects(new Error('DB error'));
//       await studentRegistration.update(req, res);
//       expect(res.status.calledWith(500)).to.be.true;
//       expect(res.send.calledWith({ message: 'Internal server error' })).to.be.true;
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
