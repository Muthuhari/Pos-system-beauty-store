import express from "express";
import { createUser, loginUser } from "../controllers/UserController.js";

const usersRouter = express.Router();

// Create a new user
usersRouter.post("/", createUser);
usersRouter.post("/login", loginUser);

export default usersRouter;