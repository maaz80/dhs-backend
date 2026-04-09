import express from "express";
import upload from "../middleware/multer.js";

import {
     getFooter,
     updateFooter
} from "../controllers/footerController.js";

const router = express.Router();

router.get("/footer", getFooter);

router.put("/footer", upload.single("logo"), updateFooter);

export default router;