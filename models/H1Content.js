// models/H1 Content.js
import mongoose from "mongoose";

const h1ContentSchema = new mongoose.Schema({
     pageName: {
          type: String,
          required: true,
          enum: ['blogs', 'contact', 'disclaimer', 'policy', 'portfolio_buyekls', 'portfolio_coinpay', 'portfolio_daccord', 'portfolio_nectar'],
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
h1ContentSchema.index({ pageName: 1, headingId: 1 }, { unique: true });

const H1Content = mongoose.model("H1Content", h1ContentSchema);
export default H1Content;