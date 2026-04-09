import express from "express";
import upload from "../middleware/multer.js";

import {
     getServices,
     createService,
     updateService,
     deleteService
} from "../controllers/serviceController.js";

const router = express.Router();

router.get("/services", getServices);

router.post("/services", upload.single("image"), createService);

router.put("/services/:id", upload.single("image"), updateService);

router.delete("/services/:id", deleteService);

export default router;