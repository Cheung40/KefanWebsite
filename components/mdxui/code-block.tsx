"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
interface CodeBlockProps {
  children: React.ReactElement<{
    className?: string
    children: string
  }>
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const language = children.props.className?.replace("language-", "") || "text"
  const code = children.props.children.trim()

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  const isDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const codeTheme = isDark ? dracula : vs;

  return (
    <div className={cn("relative my-6 rounded-md border bg-white dark:bg-gray-800")}>
      <div className="flex items-center justify-between p-2 border-b border-gray-800">
        <span className="text-sm text-gray-400">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 bg-gray-900 border-none"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={codeTheme}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
        }}
        wrapLines={true}
        lineProps={{
          style: { whiteSpace: "pre-wrap", wordBreak: "break-all" },
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}