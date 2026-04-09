import OpeningVideo from "../models/OpeningVideo.js";

export const getOpeningVideo = async (req, res) => {
     try {
          const data = await OpeningVideo.findOne();
          res.json(data);
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
};

export const updateOpeningVideo = async (req, res) => {
     try {
          const updateData = {};
          if (req.file) {
               updateData.video = req.file.path; // Cloudinary URL
          }
          const data = await OpeningVideo.findOneAndUpdate(
               {},
               updateData,
               { new: true, upsert: true }
          );
          res.json(data);
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
};