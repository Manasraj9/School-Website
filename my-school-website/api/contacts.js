// app/api/contact/route.js

import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        { status: 400 }
      );
    }

    // create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,      // server-only
        pass: process.env.CONTACT_EMAIL_PASS, // server-only
      },
    });

    // email content
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.CONTACT_EMAIL}>`,
      to: "neevbaalpanki@gmail.com", // your receiving email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        📩 New Contact Request

        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        Message:
        ${message}
      `,
    };

    console.log("Attempting to send email:", mailOptions);

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
