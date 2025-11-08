"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-2 border border-gray-800 rounded-xl px-3 py-1 bg-gray-900/60 focus-within:ring-2 focus-within:ring-green-500 transition-all">
      <Search size={18} className="text-gray-400" />
      <Input
        type="text"
        placeholder="Search anything..."
        className="bg-transparent border-none focus-visible:ring-0 text-white placeholder-gray-500"
      />
    </div>
  );
}
