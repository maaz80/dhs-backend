import Navigation from "../models/Navigation.js";


export const saveNavigation = async (req, res) => {

     try {

          const { pages, projects, socials } = req.body;

          await Navigation.deleteMany({});

          const data = [];

          pages.forEach(item => {
               if (item.name && item.link && item.order) {
                    data.push({ type: "page", ...item });
               }
          });

          projects.forEach(item => {
               if (item.name && item.link && item.order) {
                    data.push({ type: "project", ...item });
               }
          });

          socials.forEach(item => {
               if (item.name && item.link && item.order) {
                    data.push({ type: "social", ...item });
               }
          });

          await Navigation.insertMany(data);

          res.json({ message: "Saved" });

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};



export const getNavigation = async (req, res) => {

     try {

          const data = await Navigation.find().sort({ order: 1 });

          res.json({
               pages: data.filter(i => i.type === "page"),
               projects: data.filter(i => i.type === "project"),
               socials: data.filter(i => i.type === "social")
          });

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};