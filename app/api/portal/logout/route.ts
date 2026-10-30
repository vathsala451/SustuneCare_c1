import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    cookies().delete("sustune_portal_session");
    return NextResponse.json({
      success: true,
      message: "You have been securely signed out.",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { success: false, message: "Error during signout." },
      { status: 500 }
    );
  }
}
