// routes/h2Routes.js
import express from "express";
import {
     getAllH2s,
     getH2sByPage,
     upsertH2,
     deleteH2,
     getHeadingIdsByPage
} from "../controllers/h2Controller.js";

const router = express.Router();

router.get("/h2/all", getAllH2s);
router.get("/h2/page/:pageName", getH2sByPage);
router.get("/h2/structure/:pageName", getHeadingIdsByPage);
router.post("/h2/upsert", upsertH2);
router.delete("/h2/:id", deleteH2);

export default router;