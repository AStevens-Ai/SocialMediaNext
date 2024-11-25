'use client'

import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header"

import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">

        <body>
          <Header />

          {children}

        </body>
      </html>
    </ClerkProvider>
  );
}
