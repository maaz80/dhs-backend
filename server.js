import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import connectDB from "./config/db.js";
import navigationRoutes from "./routes/navigationRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import faqRoutes from "./routes/FaqRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import footerRoutes from "./routes/footerRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import navbarRoutes from "./routes/navbarRoutes.js";
import bookingRoute from "./routes/bookingRoute.js";
import openingVideoRoute from "./routes/openingVideoRoute.js";
import h2Routes from "./routes/h2Routes.js";
import h3Routes from "./routes/h3Routes.js";
import h1Routes from "./routes/h1Routes.js";
import pageSEORoutes from "./routes/pageSEORoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

connectDB();

// CORS configuration
app.use(cors({
     origin: [
          "http://localhost:5173",
          "http://localhost:5174",
          "https://kreeya.netlify.app",
          "http://10.200.248.198:5174",
          "http://localhost:4173",
          "https://kreeyadesign.com",
          "https://www.kreeyadesign.com",
          "https://api.kreeyadesign.com",
          "https://kreeya-admin.netlify.app"
     ]
}));

// Cache headers for static assets
app.use('/assets', express.static(path.join(__dirname, 'dist/assets'), {
     maxAge: '365d',
     setHeaders: (res, filepath) => {
          if (filepath.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
               res.setHeader('Cache-Control', 'public, max-age=31536000');
          }
          else if (filepath.match(/\.(css|js)$/)) {
               res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
          else if (filepath.match(/\.(woff|woff2|ttf|eot)$/)) {
               res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
     }
}));

// Serve other static files
app.use(express.static(path.join(__dirname, 'dist'), {
     maxAge: '365d',
     setHeaders: (res, filepath) => {
          if (filepath.match(/\.html$/)) {
               res.setHeader('Cache-Control', 'public, max-age=3600');
          }
     }
}));

// API Routes
app.use("/api", navigationRoutes);
app.use("/api", imageRoutes);
app.use("/api", faqRoutes);
app.use("/api", blogRoutes);
app.use("/api", serviceRoutes);
app.use("/api", testimonialRoutes);
app.use("/api", aboutRoutes);
app.use("/api", footerRoutes);
app.use("/api", heroRoutes);
app.use("/api", navbarRoutes);
app.use("/api", bookingRoute);
app.use("/api", openingVideoRoute);
app.use("/api", h1Routes);
app.use("/api", h2Routes);
app.use("/api", h3Routes);
app.use("/api", pageSEORoutes);
// Health check
app.get("/", (req, res) => {
     res.send("Server Working");
});

// SPA Catch-all - Use middleware instead of app.get('*')
app.use((req, res, next) => {
     // Skip API routes
     if (req.path.startsWith('/api/')) {
          return next();
     }

     // Skip asset files that might have been missed
     if (req.path.match(/\.(css|js|webp|png|jpg|jpeg|gif|ico|svg|mp4|woff|woff2|ttf|eot)$/)) {
          return next();
     }

     // For all other routes, serve index.html (SPA catch-all)
     res.sendFile(path.join(__dirname, 'dist', 'index.html'), {
          headers: {
               'Cache-Control': 'public, max-age=3600'
          }
     });
});

// 404 handler for unmatched routes
app.use((req, res) => {
     res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
     console.log("Server running on port " + PORT);
});