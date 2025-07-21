import { getAllPosts } from "@/lib/blog";
import BlogCardList from "@/components/blog-card-list";


// 服务端组件，负责获取数据
export default function BlogListPage() {
  const allPosts = getAllPosts();
  return (
    <div>
      <BlogCardList allPosts={allPosts} />
    </div>
  );
}
