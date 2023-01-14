import express from "express";
import { login, register } from "./authController.js";

const apiRoute = express.Router();

apiRoute.get("/login", login);

apiRoute.post("/register", register);

export default apiRoute;
