"use client";

import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { useTheme } from "@/context/theme.provider";
import { FaSun } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const debouncedToggle = useCallback(
    debounce(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setIsAnimating(false);
    }, 100),
    [theme, setTheme]
  );

  const handleToggle = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      debouncedToggle();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
        <FaSun
          className={`absolute w-6 h-6 text-yellow-500 transition-all duration-300 ${
            theme === "dark"
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        />
        <LuMoon
          className={`absolute w-6 h-6 text-indigo-500 transition-all duration-300 ${
            theme === "dark"
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
