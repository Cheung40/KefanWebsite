"use client";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Page() {
  return (
    <div className="page-container">
      <div className="text-center space-y-8">
        <TypingAnimation 
          className="page-title"
          duration={150}
          showCursor={true}
          cursorBlinkSpeed={600}
          loop={true}
          loopDelay={3000}
          deleteSpeed={80}
        >
          {[
            "你好，我是张恪凡",
            "欢迎来到我的个人站",
          ]}
        </TypingAnimation>
        <TypingAnimation 
          className="page-subtitle"
          duration={100}
          delay={2000}
          showCursor={true}
          cursorBlinkSpeed={800}
          loop={true}
          loopDelay={2000}
          deleteSpeed={50}
        >
          {[
            "Hello, I'm Frank Chang",
            "Welcome to my website",
          ]}
        </TypingAnimation>
      </div>
    </div>
  );
}
