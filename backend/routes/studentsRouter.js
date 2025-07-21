import express from "express";
const studentsRouter = express.Router();
import Student from "../models/student.js";

import { createStudent, getStudent } from "../controllers/StudentController.js";

// Get all students
studentsRouter.get("/", getStudent);
// Create a new student
studentsRouter.post("/", createStudent);

export default studentsRouter;

