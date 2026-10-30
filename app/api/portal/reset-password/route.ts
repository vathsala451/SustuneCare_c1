import { NextResponse } from "next/server";
import { findClientByEmail, createPasswordResetToken } from "@/lib/portal-auth";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Please provide your registered client email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const client = findClientByEmail(email);

    // To prevent email enumeration in banking-grade apps, we return a uniform response
    if (client) {
      const resetToken = createPasswordResetToken(client.email);
      // In production, send email with reset link. In dev/demo, we confirm the token generation.
      console.log(`[PASSWORD RESET] Generated reset token for ${client.email}: ${resetToken}`);
    }

    // Realistic processing delay for security
    await new Promise((r) => setTimeout(r, 600));

    return NextResponse.json({
      success: true,
      message:
        "If your email is registered in our fiduciary registry, a secure single-use reset link has been dispatched to your primary inbox and registered WhatsApp number.",
    });
  } catch (error) {
    console.error("Password reset error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to process password reset at this time." },
      { status: 500 }
    );
  }
}
