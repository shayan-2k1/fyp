const express = require("express");
const mongoose = require("mongoose")
const socketIo = require('socket.io');
const http = require('http');
const cron = require('node-cron');

const sendNotification = require('./notificationService.js');
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
const cors = require('cors');

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
const server = http.createServer(app);
const io = socketIo(server);

app.use("/student", studentRoute);
app.use("/document", documentRoute);
app.use("/students", infoRoute);
app.use("/profile", profileRouter);
app.use("/academic", academicRoute);
app.use("/studyInterest", academicPrefRoute);
app.use("/user", projectRouter)
app.use("/certificate", certificateRoute)
app.use("/scholarship", scholarshipRouter)

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

// Schedule task to run every day at a specific time
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

cron.schedule('* * * * *', async () => {
    try {
        const studentsWithSavedScholarships = await Student.find({
            savedScholarships: { $exists: true, $not: { $size: 0 } },
        });

        for (const student of studentsWithSavedScholarships) {
            // Assuming there is only one scholarship with a deadline on Apr-01
            const scholarship = student.savedScholarships.find(
                (scholarship) => scholarship.deadline === "Apr-02"
            );

            if (scholarship) {
                const deadlineTime = new Date(`${new Date().getFullYear()}-${scholarship.deadline}`).getTime();
                const twentyFourHoursLater = Date.now() + 24 * 60 * 60 * 1000;

                if (deadlineTime >= Date.now() && deadlineTime <= twentyFourHoursLater) {
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



app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connected to mongo db server")
}).catch(err => {
    console.log(err)
})