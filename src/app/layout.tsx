import { ClerkProvider } from "@clerk/nextjs";
import Header from './components/Header';
import './globals.css';
import { dark } from '@clerk/themes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Social Media",
  description: "Social media but not",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
