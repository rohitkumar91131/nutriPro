"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

export default function Upgrade() {
  return (
    <Button
      variant="default"
      className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black font-semibold rounded-xl shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] hover:scale-105 transition-all flex items-center gap-2 px-5 py-2"
    >
      <Crown className="w-5 h-5 text-yellow-100" />
      Upgrade
    </Button>
  );
}
