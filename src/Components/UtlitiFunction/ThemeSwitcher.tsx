"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Set the initial theme based on system preference if not set
    if (!theme) {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemPreference);
    }
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "light" ? (
        <MoonIcon
          className="h-6 w-6 cursor-pointer text-black "
          onClick={() => setTheme("dark")}
        />
      ) : (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-white"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
}
