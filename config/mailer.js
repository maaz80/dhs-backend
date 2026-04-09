import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: Number(process.env.SMTP_PORT),
     secure: false,
     auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
     },
     tls: {
          rejectUnauthorized: false
     }
});

// Verify connection on startup (optional)
transporter.verify(function (error, success) {
     if (error) {
          console.log("❌ SMTP Connection Error:", error);
     } else {
          console.log("✅ SMTP Server is ready to send emails");
     }
});