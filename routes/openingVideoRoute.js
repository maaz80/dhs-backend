import express from "express";
import upload from "../middleware/multer.js";
import { getOpeningVideo, updateOpeningVideo } from "../controllers/openingVideoController.js";

const router = express.Router();

router.get("/opening-video", getOpeningVideo);
router.put("/opening-video", upload.single("video"), updateOpeningVideo);

export default router;