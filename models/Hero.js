import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({

     topText: String,
     midLeftText: String,
     midRightText: String,
     bottomText: String,
     description: String,
     video: String

});

const Hero = mongoose.model("Hero", heroSchema);

export default Hero;