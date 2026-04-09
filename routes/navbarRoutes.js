import express from "express";
import upload from "../middleware/multer.js";

import {
     getNavbar,
     updateNavbar
} from "../controllers/navbarController.js";

const router = express.Router();

router.get("/navbar", getNavbar);

router.put(
     "/navbar",
     upload.fields([
          { name: "logo1", maxCount: 1 },
          { name: "logo2", maxCount: 1 }
     ]),
     updateNavbar
);

export default router;