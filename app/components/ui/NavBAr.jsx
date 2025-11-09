"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  MessageCircle,
  Calendar,
  Bell,
  Settings,
  LogOut,
  Banknote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DotStructure from "./DotStructure";
import { Spinner } from "@/components/ui/spinner";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname || "/");
  const [loggingOut, setLoggingOut] = useState(false);

  const navItems = [
    { id: "/", icon: Home, label: "Home" },
    { id: "/messages", icon: MessageCircle, label: "Messages" },
    { id: "/calendar", icon: Calendar, label: "Meal Calendar" },
    { id: "/dashboard", icon: Banknote, label: "Dashoard" },
    { divider: true },
    { id: "/notifications", icon: Bell, label: "Notifications" },
    { id: "/settings", icon: Settings, label: "Settings" },
  ];

  const handleNavClick = (id) => {
    setActive(id);
    router.push(id);
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    await new Promise((res) => setTimeout(res, 1000)); 
    router.push("/logout");
  };

  return (
    <div className="flex flex-col justify-between items-center py-6 h-screen w-full  border-r border-gray-800">
      <div className="flex flex-col items-center gap-3">
        <DotStructure />
      </div>

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

      <div className="flex flex-col items-center gap-5">
        <img
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="Profile"
          className="w-10 h-10 rounded-full border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)] object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          disabled={loggingOut}
          onClick={handleLogout}
          className="text-gray-500 hover:text-red-500 transition-colors"
        >
          {loggingOut ? (
            <Spinner className="size-8 text-red-500" />

          ): (
            <LogOut size={24} />
          )}
        </Button>
      </div>
    </div>
  );
}
