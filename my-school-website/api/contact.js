import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    await transporter.sendMail({
      from: `"School Website" <${process.env.EMAIL_USER}>`, // ✅ always your account
      to: process.env.EMAIL_RECEIVER || "neevbaalpanki@gmail.com", // ✅ env or fallback
      subject: `New Contact Form Message from ${name}`,
      text: `
        📩 New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        Message:
        ${message}
      `,
      replyTo: email, // ✅ lets you reply directly to sender
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}

