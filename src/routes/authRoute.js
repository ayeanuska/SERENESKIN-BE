import express from "express";
import { insertNewUser, loginUser } from "../controllers/authController.js";
const router = express.Router();

//general user signUp
router.post("/register", insertNewUser);

router.post("/login", loginUser)

export default router;
