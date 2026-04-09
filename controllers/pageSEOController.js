import PageSEO from "../models/PageSEO.js";
import mongoose from "mongoose";

// Get SEO for a specific page
export const getPageSEO = async (req, res) => {
     try {
          const { pageId } = req.params;

          const seo = await PageSEO.findOne({ pageSlug: pageId });

          if (!seo) {
               return res.json({ title: "", description: "" });
          }

          res.json(seo);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Create or Update SEO for a specific page
export const updatePageSEO = async (req, res) => {
     try {
          const { pageId } = req.params;
          const { title, description } = req.body;

          let seo = await PageSEO.findOne({ pageSlug: pageId });

          if (seo) {
               seo.title = title;
               seo.description = description;
               await seo.save();
          } else {
               seo = await PageSEO.create({
                    pageSlug: pageId,
                    title,
                    description
               });
          }

          res.json(seo);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};