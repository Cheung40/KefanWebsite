// 客户端组件，负责分页和渲染
"use client";
import BlogCard from "@/components/blog-card";
import React, { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

const PAGE_SIZE = 4;

export default function BlogCardList({ allPosts }: { allPosts: any[] }) {
  const [page, setPage] = useState(1);
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pagePosts = allPosts.slice(start, end);
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);

  return (
    <div className="max-w-4xl mx-auto py-28">
      <div className="flex flex-col gap-6">
        {pagePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      
      <Pagination className="mt-8">
        <PaginationContent>
            <PaginationItem>
            <PaginationPrevious
                href="#"
                onClick={e => {
                e.preventDefault();
                setPage(p => Math.max(1, p - 1));
                }}
                aria-disabled={page === 1}
            >
                上一页
            </PaginationPrevious>
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
                <PaginationLink
                href="#"
                isActive={page === i + 1}
                onClick={e => {
                    e.preventDefault();
                    setPage(i + 1);
                }}
                >
                {i + 1}
                </PaginationLink>
            </PaginationItem>
            ))}
            <PaginationItem>
            <PaginationNext
                href="#"
                onClick={e => {
                e.preventDefault();
                setPage(p => Math.min(totalPages, p + 1));
                }}
                aria-disabled={page === totalPages}
            >
                下一页
            </PaginationNext>
            </PaginationItem>
        </PaginationContent>
        </Pagination>
    </div>
  );
}