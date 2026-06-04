import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Ethem Nostar — Senior Product Manager",
  description: "Senior Product Manager with 15+ years across software, telecom, banking, and aviation. Driving B2B SaaS product strategy at TeamViewer.",
  keywords: ["Product Manager", "B2B SaaS", "Remote Management", "TeamViewer", "Pricing Strategy"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
