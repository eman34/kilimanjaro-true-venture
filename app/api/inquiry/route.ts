import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    const contactMethod = body.contactMethod === "whatsapp" ? "whatsapp" : "email";

    // Validate required fields — the contact field depends on the chosen reply channel
    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    if (contactMethod === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Please provide a valid email address." },
          { status: 400 }
        );
      }
    } else {
      const digits = (phone || "").replace(/[^0-9]/g, "");
      if (digits.length < 8 || digits.length > 15) {
        return NextResponse.json(
          { error: "Please provide a valid WhatsApp number, including country code." },
          { status: 400 }
        );
      }
    }

    const replyTo = contactMethod === "whatsapp" ? `WhatsApp ${phone}` : email;

    // Log the inquiry (in production, send email via Resend/SendGrid/etc.)
    console.log("=== New Inquiry ===");
    console.log(`Name: ${name}`);
    console.log(`Reply via: ${contactMethod} (${replyTo})`);
    console.log(`Message: ${message}`);
    console.log("==================");

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'website@kilimanjarotrueventure.com',
    //   to: 'info@kilimanjarotrueventure.com',
    //   subject: `New inquiry from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Reply via: ${contactMethod} (${replyTo})</p><p>${message}</p>`,
    // });

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
