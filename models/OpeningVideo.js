import mongoose from "mongoose";

const openingVideoSchema = new mongoose.Schema({
     video: String  // Cloudinary URL
});

const OpeningVideo = mongoose.model("OpeningVideo", openingVideoSchema);
export default OpeningVideo;