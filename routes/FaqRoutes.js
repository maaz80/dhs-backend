import express from "express";
import { createFaq, deleteFaq, getFaqs, updateFaq } from "../controllers/faqController.js";


const router = express.Router();

router.get("/faqs", getFaqs);
router.post("/faqs", createFaq);
router.put("/faqs/:id", updateFaq);
router.delete("/faqs/:id", deleteFaq);

export default router;