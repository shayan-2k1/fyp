const Scholarship = require('../Models/scholarshipApplicationModel');
const Studentshortlisted = require('../Models/shortListModel');

async function fetchusers(req, res) {
  console.log("alinaaa");
  try {
      const { scholarshipId } = req.params;
      console.log("ssss" + scholarshipId);

      // Initialize variables
      let userIds = [];
      let shortlistedCount = 0;

      // Find the shortlisted entry for the given scholarship ID
      const shortlistedEntry = await Studentshortlisted.findOne({ scholarshipId });

      if (shortlistedEntry) {
          // Extract user IDs from the shortlisted document
          userIds = shortlistedEntry.userIds;
          shortlistedCount = userIds.length;
      } else {
          console.log("No shortlisted entries found for this scholarship.");
      }

      // Count all applications for the given scholarship ID
      const totalApplicationsCount = await Scholarship.countDocuments({ scholarshipId }).exec();

      // Calculate the number of non-shortlisted applications
      const nonShortlistedCount = totalApplicationsCount - shortlistedCount;

      // Find all applications for these user IDs and the specific scholarship
      const applications = await Scholarship.find({
          userId: { $in: userIds },
          scholarshipId: scholarshipId
      }).exec();

      res.json({
          shortlistedCount: shortlistedCount,
          totalApplicationsCount: totalApplicationsCount,
          nonShortlistedCount: nonShortlistedCount,
          applications: applications
      });
  } catch (error) {
      console.error('Failed to fetch scholarship applications:', error);
      res.status(500).send('Internal server error');
  }
}


async function getuser(req, res) {
    console.log("Alina ")
    const { applicationId } = req.params;
    console.log(applicationId)
  try {
    // Find the application by ID
    const application = await Scholarship.findById(applicationId);

    if (!application) {
      console.log("Alina11 ")
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json(application);
  } catch (error) {
    console.error('Error fetching application:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
async function updateStatus(req, res) {
  const { applicationId } = req.params; // Assuming applicationId is passed as a URL parameter
  const { status} = req.body; // Assuming the new status is sent in the request body
console.log(status )
  try {
    // Find the scholarship application by its _id
    const application = await Scholarship.findById(applicationId);

    if (!application) {
      // If application is not found, return 404 Not Found status
      return res.status(404).json({ message: 'Scholarship application not found.' });
    }

    // Update the status of the scholarship application
    application.status = status;
    // Save the updated application
    const updatedApplication = await application.save();
console.log(updatedApplication)
    // If application is found and updated successfully, return the updated application
    return res.status(200).json(updatedApplication);
  } catch (error) {
    console.error("Failed to update status:", error);
    // Handle error and return appropriate response
    return res.status(500).json({ message: 'Failed to update status.' });
  }
}


module.exports = {
    fetchusers,
    getuser,
    updateStatus
};
