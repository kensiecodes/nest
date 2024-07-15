import React from "react";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav className="w-full p-4 dark:text-lake backdrop-blur-md border-b-[1px] border-cloud-300 dark:border-lake">
      <div className="flex items-center items-end justify-between px-5">
        <div className="flex gap-2 items-end font-logo">
          <div className="text-4xl dark:text-cloud-100">nest</div>
          <p className="text-xs pb-1">(web design for all)</p>
        </div>

        <div className="flex gap-4 items-end">
          <NavLink text="colors" path="colors" />
          {/* <NavLink text="colors" path="colors" /> */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
