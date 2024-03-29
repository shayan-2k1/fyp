const ShortlistStudent = require('../models/shortlistStudent');

// Controller to shortlist a student for a scholarship
 async function shortlistedScholarship (req, res)  {
    try {
        const { scholarshipId, userId } = req.body;

        // Check if the student is already shortlisted for the scholarship
        let existingShortlist = await ShortlistStudent.findOne({ scholarshipId });

        if (existingShortlist) {
            // Check if the student is already in the shortlist
            if (existingShortlist.userIds.includes(userId)) {
                return res.status(400).json({ error: 'Student already shortlisted for this scholarship' });
            } else {
                // Append the new userId to the existing shortlist
                existingShortlist.userIds.push(userId);
                await existingShortlist.save();
            }
        } else {
            // Create a new shortlist entry
            const shortlist = new ShortlistStudent({ scholarshipId, userIds: [userId] });
            await shortlist.save();
        }

        res.status(201).json({ message: 'Student successfully shortlisted for the scholarship' });
    } catch (error) {
        console.error('Error shortlisting student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports={
    shortlistedScholarship
}