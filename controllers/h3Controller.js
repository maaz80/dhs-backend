// controllers/h3Controller.js
import H3Content from "../models/H3Content.js";

// Get all H3s (for admin panel)
export const getAllH3s = async (req, res) => {
     try {
          const h3s = await H3Content.find().sort({ pageName: 1, headingId: 1 });
          res.json(h3s);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Get H3s by page (for frontend)
export const getH3sByPage = async (req, res) => {
     try {
          const { pageName } = req.params;
          const h3s = await H3Content.find({ pageName });

          // Convert to key-value object for easy use
          const formattedData = {};
          h3s.forEach(h3 => {
               formattedData[h3.headingId] = h3.headingText;
          });

          res.json(formattedData);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Create or update H3 (Upsert)
export const upsertH3 = async (req, res) => {
     try {
          const { pageName, headingId, headingText } = req.body;

          const h3 = await H3Content.findOneAndUpdate(
               { pageName, headingId },
               { headingText },
               { new: true, upsert: true }
          );

          res.json(h3);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Delete H3
export const deleteH3 = async (req, res) => {
     try {
          const { id } = req.params;
          await H3Content.findByIdAndDelete(id);
          res.json({ message: "Deleted successfully" });
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Get all heading IDs by page (for dropdown)
export const getHeadingIdsByPage = async (req, res) => {
     try {
          const { pageName } = req.params;

          // You can store this mapping in a separate config or database
          const headingStructure = {
               home: ['faq_heading', 'blogs_heading_3', 'contact_heading_3'],
          };

          const headingIds = headingStructure[pageName] || [];

          // Get existing texts
          const existingData = await H3Content.find({ pageName });
          const existingMap = {};
          existingData.forEach(item => {
               existingMap[item.headingId] = item.headingText;
          });

          res.json({
               headingIds,
               existingData: existingMap
          });
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};