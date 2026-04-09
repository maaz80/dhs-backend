import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
     cloudinary,
     params: {
          folder: "kreeya_media",
          resource_type: "auto",
          allowed_formats: ["jpg", "png", "jpeg", "webp", "mp4", "mov", "webm"]
     }
});

const upload = multer({ storage });

export default upload;