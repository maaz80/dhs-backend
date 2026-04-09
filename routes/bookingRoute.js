import express from "express";
import { sendOTP, verifyOTPAndSubmit } from "../controllers/otpController.js";

const router = express.Router();

router.post("/send-otp", sendOTP);
router.post("/submit-booking", verifyOTPAndSubmit);

export default router;