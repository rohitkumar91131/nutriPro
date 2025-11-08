import React from "react";
import Hi from "./Hi";
import SearchInput from "./Search";
import Upgrade from "./Upgrade";

export default function Header() {
  return (
    <header className="h-[10dvh] w-full flex items-center justify-between px-8 ">
      <Hi />
      <div className="flex items-center gap-6">
        <SearchInput />
        <Upgrade />
      </div>
    </header>
  );
}
