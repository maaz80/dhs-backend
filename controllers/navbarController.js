import Navbar from "../models/Navbar.js";

export const getNavbar = async (req, res) => {

     try {

          const navbar = await Navbar.findOne().sort({ createdAt: -1 });

          res.json(navbar);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};


export const updateNavbar = async (req, res) => {

     try {

          const { buttonText } = req.body;

          const updateData = {
               buttonText
          };

          if (req.files?.logo1) {
               updateData.logo1 = req.files.logo1[0].path;
          }

          if (req.files?.logo2) {
               updateData.logo2 = req.files.logo2[0].path;
          }

          const navbar = await Navbar.findOneAndUpdate(
               {},
               updateData,
               { new: true, upsert: true }
          );

          res.json(navbar);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};