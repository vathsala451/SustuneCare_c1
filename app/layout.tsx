import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingChatbot } from "@/components/chat/FloatingChatbot";
import { CurrencyProvider } from "@/lib/currency-context";
import { ThemeProvider } from "@/lib/theme-context";
import { PortalAuthProvider } from "@/lib/portal-auth-context";

export const metadata: Metadata = {
  title: "Sustune Care | Institutional Property Stewardship & Family Elder Care for Global NRIs",
  description:
    "Care for your property. Care for your parents. Peace of mind for you. High-yield property stewardship (Aegis) and empathetic parental healthcare concierge (Sparsh) across Bengaluru, Hyderabad, and Delhi NCR.",
  keywords: [
    "NRI Property Management India",
    "Elder Care for NRIs",
    "Parental Healthcare Concierge",
    "Property Stewardship Bengaluru Hyderabad Delhi NCR",
    "Sustune Care",
    "Aegis Property",
    "Sparsh Elder Care",
  ],
  authors: [{ name: "Sustune Care" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Sustune Care | Dual-Shield Care for NRIs",
    description:
      "Bridging the distance with institutional property stewardship and empathetic parental healthcare concierge in India.",
    url: "https://www.sustunecare.com",
    siteName: "Sustune Care",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('sustune_theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#071329] text-brand-slate dark:text-slate-100 antialiased transition-colors duration-200">
        <ThemeProvider>
          <CurrencyProvider>
            <PortalAuthProvider>
              <AnnouncementBar />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <FloatingChatbot />
            </PortalAuthProvider>
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
