import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: "moveIn",
  description: "Move in easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script />
      </head>
      <body>
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
