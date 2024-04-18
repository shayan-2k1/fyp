
const ShortList = require ("../Models/shortListModel")
const ScholarshipApp = require ("../Models/scholarshipApplicationModel")
const University = require ("../Models/universityModel")
const jwt=require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config();

async function tracking (req,res){


try{

    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const secretKey = process.env.SECRET_KEY;
    // console.log(secretKey)
    const token = authorization.split(" ")[1];
    // console.log(token)
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    console.log("decoded id",decodedToken.id);

    const studentShortlist = await ShortList.findOne({
        userId: userId,
      });

      if (studentShortlist) {
        // Extract the required information (uniID and stdId) from the `studentShortlist`
        const scholarshipID = studentShortlist.scholarshipId;
        const userId = studentShortlist.userId;
  
        
        return res.status(200).json({ scholarshipID, userId });
      } else {
        // Handle the case when the userId is not found in the ShortList
        return res.status(404).json({ error: "User not found in shortlisted Model" });
      }


}catch (error){

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getLink (req,res){
    try{
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const secretKey = process.env.SECRET_KEY;
    // console.log(secretKey)
    const token = authorization.split(" ")[1];
    // console.log(token)
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.id;
    // console.log("user idd ",decodedToken.id);

    const studentShortlist = await ShortList.findOne({
        userId: userId,
      });

      if (studentShortlist) {
        const scholarshipIDnew = studentShortlist.scholarshipId;
        const userIdnew = studentShortlist.userId;
        
        
        console.log("userId" , userIdnew)
        console.log("scholarship Id" , scholarshipIDnew)
        console.log("shortlist student" , studentShortlist)
        // Find associated uniId from ScholarshipPostApplication schema
        const scholarshipPostApplication = await ScholarshipApp.findOne({
            
                userId: userIdnew,
                scholarshipId: scholarshipIDnew
              
        });
        console.log("application post" , scholarshipPostApplication)
        // console.log("uni Id", scholarshipPostApplication.)
        
        if (scholarshipPostApplication) {
          const uniId = scholarshipPostApplication.uniId;
            console.log("university" , uniId)
          // Find university document using uniId
          const university = await University.findOne({ _id: uniId });

          console.log("university ",university)
          if (university) {
            const calendlyLink = university.calendly;
            return res.status(200).json({ calendlyLink });
          } else {
            return res.status(404).json({ error: "University not found" });
          }
        } else {
          return res.status(404).json({ error: "Associated data not found in ScholarshipPostApplication" });
        }
      } else {
        return res.status(404).json({ error: "User not found in shortlist" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

module.exports= {tracking, getLink};