import mongoose from "mongoose";

const pageSEOSchema = new mongoose.Schema({
     pageSlug: {
          type: String,
          required: true,
          unique: true
     },
     title: {
          type: String,
          required: true,
          trim: true
     },
     description: {
          type: String,
          required: true,
          trim: true
     }
}, { timestamps: true });

const PageSEO = mongoose.model("PageSEO", pageSEOSchema);
export default PageSEO;