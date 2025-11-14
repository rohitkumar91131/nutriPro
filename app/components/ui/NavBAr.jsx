"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  MessageCircle,
  Calendar,
  Bell,
  Settings,
  Banknote,
  LoaderIcon
} from "lucide-react";

import {
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import DotStructure from "./DotStructure";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname || "/");
  const [loggingOut, setLoggingOut] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("Pathname:", pathname);
    console.log("Session:", session);
    console.log("Status:", status);
  }, [pathname, session, status]);

  const navItems = [
    { id: "/", icon: Home, label: "Home" },
    { id: "/messages", icon: MessageCircle, label: "Messages" },
    { id: "/calendar", icon: Calendar, label: "Meal Calendar" },
    { id: "/dashboard", icon: Banknote, label: "Dashboard" },
    { divider: true },
    { id: "/notifications", icon: Bell, label: "Notifications" },
    { id: "/settings", icon: Settings, label: "Settings" },
  ];

  const handleNavClick = (id) => {
    setActive(id);
    router.push(id);
  };

  return (
    <div className="flex flex-col justify-between items-center py-6 h-screen w-full border-r border-gray-800">

      {/* Logo */}
      <div className="flex flex-col items-center gap-3">
        <DotStructure />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col items-center gap-6">
        {navItems.map((item, index) =>
          item.divider ? (
            <div key={index} className="w-8 h-px bg-gray-700 rounded-full" />
          ) : (
            <div key={item.id} className="relative group">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleNavClick(item.id)}
                className={`transition-all duration-200 relative ${
                  active === item.id
                    ? "text-green-400 bg-green-500/10"
                    : "text-gray-400 hover:text-green-400 hover:bg-green-500/10"
                }`}
              >
                <item.icon size={40} />
                {active === item.id && (
                  <span className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-[3px] h-6 bg-green-400 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                )}
              </Button>

              <span className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded-md bg-gray-900 text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </div>
          )
        )}
      </div>

      {/* LOGIN / LOGOUT SECTION */}
      <div className="flex flex-col items-center gap-4">

        {status === "loading" ? (
          <LoaderIcon className="size-6 animate-spin text-gray-400" />

        ) : status === "authenticated" ? (
          <>
            {/* User Avatar */}
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
            />

            {/* Logout Button (ICON ONLY) */}
            <Button
              onClick={async () => {
                setLoggingOut(true);
                await signOut({ callbackUrl: "/" });
              }}
              disabled={loggingOut}
              variant="default"
              className="bg-red-600 text-white hover:bg-red-700 transition-all rounded-full p-3"
            >
              {loggingOut ? (
                <LoaderIcon className="size-5 animate-spin text-white" />
              ) : (
                <ArrowLeftOnRectangleIcon className="w-6 h-6" />
              )}
            </Button>
          </>
        ) : (
          <Link href="/auth/login">
            <Button
              variant="default"
              className="bg-green-600 text-white hover:bg-green-700 transition-all rounded-full p-3"
            >
              <ArrowRightOnRectangleIcon className="w-6 h-6" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
