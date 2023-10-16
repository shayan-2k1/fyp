import express from "express";
import {studentController}  from '../controllers/student.controller.js';

const studentRouter = express.Router();
studentRouter.post("/signup",studentController.signup);

studentRouter.post("/signin",studentController.signin);
studentRouter.put("/update" , studentController.update)

export const sRoute=studentRouter;