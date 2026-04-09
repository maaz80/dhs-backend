import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({

     leftImg: {
          type: String,
          required: true
     },
     rightImg: {
          type: String,
          required: true
     },

     quote: {
          type: String,
          required: true
     },

     title: {
          type: String,
          required: true
     },
}, { timestamps: true });

const About = mongoose.model("About", aboutSchema);

export default About;