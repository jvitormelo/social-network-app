"use client";

import { PostCard } from "@/components/post/card";
import { api } from "@/trpc/react";
import { SkeletonCard } from "./skeleton-card";

export function PostsFeed() {
  const postsQuery = api.post.feed.useQuery();

  if (postsQuery.isLoading) {
    return (
      <div className="rounded-lg border border-gray-200">
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200">
      {postsQuery.data?.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
