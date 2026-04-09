// routes/h3Routes.js
import express from "express";
import {
     getAllH3s,
     getH3sByPage,
     upsertH3,
     deleteH3,
     getHeadingIdsByPage
} from "../controllers/h3Controller.js";

const router = express.Router();

router.get("/h3/all", getAllH3s);
router.get("/h3/page/:pageName", getH3sByPage);
router.get("/h3/structure/:pageName", getHeadingIdsByPage);
router.post("/h3/upsert", upsertH3);
router.delete("/h3/:id", deleteH3);

export default router;