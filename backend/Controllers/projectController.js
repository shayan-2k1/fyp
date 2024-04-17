const Project = require('../Models/projectModel');
const jwt = require("jsonwebtoken");
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

async function project(req, res) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const secretKey = process.env.SECRET_KEY;
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secretKey);

    const userId = decodedToken.id;

    const { githubRepo } = req.body; // Assuming 'githubRepo' is sent from the frontend

    // Find the project for the given userId
    let user = await Project.findOne({ user: userId });

    if (!user) {
      // If project not found, create a new one and add the first link
      const newProject = new Project({
        user: userId,
        githubRepos: [githubRepo], // Store the first link as an array
      });

      // Save the new project with the user's GitHub repository link
      await newProject.save();

      return res.status(200).json({ message: 'GitHub repository link added successfully' });
    } else {
      // If project exists, add the new link to the existing array of links
      user.githubRepos.push(githubRepo);

      // Save the updated project with the new link added
      await user.save();

      return res.status(200).json({ message: 'GitHub repository link added successfully' });
    }
  } catch (error) {
    console.error('Error adding GitHub repository link:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getGithubRepos(req, res) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      const secretKey = process.env.SECRET_KEY;
      const token = authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, secretKey);
      const userId = decodedToken.id;
  
      // Find the project for the given user ID
      const project = await Project.findOne({ user: userId });
  
      if (!project || !project.githubRepos || project.githubRepos.length === 0) {
        return res.status(404).json({ message: 'No GitHub repository links found for the user' });
      }
  
      // Return the GitHub repository links
      return res.status(200).json({ githubRepos: project.githubRepos });
    } catch (error) {
      console.error('Error fetching GitHub repository links:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

module.exports = {
  project,
  getGithubRepos
};
