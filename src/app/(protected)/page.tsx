/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NwA031WlFqd
 */
import { BaseHeader } from "@/components/base-header";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/server/mock";
import { Suspense } from "react";

function FeedPage() {
  return (
    <>
      <BaseHeader hideBack title="Feed">
        <Button size="lg">Nova Postagem</Button>
      </BaseHeader>

      <Suspense fallback={"Carregando..."}>
        <Posts />
      </Suspense>
    </>
  );
}

async function Posts() {
  const posts = await getPosts();

  return (
    <div className="rounded-lg border border-gray-200">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default FeedPage;
