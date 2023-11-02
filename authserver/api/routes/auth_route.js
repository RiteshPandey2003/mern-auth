import express from "express";
import { SignUp, SingIn } from "../controllers/auth_controller.js";

const router = express.Router();

router.post('/signup',SignUp);
router.post('/signin', SingIn);

export default router;