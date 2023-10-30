import express from "express";
import { SIgnUp } from "../controllers/auth_controller.js";

const router = express.Router();

router.post('/',SIgnUp);

export default router;