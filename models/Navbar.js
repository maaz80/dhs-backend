import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({

     buttonText: {
          type: String,
          required: true
     },

     logo1: {
          type: String,
          required: true
     },

     logo2: {
          type: String,
          required: true
     }


}, { timestamps: true });

const Navbar = mongoose.model("Navbar", navbarSchema);

export default Navbar;