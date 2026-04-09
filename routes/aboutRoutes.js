import express from "express";
import upload from "../middleware/multer.js";

import {
     getAbout,
     createAbout,
     updateAbout,
     deleteAbout
} from "../controllers/aboutController.js";

const router = express.Router();

router.get("/about", getAbout);

router.post(
     "/about",
     upload.fields([
          { name: "leftImg", maxCount: 1 },
          { name: "rightImg", maxCount: 1 }
     ]),
     createAbout
);

router.put(
     "/about/:id",
     upload.fields([
          { name: "leftImg", maxCount: 1 },
          { name: "rightImg", maxCount: 1 }
     ]),
     updateAbout
);

router.delete("/about/:id", deleteAbout);

export default router;