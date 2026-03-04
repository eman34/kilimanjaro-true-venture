import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, tour, dates, groupSize, message } = body;

    // Validate required fields
    if (!name || !email || !tour) {
      return NextResponse.json(
        { error: "Name, email, and tour interest are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log the inquiry (in production, send email via Resend/SendGrid/etc.)
    console.log("=== New Inquiry ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "Not provided"}`);
    console.log(`Tour: ${tour}`);
    console.log(`Dates: ${dates || "Flexible"}`);
    console.log(`Group Size: ${groupSize || "Not specified"}`);
    console.log(`Message: ${message || "No message"}`);
    console.log("==================");

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'website@kilimanjarotrueventure.com',
    //   to: 'info@kilimanjarotrueventure.com',
    //   subject: `New Inquiry: ${tour} - ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p>...`,
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
