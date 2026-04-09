import mongoose from "mongoose";

const navigationSchema = new mongoose.Schema({

     type: {
          type: String,
          enum: ["page", "project", "social"],
          required: true
     },

     name: {
          type: String,
          required: true,
          trim: true,
          minlength: 2
     },

     link: {
          type: String,
          required: true,
          trim: true
     },
     order: {
          type: Number,
          required: true
     }

});

const Navigation = mongoose.model("Navigation", navigationSchema);

export default Navigation;