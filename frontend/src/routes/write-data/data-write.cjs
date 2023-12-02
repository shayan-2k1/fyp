const admin = require("firebase-admin");
const fs = require("fs");
const csvParser = require("csv-parser");



var serviceAccount = require("../../confidential/react-app-34af3-firebase-adminsdk-c1yzn-ecbba4fc0e.json");
  

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-app-34af3-default-rtdb.firebaseio.com"
});


const scholarshipsRef = admin.database().ref('scholarships');

// Replace with the path to your CSV file
const csvFilePath = '../../../../scrapy-project/scholarship_scraper/scholarship_scraper/scholarships.csv';

// Read and import data from CSV
fs.createReadStream(csvFilePath)
    .pipe(csvParser())
    .on('data', (row) => {
        const scholarshipData = {
            name: row.name,
            deadline: row.deadline, 
            amount: row.amount,
            description: row.description,
            location: row.location,
            eligibility: row.eligibility,
            link: row.link,

        };

    scholarshipsRef.push(scholarshipData);
  })
  .on('end', () => {
    console.log('Data import completed');
    process.exit();
  })
  .on('error', (error) => {
    console.error('Error importing data:', error.message);
    process.exit(1);
  });