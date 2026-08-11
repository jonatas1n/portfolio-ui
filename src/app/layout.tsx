import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ToastProvider } from "@/context/ToastContext";

export const metadata: Metadata = {
  title: "Jônatas' Portfolio",
  description:
    "Jônatas Gomes (Johny) — Frontend Developer at Pinterest. Portfolio featuring projects, stack and experience in React, TypeScript and microfrontend architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="transition antialiased bg-dark min-h-screen">
        <LanguageProvider>
          <ToastProvider>{children}</ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
