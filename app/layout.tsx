import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "명진탐정사무소",
  description: "명진탐정사무소 공식 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
