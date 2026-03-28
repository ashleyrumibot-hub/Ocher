import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Notify Boz of new subscriber
    await resend.emails.send({
      from: "Ocher <onboarding@resend.dev>",
      to: "boz@ocher.ai",
      subject: "New Newsletter Subscriber",
      html: `<p>New subscriber: <strong>${email}</strong></p><p>Subscribed at ${new Date().toISOString()}</p>`,
    });

    // Send welcome email to subscriber
    await resend.emails.send({
      from: "Ocher <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Ocher",
      html: `<p>Thanks for subscribing to Ocher.</p><p>You'll receive updates on our latest ventures, events, and opportunities.</p><p>— Boz Zou & the Ocher team</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
