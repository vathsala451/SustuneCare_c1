import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  findClientByEmail,
  verifyPassword,
  createSessionToken,
  sanitizeClient,
} from "@/lib/portal-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, rememberMe } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Please provide both your registered email and password." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid NRI client email address." },
        { status: 400 }
      );
    }

    // Server-side authentication check
    const clientRecord = findClientByEmail(email);

    if (!clientRecord) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No client record found with this email. Please check your credentials or use one of the one-click demo accounts.",
        },
        { status: 401 }
      );
    }

    const isValid = verifyPassword(password, clientRecord.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Incorrect password. Please verify your password or use 'Forgot Password' to reset it.",
        },
        { status: 401 }
      );
    }

    const safeClient = sanitizeClient(clientRecord);
    const token = createSessionToken(safeClient);

    // Calculate maxAge (7 days for rememberMe, 1 day standard)
    const maxAge = rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60;

    // Set secure HTTP-only session cookie
    cookies().set({
      name: "sustune_portal_session",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge,
    });

    return NextResponse.json({
      success: true,
      message: `Welcome back, ${safeClient.name}. Connecting to your ${
        safeClient.serviceTier === "dual"
          ? "Dual-Shield"
          : safeClient.serviceTier === "aegis"
          ? "Aegis Property"
          : "Sparsh Elder Care"
      } dashboard...`,
      client: safeClient,
    });
  } catch (error) {
    console.error("Portal login error:", error);
    return NextResponse.json(
      { success: false, message: "A secure server error occurred during authentication. Please retry." },
      { status: 500 }
    );
  }
}
