const express = require("express");
const mongoose = require("mongoose")
const cron = require('node-cron');
const axios = require('axios');
const Cookies = require("js-cookie");
const { Server } = require('socket.io');
const { sendNotification } = require('./notificationService.js');
const socketIo = require('socket.io');
const http = require('http');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Messages = require('./Models/chatModel')
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
const scholarshipApply = require("./Routes/scholarshipApplyRoutes.js")
const shortlistRouter=require("./Routes/shortlistRoute.js")
const mentorRoute = require("./Routes/mentorRoutes.js")
const insightRoute = require("./Routes/insightRouter.js")
const { ScholarshipApplicationController } = require('./Controllers/scholarshipApplicationController');
const authToken = Cookies.get("auth_token");
const cors = require('cors');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from this origin
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
}).listen(3002);

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
app.use("/universityP", scholarshipPostRoute)
app.use("/shortlist",shortlistRouter)
app.use("/scholarship", scholarshipApply)
app.use("/universityP", scholarshipPostRoute)
app.use("/insight", insightRoute)
const httpServer = require('http').createServer(app); // Create an HTTP server
// const io = new Server(httpServer, {
//     cors: {
//         origin: "http://localhost:3001"
//     }
// });
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3001", "http://localhost:3003","http://localhost:5000"],
        methods: ["GET", "POST"],
        credentials: true
    }
});




let userSocketMap = {};
let SocketID = null;
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    SocketID = socket.id;
    // When a user sends their info (upon connection or login)
    socket.on('userInfo', (userInfo) => {
        userSocketMap[socket.id] = userInfo;
        console.log(`User Info received: ${JSON.stringify(userInfo)} for Socket ID: ${socket.id}`);
    });

    // Handling incoming chat messages
    socket.on('sendMessage', (msg) => {
        console.log(`Message received: ${msg.text} from ${msg.senderId} to ${msg.recipientId}`);

        // Find the socket ID of the recipient, regardless of whether they are a mentor or a student
        const recipientSocketId = Object.keys(userSocketMap).find(key => userSocketMap[key].id === msg.recipientId);

        console.log("Recipient socket ID: " + recipientSocketId);

        if (recipientSocketId) {
            io.to(recipientSocketId).emit('newMessage', msg);
        } else {
            console.log(`Recipient ${msg.recipientId} not found or not connected.`);
        }
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
        delete userSocketMap[socket.id]; // Remove the user from the mapping
    });
});
let lastNotificationTime = null; // Initialize lastNotificationTime variable


cron.schedule('* * * * *', async () => { // Run once a day at midnight
    try {
        const currentTime = Date.now();

        // Check if 24 hours have passed since the last notification
        if (!lastNotificationTime || currentTime - lastNotificationTime >= 24 * 60 * 60 * 1000) {
            const studentsWithSavedScholarships = await Student.find({
                savedScholarships: { $exists: true, $not: { $size: 0 } },
            });

            for (const student of studentsWithSavedScholarships) {
                for (const scholarship of student.savedScholarships) {
                    const deadlineTime = new Date(scholarship.deadline).getTime();
                    const twentyFourHoursLater = currentTime + 24 * 60 * 60 * 1000;

                    if (deadlineTime >= currentTime && deadlineTime <= twentyFourHoursLater) {
                        const userId = SocketID; // Assuming socketId is stored in the student schema
                        const deadlineDate = new Date(scholarship.deadline).toDateString(); // Convert deadline to desired format
                        const message = `The deadline for the scholarship "${scholarship.scholarshipName}" is ${deadlineDate}, which is just around the corner.\nApply now!`;
                      
                        const userId1 = student._id;
                        
                        // Check if the notification message already exists in the array
                        const existingNotification = student.notifications.find(notification => notification.message === message);

                        if (!existingNotification) {
                            // Add the new notification to the array
                            await Student.updateOne({ _id: userId1 }, { $push: { notifications: { message: message } } });

                            // Log for debugging
                            console.log(`Sending notification to user ${userId}: ${message}`);

                            // Call the function from the notification service
                            await sendNotification(userId, message, io);
                        } else {
                            console.log(`Notification already exists for user ${userId}: ${message}`);
                        }
                    }
                }
            }

            // Update lastNotificationTime to current time
            lastNotificationTime = currentTime;
        } else {
            console.log("Notifications already sent today.");
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
