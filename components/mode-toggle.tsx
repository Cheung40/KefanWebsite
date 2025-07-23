"use client";
import { useLayoutEffect, useState, forwardRef } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

interface ModeToggleProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ModeToggle = forwardRef<HTMLButtonElement, ModeToggleProps>(
  ({ className, onClick, ...props }, ref) => {
    const [isDark, setIsDark] = useState(false);

    useLayoutEffect(() => {
      if (typeof window !== "undefined") {
        const dark =
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
        localStorage.theme = dark ? "dark" : "light"; // 立即保存
      }
    }, []);

    const toggleTheme = () => {
      if (typeof window !== "undefined") {
        const newDark = !isDark;
        setIsDark(newDark);
        document.documentElement.classList.toggle("dark", newDark); // 同步更新
        localStorage.theme = newDark ? "dark" : "light";
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      }
      toggleTheme();
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        aria-label="关灯/开灯"
        className={className}
        {...props}
      >
        {isDark ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
      </button>
    );
  }
);

ModeToggle.displayName = "ModeToggle";