import { BaseHeader } from "@/components/base-header";
import { PostComment } from "@/components/post/comment";
import { PostInfo } from "@/components/post/info";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/server";
import { Suspense } from "react";

// Ta tudo em SSR, mas sinceramente acho que não precisa

function PostPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <Card className="flex flex-col gap-6 p-6">
      <Suspense fallback={"Carregando..."}>
        <Content postId={id} />
      </Suspense>

      <Suspense>
        <Comments postId={id} />
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

async function Comments({ postId }: { postId: string }) {
  const comments = await api.post.listComments.query(postId);

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <PostComment key={comment.id} comment={comment}></PostComment>
      ))}

      <form className="flex space-x-2">
        <Textarea
          className="flex-1 rounded-lg border px-4 py-2"
          placeholder="Escreva algo..."
        />
        <Button type="submit">Postar</Button>
      </form>
    </div>
  );
}

export default PostPage;
