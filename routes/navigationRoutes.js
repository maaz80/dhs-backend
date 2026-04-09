import express from "express";
import { saveNavigation, getNavigation } from "../controllers/navigationController.js";

const router = express.Router();

router.post("/navigation", saveNavigation);
router.get("/navigation", getNavigation);

export default router;