"use client";

import { HomeIcon, MailIcon, PencilIcon, BookImageIcon, BookTextIcon, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";


export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  email: (props: IconProps) => <MailIcon {...props} />,
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  wechat: (props: IconProps) => (
    <svg viewBox="0 0 1024 1024" {...props}>
      <path
        fill="currentColor"
        d="M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528C163.2 94.912 0 230.656 0 403.136c0 99.52 54.272 181.248 145.024 244.736L108.8 756.864l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.04-24.256-11.2-49.6-11.2-76.032C385.088 475.776 521.024 347.264 693.12 347.264zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312C443.968 266.944 471.168 249.024 498.304 249.024zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248S289.92 266.944 289.92 294.272C289.92 321.408 271.872 339.584 244.672 339.584zM1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.728 783.872 1024 711.488 1024 629.76zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224C661.504 566.464 643.648 584.384 616.128 584.384zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224C860.864 566.464 842.752 584.384 815.488 584.384z" p-id="6680"
      ></path>
    </svg>
  ),
};
const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "首页" },
    { href: "/blog", icon: BookTextIcon, label: "博文" },
    { href: "/photo", icon: BookImageIcon, label: "摄影" },
    { href: "/essay", icon: PencilIcon, label: "随笔" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Cheung40",
        icon: Icons.github,
      },
      WeChat: {
        name: "WeChat",
        url: "#",
        icon: Icons.wechat,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
      },
    },
  },
};

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // 检查是否在首页
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // 向下滚动时隐藏导航栏，向上滚动时显示导航栏
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  // 监听主题变化
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkTheme = () => {
        setIsDark(document.documentElement.classList.contains('dark'));
      };

      // 初始检查
      checkTheme();

      // 监听主题变化
      const observer = new MutationObserver(checkTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <social.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  {...(name === "WeChat"
                    ? { className: "bg-neutral-900 dark:bg-[rgb(229,229,229)] rounded-xl shadow-lg p-2 flex flex-col items-center" }
                    : {})}
                >
                  {name === "WeChat" ? (
                    <>
                      {/* 亮色模式下显示 */}
                      <img
                        src="/my_wechat_qrcode_dark.jpg"
                        alt="WeChat QR Code"
                        className="w-32 h-32 block dark:hidden"
                      />
                      {/* 暗色模式下显示 */}
                      <img
                        src="/my_wechat_qrcode_light.jpg"
                        alt="WeChat QR Code (Dark)"
                        className="w-32 h-32 hidden dark:block"
                      />
                    </>
                  ) : (
                    <p>{name}</p>
                  )}
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                />
              </TooltipTrigger>
              <TooltipContent>
                {isDark ? "开灯" : "关灯"}
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          {/* 只在非首页显示返回按钮 */}
          {!isHomePage && (
            <>
              <Separator orientation="vertical" className="h-full" />
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => router.back()}
                      aria-label="返回"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full",
                      )}
                    >
                      <ArrowLeftIcon className="size-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>返回</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </>
          )}
        </Dock>
      </TooltipProvider>

    </div>
  );
}
