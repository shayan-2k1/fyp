// const mongoose = require('mongoose');
// const { expect } = require('chai');
// const AcademicBackground = require('../path/to/your/academicBackgroundModel'); // Adjust the path as necessary

// describe('AcademicBackground Model', () => {
//   before((done) => {
//     mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
//     const db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', () => {
//       console.log('Connected to test database');
//       done();
//     });
//   });

//   after((done) => {
//     mongoose.connection.db.dropDatabase(() => {
//       mongoose.connection.close(done);
//     });
//   });

//   it('should be invalid if required fields are missing', (done) => {
//     const academicBackground = new AcademicBackground();

//     academicBackground.validate((err) => {
//       expect(err.errors.user).to.exist;
//       expect(err.errors.degree).to.exist;
//       expect(err.errors.discipline).to.exist;
//       expect(err.errors.country).to.exist;
//       expect(err.errors.university).to.exist;
//       expect(err.errors.GPA).to.exist;
//       expect(err.errors.yearOfCompletion).to.exist;
//       done();
//     });
//   });

//   it('should be invalid if GPA is out of range', (done) => {
//     const academicBackground = new AcademicBackground({
//       user: mongoose.Types.ObjectId(),
//       degree: 'Bachelor',
//       discipline: 'Computer Science',
//       country: 'Test Country',
//       university: 'Test University',
//       GPA: 5.0, // Invalid GPA
//       yearOfCompletion: 2020,
//     });

//     academicBackground.validate((err) => {
//       expect(err.errors.GPA).to.exist;
//       done();
//     });
//   });

//   it('should be invalid if yearOfCompletion is out of range', (done) => {
//     const academicBackground = new AcademicBackground({
//       user: mongoose.Types.ObjectId(),
//       degree: 'Bachelor',
//       discipline: 'Computer Science',
//       country: 'Test Country',
//       university: 'Test University',
//       GPA: 3.5,
//       yearOfCompletion: 2000, // Invalid yearOfCompletion
//     });

//     academicBackground.validate((err) => {
//       expect(err.errors.yearOfCompletion).to.exist;
//       done();
//     });
//   });

//   it('should save a valid academic background', (done) => {
//     const academicBackground = new AcademicBackground({
//       user: mongoose.Types.ObjectId(),
//       degree: 'Bachelor',
//       discipline: 'Computer Science',
//       country: 'Test Country',
//       university: 'Test University',
//       GPA: 3.5,
//       yearOfCompletion: 2020,
//     });

//     academicBackground.save((err, savedAcademicBackground) => {
//       expect(err).to.be.null;
//       expect(savedAcademicBackground).to.have.property('_id');
//       expect(savedAcademicBackground.degree).to.equal('Bachelor');
//       done();
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