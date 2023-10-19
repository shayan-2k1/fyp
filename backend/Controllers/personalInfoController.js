// const personalInfoSchema = require("../Models/personalInfoModel");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const { MongoClient } = require('mongodb');
// const uri = process.env.MONGO_URL;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function personalInfo(req, res) {
//   try {
//     const { authorization } = req.headers;

//     if (!authorization) {
//       return res.status(401).json({ error: "Unauthorized!" });
//     }
//     let {
//       firstname,
//       lastname,
//       contactNo,
//       gender,
//       nationality,
//       countryOfResidence,
//       dob,
//     } = req.body;

//     const profile = new personalInfoSchema({
//       firstname,
//       lastname,
//       contactNo,
//       gender,
//       nationality,
//       countryOfResidence,
//       dob,
//     });
//     await profile.save();

//     res.status(201).json(profile);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// }

// module.exports = {
//   personalInfo,
// };
