const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (modify as per your actual user model)
    required: true,
  },
  githubRepos: [
    {
      type: String, // Storing GitHub repository links as strings in an array
      validate: {
        validator: function(value) {
          // Custom validation function to validate GitHub repository links (You can use your own URL validation logic here)
          return /^(https?:\/\/)?(www\.)?github.com\/[^\s/]+\/[^\s/]+\/?$/i.test(value);
        },
        message: props => `${props.value} is not a valid GitHub repository link!`,
      },
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
