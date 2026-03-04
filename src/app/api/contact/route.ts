import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, goals } = await req.json();

  if (!name || !email || !goals) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "coachlaurfischer@gmail.com",
    replyTo: email,
    subject: `New coaching inquiry from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Goals:</strong></p>
      <p style="white-space:pre-wrap">${goals}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
