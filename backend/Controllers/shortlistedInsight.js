const Scholarship = require('../Models/scholarshipApplicationModel');
const Studentshortlisted = require('../Models/shortListModel');

async function fetchusers(req, res) {
    console.log("alinaaa");
    try {
        const { scholarshipId } = req.params;
        console.log("ssss" + scholarshipId);

        // Find the shortlisted entry for the given scholarship ID
        const shortlistedEntry = await Studentshortlisted.findOne({ scholarshipId });
        if (!shortlistedEntry) {
            console.log("No shortlisted entries found for this scholarship.");
            return res.status(404).send('No shortlisted entries found for this scholarship.');
        }

        // Extract user IDs from the shortlisted document
        const userIds = shortlistedEntry.userIds;

        // Find all applications for these user IDs and the specific scholarship
        const applications = await Scholarship.find({
            userId: { $in: userIds },
            scholarshipId: scholarshipId
        }).exec();  // Use exec() to explicitly execute the query

        res.json(applications);
    } catch (error) {
        console.error('Failed to fetch scholarship applications:', error);
        res.status(500).send('Internal server error');
    }
}

module.exports = {
    fetchusers,
};
