const ShortlistStudent = require('../models/shortlistModel');

// Controller to shortlist a student for a scholarship
async function shortlistedScholarship(req, res) {
    try {
      const { authorization } = req.headers;
  
      if (!authorization) {
        return res.status(401).json({ error: "Unauthorized!" });
      }
  
      const token = authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decodedToken.id;
      console.log(userId);
  
      const { scholarshipId } = req.body; // Make sure scholarshipId is available in the request body
      console.log(scholarshipId);
      let existingShortlist = await ShortlistStudent.findOne({ scholarshipId });
  
      if (existingShortlist) {
        if (existingShortlist.userIds.includes(userId)) {
          return res.status(400).json({ error: 'Student already shortlisted for this scholarship' });
        } else {
          existingShortlist.userIds.push(userId);
          await existingShortlist.save();
        }
      } else {
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