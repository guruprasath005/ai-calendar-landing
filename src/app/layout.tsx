import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "CalendarAI - Reclaim 5+ Hours Weekly | AI Calendar Assistant",
  description: "Stop playing calendar Tetris. Our AI analyzes your schedule, suggests optimal times, and automates everything through smart integrations. Join 127 professionals on the waitlist.",
  keywords: [
    "AI calendar",
    "intelligent scheduling",
    "calendar automation",
    "productivity tool",
    "schedule optimization",
    "time management",
    "calendar assistant",
    "meeting automation"
  ].join(", "),
  authors: [{ name: "CalendarAI" }],
  creator: "CalendarAI",
  publisher: "CalendarAI",
  openGraph: {
    title: "CalendarAI - Reclaim 5+ Hours Weekly",
    description: "Stop playing calendar Tetris. AI-powered scheduling that works with your brain, not against it.",
    type: "website",
    locale: "en_US",
    siteName: "CalendarAI"
  },
  twitter: {
    card: "summary_large_image",
    title: "CalendarAI - Reclaim 5+ Hours Weekly",
    description: "AI-powered calendar assistant that saves hours every week",
    creator: "@calendarai"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  verification: {
    // Add your verification tokens here when ready
    // google: 'your-google-verification-token',
    // yandex: 'your-yandex-verification-token',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
