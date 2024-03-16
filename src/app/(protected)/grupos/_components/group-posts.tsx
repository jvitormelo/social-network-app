"use client";

import { PostCard } from "@/components/post/card";
import { SkeletonCard } from "@/components/skeleton-card";
import { api } from "@/trpc/react";

export function GroupPosts({ groupId }: { groupId: string }) {
  const posts = api.post.list.useQuery({ groupId });

  return (
    <div className="rounded-lg border border-gray-200">
      {posts.isLoading && (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
      {posts.data?.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
