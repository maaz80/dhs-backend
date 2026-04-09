// models/H2Content.js
import mongoose from "mongoose";

const h2ContentSchema = new mongoose.Schema({
     pageName: {
          type: String,
          required: true,
          enum: ['home', 'landing', 'contact', 'menu_component', 'you_may_like_component', 'chatbot_component'],
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
h2ContentSchema.index({ pageName: 1, headingId: 1 }, { unique: true });

const H2Content = mongoose.model("H2Content", h2ContentSchema);
export default H2Content;