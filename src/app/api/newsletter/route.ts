import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // If Resend API key is configured, use it
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== "your-resend-api-key") {
      const res = await fetch("https://api.resend.com/contacts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
          audience_id: process.env.RESEND_AUDIENCE_ID,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        console.error("Resend error:", data);
        return NextResponse.json(
          { error: "Failed to subscribe. Please try again." },
          { status: 500 }
        );
      }
    } else {
      // Log for development — in production, configure Resend
      console.log(`[Newsletter] New subscriber: ${email}`);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
