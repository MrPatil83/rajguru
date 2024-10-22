import mongoose from "mongoose";
import Contact from "../../../models/contact";
import nodemailer from "nodemailer";

const uri = process.env.MONGODB_URI;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  await mongoose.connect(uri);
}

export async function POST(request) {
  await connectToDatabase();

  const body = await request.json();

  try {
    // Save contact data to MongoDB
    const contact = new Contact(body);
    await contact.save();

    // Set up Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: body.email,
      to: "tech2@imperiorailing.com",
      subject: "New Contact Form Submission",
      text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Contact saved and email sent successfully!",
        data: contact,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to save contact or send email",
        error,
      }),
      { status: 500 }
    );
  }
}
