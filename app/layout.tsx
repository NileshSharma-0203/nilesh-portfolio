import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nilesh Sharma",
  
  description:
    "Portfolio of Nilesh Sharma — Systems Engineering, AI Infrastructure, Backend Development, and Cybersecurity.",

  icons: {
    icon: "/favicon.png",
  },
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