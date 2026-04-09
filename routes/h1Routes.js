// routes/h1Routes.js
import express from "express";
import {
     getAllH1s,
     getH1sByPage,
     upsertH1,
     deleteH1,
     getHeadingIdsByPage
} from "../controllers/h1Controller.js";

const router = express.Router();

router.get("/h1/all", getAllH1s);
router.get("/h1/page/:pageName", getH1sByPage);
router.get("/h1/structure/:pageName", getHeadingIdsByPage);
router.post("/h1/upsert", upsertH1);
router.delete("/h1/:id", deleteH1);

export default router;