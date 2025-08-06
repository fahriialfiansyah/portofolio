import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fahri Alfiansyah | ML/AI Engineer",
  description:
    "Fresh graduate in Informatics from Telkom University with practical experience in NLP, LLMs, and data-driven AI solutions.",
  openGraph: {
    title: "Fahri Alfiansyah | ML/AI Engineer",
    description:
      "Fresh graduate from Telkom University specializing in Machine Learning, NLP, LLMs, and scalable AI-driven solutions.",
    url: "https://your-domain.vercel.app", // Ganti dengan domain kamu sendiri
    type: "website",
    images: [
      {
        url: "https://your-domain.vercel.app/opengraph-image.png", // Ganti dengan gambar og kamu
        width: 1200,
        height: 630,
        alt: "Fahri Alfiansyah | ML/AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [
    { name: "Fahri Alfiansyah", url: "https://github.com/fahriialfiansyah" },
  ],
  keywords: [
    "Fahri Alfiansyah",
    "Machine Learning",
    "AI Engineer",
    "NLP",
    "Large Language Models",
    "Generative AI",
    "Prompt Engineering",
    "LangChain",
    "Python",
    "Data Science",
    "Telkom University",
    "Fresh Graduate",
    "Next.js",
    "TypeScript",
  ],
  creator: "Fahri Alfiansyah",
  publisher: "Fahri Alfiansyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
