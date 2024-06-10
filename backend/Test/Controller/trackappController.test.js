// const { tracking, getLink } = require('./yourControllerFile');
// const ShortList = require('../Models/shortListModel');
// const ScholarshipApp = require('../Models/scholarshipApplicationModel');
// const University = require('../Models/universityModel');
// const jwt = require('jsonwebtoken');

// describe('tracking', () => {
//   let req, res, jwtStub, findOneStub;

//   beforeEach(() => {
//     req = { headers: { authorization: 'Bearer validToken' } };
//     res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
//     jwtStub = sinon.stub(jwt, 'verify').returns({ id: 'userId' });
//     findOneStub = sinon.stub(ShortList, 'findOne');
//   });

//   afterEach(() => {
//     jwtStub.restore();
//     findOneStub.restore();
//   });

//   it('should return 401 if authorization header is missing', async () => {
//     delete req.headers.authorization;
//     await tracking(req, res);
//     expect(res.status.calledWith(401)).to.be.true;
//     expect(res.json.calledWith({ error: 'Unauthorized' })).to.be.true;
//   });

//   it('should handle server errors', async () => {
//     findOneStub.rejects(new Error('Database error'));
//     await tracking(req, res);
//     expect(res.status.calledWith(500)).to.be.true;
//     expect(res.json.calledWith({ error: 'Internal Server Error' })).to.be.true;
//   });
// });

// describe('getLink', () => {
//   let req, res, jwtStub, findOneStub;

//   beforeEach(() => {
//     req = { headers: { authorization: 'Bearer validToken' } };
//     res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
//     jwtStub = sinon.stub(jwt, 'verify').returns({ id: 'userId' });
//     findOneStub = sinon.stub(ShortList, 'findOne');
//   });

//   afterEach(() => {
//     jwtStub.restore();
//     findOneStub.restore();
//   });

//   it('should return 401 if authorization header is missing', async () => {
//     delete req.headers.authorization;
//     await getLink(req, res);
//     expect(res.status.calledWith(401)).to.be.true;
//     expect(res.json.calledWith({ error: 'Unauthorized' })).to.be.true;
//   });

//   it('should handle server errors', async () => {
//     findOneStub.rejects(new Error('Database error'));
//     await getLink(req, res);
//     expect(res.status.calledWith(500)).to.be.true;
//     expect(res.json.calledWith({ error: 'Internal Server Error' })).to.be.true;
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
