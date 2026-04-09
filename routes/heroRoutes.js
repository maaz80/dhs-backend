import express from "express";
import upload from "../middleware/multer.js";

import { getHero, updateHero } from "../controllers/heroController.js";

const router = express.Router();

router.get("/hero", getHero);

router.put("/hero", upload.single("video"), updateHero);

export default router;