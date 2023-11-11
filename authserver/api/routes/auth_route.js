import express from "express";
import { SignUp, SingIn,google } from "../controllers/auth_controller.js";

const router = express.Router();

router.post('/signup',SignUp);
router.post('/signin', SingIn);
router.post('/google',google);

export default router;