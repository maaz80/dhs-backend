import Service from "../models/Service.js";

export const getServices = async (req, res) => {

     try {

          const services = await Service.find().sort({ createdAt: 1 });

          res.json(services);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};


export const createService = async (req, res) => {

     try {

          const { title, points } = req.body;

          const imageUrl = req.file?.path || "";

          const parsedPoints = JSON.parse(points);

          const service = new Service({
               title,
               image: imageUrl,
               points: parsedPoints
          });

          await service.save();

          res.json(service);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};


export const updateService = async (req, res) => {

     try {

          const { id } = req.params;

          const updateData = {
               title: req.body.title,
               points: JSON.parse(req.body.points)
          };

          if (req.file) {

               updateData.image = req.file.path;

          }

          const service = await Service.findByIdAndUpdate(
               id,
               updateData,
               { new: true }
          );

          res.json(service);

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};


export const deleteService = async (req, res) => {

     try {

          await Service.findByIdAndDelete(req.params.id);

          res.json({ message: "Deleted" });

     } catch (error) {

          res.status(500).json({ error: error.message });

     }

};