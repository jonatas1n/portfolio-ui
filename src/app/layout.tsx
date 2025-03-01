import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jônatas' Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="transition antialiased bg-dark min-h-screen">{children}</body>
    </html>
  );
}
