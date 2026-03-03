import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, goals } = await req.json();

  if (!name || !email || !goals) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: "coachlaurfischer@gmail.com",
    replyTo: email,
    subject: `New coaching inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nGoals:\n${goals}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Goals:</strong></p>
      <p style="white-space:pre-wrap">${goals}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
