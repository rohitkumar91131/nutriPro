import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from 'sonner';
import NavBar from './components/ui/NavBAr.jsx'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nutriPro",
  icons: {
    icon: "/nutripro-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className = "grid grid-cols-[1fr_9fr]"
      >
        {/* <Toaster position="top-right" richColors /> */}
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
