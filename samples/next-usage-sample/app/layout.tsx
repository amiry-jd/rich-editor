import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "next-rich-editor sample (by Bun and Next 14)",
  description: "next-rich-editor sample (by Bun and Next 14)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
