// lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 博客文章文件夹
const blogDirectory = path.join(process.cwd(), "content/blogs");

// 提取公共的博客文章解析逻辑
function parseBlogPost(slug: string, fileContents: string) {
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    tags: data.tags || [],
    date: data.date,
    author: data.author || "未知",
    image: data.image || "",
    content,
  };
}

export function getAllPosts() {
  // 获取所有博客文章文件名
  const filenames = fs.readdirSync(blogDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    
    return parseBlogPost(slug, fileContents);
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  
  return parseBlogPost(slug, fileContents);
}
