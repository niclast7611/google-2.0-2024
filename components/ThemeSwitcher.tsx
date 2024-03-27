"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      className="col-span-1 pt-3 pb-1 px-6 hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer rounded-lg"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://images.emojiterra.com/twitter/512px/1f319.png"
            alt="Dark Mode"
            className="h-8 w-8"
          />
          <p className="text-xs text-gray-500 dark:text-zinc-300 mt-3">Dark</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/2600.png"
            alt="Light Mode"
            className="h-8 w-8"
          />
          <p className="text-xs text-gray-500 dark:text-zinc-300 mt-3">Light</p>
        </div>
      )}
    </button>
  );
};

export default ThemeSwitcher;
