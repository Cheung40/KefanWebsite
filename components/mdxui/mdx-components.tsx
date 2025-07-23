// components/mdx-components.tsx
import type { ComponentPropsWithoutRef } from "react";
import { CodeBlock } from "./code-block";

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => <h1 style={{ color: "#0070f3", fontSize: "2.5rem" }} {...props} />,
  p: (props: ComponentPropsWithoutRef<"p">) => <p style={{ lineHeight: "2", marginBottom: "1rem" }} {...props} />,
  img: (props: ComponentPropsWithoutRef<"img">) => <img style={{ borderRadius: "8px", maxWidth: "100%" }} {...props} />,
  // 可以继续添加 ul, ol, blockquote 等
  pre: CodeBlock,
};