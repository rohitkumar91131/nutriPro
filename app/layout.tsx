import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from 'sonner';
import NavBar from './components/ui/NavBAr.jsx'
import { DashBoardProvider } from "./context/Dashboard/DashboardContext";
import SessionProviderWrapper from "./providers/SessionProviderWrapper"
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
        <SessionProviderWrapper>
        <DashBoardProvider>
        <NavBar/>
        {children}        </DashBoardProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
