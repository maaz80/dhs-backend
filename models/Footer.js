import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({

     heading: String,
     buttonText: String,
     buttonLink: String,

     logo: String,

     instagram: String,
     linkedin: String,
     facebook: String,
     youtube: String,

     contactTitle: String,
     email: String,
     phone: String,

     locationTitle: String,
     city: String,
     office: String,
     address: String

}, { timestamps: true });

const Footer = mongoose.model("Footer", footerSchema);

export default Footer;