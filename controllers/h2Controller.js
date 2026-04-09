// controllers/h2Controller.js
import H2Content from "../models/H2Content.js";

// Get all H2s (for admin panel)
export const getAllH2s = async (req, res) => {
     try {
          const h2s = await H2Content.find().sort({ pageName: 1, headingId: 1 });
          res.json(h2s);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Get H2s by page (for frontend)
export const getH2sByPage = async (req, res) => {
     try {
          const { pageName } = req.params;
          const h2s = await H2Content.find({ pageName });

          // Convert to key-value object for easy use
          const formattedData = {};
          h2s.forEach(h2 => {
               formattedData[h2.headingId] = h2.headingText;
          });

          res.json(formattedData);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Create or update H2 (Upsert)
export const upsertH2 = async (req, res) => {
     try {
          const { pageName, headingId, headingText } = req.body;

          const h2 = await H2Content.findOneAndUpdate(
               { pageName, headingId },
               { headingText },
               { new: true, upsert: true }
          );

          res.json(h2);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
};

// Delete H2
export const deleteH2 = async (req, res) => {
     try {
          const { id } = req.params;
          await H2Content.findByIdAndDelete(id);
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
               home: ['growth_journal', 'help_section', 'stack_projects_heading'],
               landing: ['why_kreeya_heading', 'work_showcase_heading'],
               contact: ['form_heading', 'description_heading'],
               // components
               menu_component: ['main_heading'],
               you_may_like_component: ['main_heading'],
               chatbot_component: ['hi_there_heading', 'bot_name']
          };

          const headingIds = headingStructure[pageName] || [];

          // Get existing texts
          const existingData = await H2Content.find({ pageName });
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