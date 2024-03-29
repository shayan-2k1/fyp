const express = require("express");
const mongoose = require("mongoose")
const cron = require('node-cron');
const { Server } = require('socket.io');
const { sendNotification } = require('./notificationService.js');
const socketIo = require('socket.io');
const http = require('http');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const Student = require('./Models/studentModel');
const studentRoute = require("./Routes/RegistrationRoutes.js")
const documentRoute = require("./Routes/documentRoutes.js")
const infoRoute = require("./Routes/personalInfoRoutes.js")
const certificateRoute = require("./Routes/certificateRoutes.js")
const academicRoute = require("./Routes/academicRoutes.js")
const academicPrefRoute = require("./Routes/studyInterestRoutes.js")
const profileRouter = require("./Routes/profileRouter.js")
const projectRouter = require("./Routes/projectRoutes.js")
const scholarshipRouter = require("./Routes/scholarshipRouter.js")
const universityRoute = require("./Routes/universityRegistrationRouter.js")
const scholarshipPostRoute = require("./Routes/scholarshipPostRouter.js")
const scholarshipApply = require ("./Routes/scholarshipApplyRoutes.js")
const mentorRoute=require("./Routes/mentorRoutes.js")
const shortlist = require ("./Routes/shortlistRoute.js")
const { ScholarshipApplicationController } = require('./Controllers/scholarshipApplicationController');

const cors = require('cors');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3002', // Allow requests from this origin
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  }));
app.use(express.static('public'));
app.use(cookieParser());
app.get('/getcookies', function (req, res) {
    const cookies = req.cookies;
    res.send(req.cookies)
    console.log(req.cookies)
    // res.status(200).json({
    //     your_cookie:cookies,
    // });
  })
  const cookie = require('cookie');
  
  http.createServer((req, res) => {
    if (req.headers.cookie) {
      const cookies = cookie.parse(req.headers.cookie);
    //   console.log(cookies);
    // ScholarshipApplicationController( { req, res, cookies });
    }
  
    console.log('Hello World');
  }).listen(3001);
  
app.use("/student", studentRoute);
app.use("/document", documentRoute);
app.use("/students", infoRoute);
app.use("/profile", profileRouter);
app.use("/academic", academicRoute);
app.use("/studyInterest", academicPrefRoute);
app.use("/user", projectRouter)
app.use("/certificate", certificateRoute)
app.use("/scholarship", scholarshipRouter)
app.use("/mentor", mentorRoute)
app.use("/university", universityRoute)
app.use("/universityP",scholarshipPostRoute)
app.use("/scholarship", scholarshipApply)
app.use("/universityP" , scholarshipPostRoute)
app.use("/shortlist" , shortlist)

const httpServer = require('http').createServer(app); // Create an HTTP server
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3001"
    }
});

// WebSocket connection handling
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
  

    // Handle storing socketId in the student schema
    socket.on('storeSocketId', async ({ token }) => {
        try {
           
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            const userId = decodedToken.id;

            const student = await Student.findById(userId);
            if (student) {
                student.socketId = socket.id;
                await student.save();
                console.log(`SocketId stored for user ${userId}: ${socket.id}`);
            }
        } catch (error) {
            console.error('Error storing socketId:', error);
        }
    });

    // Handle disconnection if needed
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});
// cron.schedule('* * * * *', async () => {
//     try {
//         const studentsWithSavedScholarships = await Student.find({
//             savedScholarships: { $exists: true, $not: { $size: 0 } },
//         });

//         for (const student of studentsWithSavedScholarships) {
//             for (const scholarship of student.savedScholarships) {
//                 const deadlineTime = new Date(scholarship.deadline).getTime();
//                 const twentyFourHoursLater = Date.now() + 24 * 60 * 60 * 1000;

//                 if (deadlineTime >= Date.now() && deadlineTime <= twentyFourHoursLater) {
//                     const userId = student.socketId; // Assuming socketId is stored in the student schema
//                     const message = `The deadline for the scholarship "${scholarship.scholarshipName}" is approaching. Apply now!`;

//                     // Call the function from the notification service
//                     await sendNotification(userId, message, io);
//                 }
//             }
//         }
//     } catch (error) {
//         console.error('Error checking approaching deadlines', error);
//     }
// });
const convertCustomDeadlineToCron = (customDeadline) => {
    const [month, day] = customDeadline.split('-');
    const monthIndex = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(month);

    if (monthIndex !== -1) {
        return `${parseInt(day) - 1} 2 * ${monthIndex + 1}`;
    }

    return null;
};

cron.schedule('* * * * *', async () => {
    
    try {
        const studentsWithSavedScholarships = await Student.find({
            savedScholarships: { $exists: true, $not: { $size: 0 } },
        });

        for (const student of studentsWithSavedScholarships) {
            const scholarship = student.savedScholarships.find(
                (scholarship) => scholarship.deadline === "Apr-02"
            );

            if (scholarship) {
               
                const cronSchedule = convertCustomDeadlineToCron(scholarship.deadline);

                if (cronSchedule) {
                   
                    

                        const userId = student.socketId; // Assuming socketId is stored in the student schema
                        const message = `The deadline for the scholarship "${scholarship.scholarshipName}" is approaching. Apply now!`;

                        // Call the function from the notification service
                        await sendNotification(userId, message, io);
                
                }
            }
        }
    } catch (error) {
        console.error('Error checking approaching deadlines', error);
    }
});

const PORT = process.env.PORT || 3000;
httpServer.listen(5000, () => {
    console.log("Socket Server listening on port 5000");
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connected to mongo db server")
}).catch(err => {
    console.log(err)
})
