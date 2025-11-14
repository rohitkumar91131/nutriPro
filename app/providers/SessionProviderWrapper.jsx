"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export default function SessionProviderWrapper({ children }) {
  return <SessionProvider>
    {children}
    <Toaster position="top-right" richColors />
    
    </SessionProvider>;
}
