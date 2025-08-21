import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER, // Gmail login (kept secret)
        pass: process.env.EMAIL_PASS, // Gmail App Password (kept secret)
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender (user email from form)
      to: "neevbaalpanki@gmail.com", // your inbox (hardcoded is fine ✅)
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
