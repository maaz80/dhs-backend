import Faq from "../models/Faq.js";


export const getFaqs = async (req, res) => {

     try {

          const faqs = await Faq.find().sort({ createdAt: 1 });
          res.json(faqs);

     } catch (err) {

          res.status(500).json({ error: err.message });

     }

};



export const createFaq = async (req, res) => {

     try {

          const { question, answer } = req.body;

          const faq = new Faq({ question, answer });

          await faq.save();

          res.json(faq);

     } catch (err) {

          res.status(500).json({ error: err.message });

     }

};



export const updateFaq = async (req, res) => {

     try {

          const { id } = req.params;
          const { question, answer } = req.body;

          const faq = await Faq.findByIdAndUpdate(
               id,
               { question, answer },
               { new: true }
          );

          res.json(faq);

     } catch (err) {

          res.status(500).json({ error: err.message });

     }

};



export const deleteFaq = async (req, res) => {

     try {

          const { id } = req.params;

          await Faq.findByIdAndDelete(id);

          res.json({ message: "Deleted" });

     } catch (err) {

          res.status(500).json({ error: err.message });

     }

};