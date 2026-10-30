import { redirect } from "next/navigation";

/**
 * Legacy demo route redirected to unified Client Portal Login route
 * ensuring single canonical entry point per specification.
 */
export default function PortalPreviewPage() {
  redirect("/portal/login");
}
