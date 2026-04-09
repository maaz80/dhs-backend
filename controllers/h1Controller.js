// controllers/h1Controller.js
import H1Content from "../models/H1Content.js";

// Get all H1s (for admin panel)
export const getAllH1s = async (req, res) => {
     try {
          const h1s = await H1Content.find().sort({ pageName: 1, headingId: 1 });
          res.json(h1s);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Get H1s by page (for frontend)
export const getH1sByPage = async (req, res) => {
     try {
          const { pageName } = req.params;
          const h1s = await H1Content.find({ pageName });

          // Convert to key-value object for easy use
          const formattedData = {};
          h1s.forEach(h1 => {
               formattedData[h1.headingId] = h1.headingText;
          });

          res.json(formattedData);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Create or update H1 (Upsert)
export const upsertH1 = async (req, res) => {
     try {
          const { pageName, headingId, headingText } = req.body;

          const h1 = await H1Content.findOneAndUpdate(
               { pageName, headingId },
               { headingText },
               { new: true, upsert: true }
          );

          res.json(h1);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Delete H1
export const deleteH1 = async (req, res) => {
     try {
          const { id } = req.params;
          await H1Content.findByIdAndDelete(id);
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
               blogs: ['main_heading'],
               contact: ['first_line_heading', 'second_line_heading'],
               disclaimer: ['main_heading'],
               policy: ['main_heading'],
               portfolio_buyekls: ['main_heading'],
               portfolio_coinpay: ['main_heading'],
               portfolio_daccord: ['main_heading'],
               portfolio_nectar: ['main_heading'],
          };

          const headingIds = headingStructure[pageName] || [];

          // Get existing texts
          const existingData = await H1Content.find({ pageName });
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