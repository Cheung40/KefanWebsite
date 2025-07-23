// 客户端组件，负责分页和渲染
"use client";
import BlogCard from "@/components/blog-card";
import { Timeline } from "./aceternityui/timeline";

export default function BlogCardList({ allPosts }: { allPosts: any[] }) {
  // 按照日期归类
  const grouped = allPosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    acc[year] = acc[year] || [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, any[]>);
  // 对每个年份的文章按日期降序排序
  Object.keys(grouped).forEach(year => {
    grouped[year].sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });
  // 年份降序
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));
  // 渲染每个年份的文章
  const data = years.map(year => ({
    title: year,
    content: (
      <div className="flex flex-col gap-6">
        {grouped[year].map((post: any) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}