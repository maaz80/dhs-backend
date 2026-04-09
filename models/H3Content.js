// models/H3 Content.js
import mongoose from "mongoose";

const h3ContentSchema = new mongoose.Schema({
     pageName: {
          type: String,
          required: true,
          enum: ['home'],
          trim: true
     },
     headingId: {
          type: String,
          required: true,
          trim: true
     },
     headingText: {
          type: String,
          required: true,
          trim: true
     }
}, { timestamps: true });

// Compound index for unique combination
h3ContentSchema.index({ pageName: 1, headingId: 1 }, { unique: true });

const H3Content = mongoose.model("H3Content", h3ContentSchema);
export default H3Content;     