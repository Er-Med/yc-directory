import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts/Poppins";

export const metadata: Metadata = {
  title: "Ermili Mohamed | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and modern web technologies.  Experienced in building responsive websites and modern user interfaces that deliver exceptional user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
