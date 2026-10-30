import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken } from "@/lib/portal-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sessionCookie = cookies().get("sustune_portal_session");

    if (!sessionCookie || !sessionCookie.value) {
      return NextResponse.json(
        { authenticated: false, message: "No active session." },
        { status: 401 }
      );
    }

    const client = verifySessionToken(sessionCookie.value);

    if (!client) {
      return NextResponse.json(
        { authenticated: false, message: "Session expired or invalid signature." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      client,
    });
  } catch (error) {
    console.error("Session verification error:", error);
    return NextResponse.json(
      { authenticated: false, message: "Error verifying session." },
      { status: 500 }
    );
  }
}
