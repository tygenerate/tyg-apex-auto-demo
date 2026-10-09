
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Auto Service | Otomotiv Bakım ve Servis",
  description:
    "Apex Auto Service — TYGenerate tarafından hazırlanmış modern oto tamir ve bakım demo web sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
