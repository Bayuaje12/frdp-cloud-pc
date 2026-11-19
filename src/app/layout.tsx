import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRDP — Your Desktop. Anywhere. Anytime.",
  description:
    "FRDP (FreeRDP) is a Cloud PC platform. Create and access Windows or Linux desktops from Android, PC, and more. 100% features free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
