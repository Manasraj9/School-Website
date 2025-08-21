import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: "Missing fields" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: `neevbaalpanki@gmail.com`,
      subject: `New contact from ${name}`,
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Error sending email", error: error.message });
  }
}
