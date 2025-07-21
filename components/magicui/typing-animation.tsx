"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string | string[];
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  showCursor?: boolean;
  cursorBlinkSpeed?: number;
  loop?: boolean;
  loopDelay?: number;
  deleteSpeed?: number;
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  showCursor = true,
  cursorBlinkSpeed = 500,
  loop = false,
  loopDelay = 2000,
  deleteSpeed = 50,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  // 将单个字符串转换为数组
  const textArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!startOnView) {
        const startTimeout = setTimeout(() => {
          setStarted(true);
        }, delay);
        return () => clearTimeout(startTimeout);
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setStarted(true);
            }, delay);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    const currentText = textArray[currentIndex];
    if (!currentText) return;

    let i = isDeleting ? currentText.length : 0;
    
    const typingEffect = setInterval(() => {
      if (isDeleting) {
        // 删除模式
        if (i > 0) {
          setDisplayedText(currentText.substring(0, i - 1));
          i--;
        } else {
          clearInterval(typingEffect);
          setIsDeleting(false);
          setIsTypingComplete(false);
          
          // 移动到下一个文本
          if (loop) {
            setCurrentIndex((prev) => (prev + 1) % textArray.length);
          } else if (currentIndex < textArray.length - 1) {
            setCurrentIndex(prev => prev + 1);
          }
        }
      } else {
        // 输入模式
        if (i < currentText.length) {
          setDisplayedText(currentText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingEffect);
          setIsTypingComplete(true);
          
          // 如果启用了循环，延迟后开始删除
          if (loop) {
            setTimeout(() => {
              setIsDeleting(true);
            }, loopDelay);
          }
        }
      }
    }, isDeleting ? deleteSpeed : duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started, currentIndex, isDeleting, loop, loopDelay, deleteSpeed, textArray]);

  // 光标闪烁效果
  useEffect(() => {
    if (typeof window !== 'undefined' && showCursor && started) {
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, cursorBlinkSpeed);

      return () => clearInterval(cursorInterval);
    }
  }, [showCursor, started, cursorBlinkSpeed]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {displayedText}
      {showCursor && started && (
        <motion.span
          className="inline-block w-0.5 bg-current ml-1 align-text-top"
          style={{
            height: '1em',
            lineHeight: 'inherit'
          }}
          animate={{
            opacity: cursorVisible ? 1 : 0,
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
        />
      )}
    </MotionComponent>
  );
}
