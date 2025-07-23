import { mdxComponents } from "@/components/mdxui/mdx-components";
import { TOC } from "@/components/mdxui/toc";
import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: { slug: string };
}

export default async function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  const htmlContent = `<div>${post.content}</div>`; // 模拟渲染后的 HTML
  if (!post) {
    return <div>未找到文章</div>;
  }

  return (
    // <article className="max-w-2xl mx-auto p-4 mt-12 prose prose-neutral dark:prose-invert prose-lg sm:prose-xl prose-headings:font-semibold prose-a:text-blue-600 prose-pre:bg-gray-800">
    //   <h1 className="text-3xl font-bold tracking-tight leading-snug">{post.title}</h1>
    //   <p className="text-gray-600 dark:text-gray-400 mt-2">{post.date}</p>
    //   <MDXRemote source={post.content} components={mdxComponents} />
    // </article>

    <div className="container mx-auto p-4 flex gap-8">
      <main className="flex-1 prose dark:prose-invert">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <MDXRemote source={post.content} components={mdxComponents} />
      </main>
      <aside className="w-64">
        <TOC content={htmlContent} />
      </aside>
    </div>
  );
}