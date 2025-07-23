import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogCard({ post }: { post: any }) {
  return (
    <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-gray-500">
        <span>{post.author} · {post.date}</span>
        <Link href={`/blog/${post.slug}`}>
          <Button variant="link" size="sm">阅读全文 →</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
