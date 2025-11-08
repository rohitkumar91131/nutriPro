"use client";
import React from "react";
import { Scan } from "lucide-react";

export default function CameraIcon() {
  return (
    <div className="flex justify-center items-center h-fit w-fit  ">
      <button
        className="
          relative flex items-center justify-center 
          w-20 h-20 rounded-2xl 
          bg-gradient-to-r from-blue-500 to-indigo-600
          shadow-[0_0_20px_rgba(99,102,241,0.6)]
          hover:shadow-[0_0_40px_rgba(99,102,241,0.9)]
          transition-all duration-300 transform active:scale-95

          focus:outline-none
        "
      >
        <Scan
          size={40}
          className="text-white transition-transform duration-300 group-hover:rotate-12"
        />

        <span className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl animate-pulse" />
      </button>
    </div>
  );
}
