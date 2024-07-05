import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme.provider";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Nest",
  description: "Tools for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${inter.variable} ${playfairDisplay.variable} ${lato.variable} bg-indigo-50 dark:bg-indigo-950`}
        >
          <Navigation />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
