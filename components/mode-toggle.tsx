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
    const [mounted, setMounted] = useState(false);

    useLayoutEffect(() => {
      setMounted(true);
      if (typeof window !== 'undefined') {
        const dark = localStorage.theme === "dark" ||
          (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
      }
    }, []);

    const toggleTheme = () => {
      if (typeof window !== 'undefined') {
        const newDark = !isDark;
        setIsDark(newDark);
        // 用 requestAnimationFrame 保证状态先更新再切 class
        window.requestAnimationFrame(() => {
          document.documentElement.classList.toggle("dark", newDark);
        });
        localStorage.theme = newDark ? "dark" : "light";
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // 调用原始的 onClick（如果有的话）
      if (onClick) {
        onClick(e);
      }
      // 调用我们的 toggleTheme
      toggleTheme();
    };

    // 防止水合不匹配
    if (!mounted) {
      return (
        <button
          ref={ref}
          className={className}
          aria-label="关灯/开灯"
          {...props}
        >
          <SunIcon className="size-5" />
        </button>
      );
    }

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