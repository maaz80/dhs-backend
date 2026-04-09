import Footer from "../models/Footer.js";

export const getFooter = async (req, res) => {

     try {

          const footer = await Footer.findOne();

          res.json(footer);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};


export const updateFooter = async (req, res) => {

     try {

          const updateData = req.body;

          if (req.file) {
               updateData.logo = req.file.path;
          }

          const footer = await Footer.findOneAndUpdate(
               {},
               updateData,
               { new: true, upsert: true }
          );

          res.json(footer);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};