import About from "../models/About.js";

export const getAbout = async (req, res) => {

     try {

          const about = await About.find().sort({ createdAt: -1 });

          res.json(about);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};


export const createAbout = async (req, res) => {

     try {

          const { quote, title } = req.body;

          const leftImg = req.files?.leftImg?.[0]?.path || "";
          const rightImg = req.files?.rightImg?.[0]?.path || "";

          const about = new About({
               leftImg,
               rightImg,
               quote,
               title,
          });

          await about.save();

          res.json(about);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};


export const updateAbout = async (req, res) => {

     try {

          const { id } = req.params;

          const updateData = {
               quote: req.body.quote,
               title: req.body.title
          };

          if (req.files?.leftImg) {
               updateData.leftImg = req.files.leftImg[0].path;
          }

          if (req.files?.rightImg) {
               updateData.rightImg = req.files.rightImg[0].path;
          }

          const about = await About.findByIdAndUpdate(
               id,
               updateData,
               { new: true }
          );

          res.json(about);

     } catch (error) {

          console.error("UPDATE ABOUT ERROR:", error);
          res.status(500).json({ error: error.message });

     }

};


export const deleteAbout = async (req, res) => {

     try {

          await About.findByIdAndDelete(req.params.id);

          res.json({ message: "Deleted" });

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};