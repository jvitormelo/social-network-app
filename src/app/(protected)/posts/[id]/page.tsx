import { BaseHeader } from "@/components/base-header";
import { PostComment } from "@/components/post/comment";
import { PostInfo } from "@/components/post/info";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getComments, getPost } from "@/server/mock";
import { Suspense } from "react";

// Ta tudo em SSR, mas sinceramente acho que não precisa

function PostPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <>
      <Suspense fallback={"Carregando..."}>
        <Content postId={id} />
      </Suspense>
      <br></br>
      <Suspense fallback={"Comentários..."}>
        <Comments postId={id} />
      </Suspense>
    </>
  );
}

async function Content({ postId }: { postId: string }) {
  const post = await getPost(postId);

  return (
    <>
      <BaseHeader
        title={<PostInfo.Header post={post} user={post.user} />}
      ></BaseHeader>
      <PostInfo.Content post={post} />
    </>
  );
}

async function Comments({ postId }: { postId: string }) {
  const comments = await getComments(postId);
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
