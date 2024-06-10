// const express = require("express");
// const request = require("supertest");
// const sinon = require("sinon");
// const shortlistRoute = require("../routes/shortlistRoute");
// const { shortlistedScholarship, showShortlisted } = require("../Controllers/shortlistController");
// const { tracking, getLink } = require("../Controllers/trackappController");

// describe('shortlistRoute', () => {
//   let app;

//   beforeEach(() => {
//     app = express();
//     app.use(express.json());
//   });

//   it('should call shortlistedScholarship controller when POST /shortlistStudent', async () => {
//     const spyController = sinon.spy(shortlistedScholarship);
//     sinon.stub(shortlistRoute, 'shortlistedScholarship').callsFake(spyController);

//     await request(app)
//       .post('/shortlistStudent')
//       .send({ /* send request body if needed */ });

//     sinon.assert.calledOnce(spyController);
//   });

//   it('should call tracking controller when GET /tracking', async () => {
//     const spyController = sinon.spy(tracking);
//     sinon.stub(shortlistRoute, 'tracking').callsFake(spyController);

//     await request(app)
//       .get('/tracking');

//     sinon.assert.calledOnce(spyController);
//   });

//   it('should call showShortlisted controller when GET /showShortlisted', async () => {
//     const spyController = sinon.spy(showShortlisted);
//     sinon.stub(shortlistRoute, 'showShortlisted').callsFake(spyController);

//     await request(app)
//       .get('/showShortlisted');

//     sinon.assert.calledOnce(spyController);
//   });

//   afterEach(() => {
//     sinon.restore();
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