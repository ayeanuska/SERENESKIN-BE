import express from "express";
import { insertNewUser } from "../controllers/authController.js";
const router = express.Router();

//general user signUp
router.post("/register", insertNewUser);

export default router;
