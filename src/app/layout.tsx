import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishi Jagariya Finserv",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="public/logo_rishi.png" type="image/png" />
      <body>
        {children}
      </body>

    </html>
  );
}
