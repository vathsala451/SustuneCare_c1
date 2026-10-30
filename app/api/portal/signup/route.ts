import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  registerClient,
  createSessionToken,
} from "@/lib/portal-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, phone, nriLocation, serviceTier, autoLogin = false } = body;

    // Validate name
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Please provide a valid NRI client email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email format." },
        { status: 400 }
      );
    }

    // Validate password
    if (!password || typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 6 characters in length." },
        { status: 400 }
      );
    }

    // Validate service tier
    const validTiers = ["dual", "aegis", "sparsh"];
    const tier = validTiers.includes(serviceTier) ? serviceTier : "dual";

    // Attempt registration
    const result = registerClient({
      name: name.trim(),
      email: email.trim(),
      password,
      phone: phone?.trim(),
      nriLocation: nriLocation?.trim(),
      serviceTier: tier,
    });

    if (!result.success || !result.client) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 409 }
      );
    }

    // If autoLogin is requested, set HTTP-only cookie
    if (autoLogin) {
      const token = createSessionToken(result.client);
      const maxAge = 7 * 24 * 60 * 60; // 7 days

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
        message: `Welcome to Sustune Care, ${result.client.name}! Your account has been created and you are now signed in.`,
        client: result.client,
        autoLoggedIn: true,
      });
    }

    // Standard registration response
    return NextResponse.json({
      success: true,
      message: `Account created successfully for ${result.client.name}! You can now sign in with your email and password.`,
      client: result.client,
      autoLoggedIn: false,
    });
  } catch (error) {
    console.error("Portal signup API error:", error);
    return NextResponse.json(
      { success: false, message: "A server error occurred while processing your registration. Please try again." },
      { status: 500 }
    );
  }
}
