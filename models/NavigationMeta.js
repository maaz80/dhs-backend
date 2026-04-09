import mongoose from "mongoose";

const navigationMetaSchema = new mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     buttonName: {
          type: String,
          required: true
     }
}, { timestamps: true });

const NavigationMeta = mongoose.model("NavigationMeta", navigationMetaSchema);

export default NavigationMeta;