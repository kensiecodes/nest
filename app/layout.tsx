import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/context/theme.provider";
import Navigation from "@/components/navigation";

import { fontvariables } from "@/constants/fonts";

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
          className={`${fontvariables} selection:bg-fuchsia-300 selection:text-fuchsia-900 font-body bg-cloud-50 dark:bg-night text-cloud-800 dark:text-zinc-50`}
        >
          <Navigation />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
