import Hero from "../models/Hero.js";

export const getHero = async (req, res) => {

     try {

          const hero = await Hero.findOne();

          res.json(hero);

     }
     catch (error) {

          res.status(500).json({ error: error.message });

     }

};

export const updateHero = async (req, res) => {

     try {

          const updateData = req.body;

          if (req.file) {
               updateData.video = req.file.path;
          }

          const hero = await Hero.findOneAndUpdate(
               {},
               updateData,
               { new: true, upsert: true }
          );

          res.json(hero);

     }
     catch (error) {

          res.status(500).json({ error: error.message });

     }

};