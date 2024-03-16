import { BaseHeader } from "@/components/base-header";
import { PostComment } from "@/components/post/comment";
import { PostInfo } from "@/components/post/info";
import { SkeletonCard } from "@/components/skeleton-card";
import { Card } from "@/components/ui/card";
import { api } from "@/trpc/server";
import { Suspense } from "react";
import { PostComments } from "./_comments";

// Ta tudo em SSR, mas sinceramente acho que não precisa

function PostPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <Card className="flex flex-col gap-6 p-6">
      <Suspense fallback={<SkeletonCard />}>
        <Content postId={id} />
      </Suspense>

      <Suspense>
        <PostComments postId={id} />
      </Suspense>
    </Card>
  );
}

async function Content({ postId }: { postId: string }) {
  const post = await api.post.find.query(postId);

  return (
    <>
      <BaseHeader
        title={
          <PostInfo.Header group={post.group} post={post} user={post.user} />
        }
      />
      <PostInfo.Content post={post} />
    </>
  );
}

export default PostPage;
