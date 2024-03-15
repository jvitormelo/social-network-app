import { BaseHeader } from "@/components/base-header";
import { PostInfo } from "@/components/post/content";
import { getPost } from "@/server/mock";
import { Suspense } from "react";

// Ta tudo em SSR, mas sinceramente acho que não precisa

function PostPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <>
      <Suspense fallback={"Carregando..."}>
        <Content postId={id} />
      </Suspense>
      <Suspense fallback={"Comentários..."}>
        <Comments />
      </Suspense>
    </>
  );
}

async function Content({ postId }: { postId: string }) {
  const post = await getPost(postId);

  return (
    <>
      <BaseHeader title={<PostInfo.Header user={post.user} />}></BaseHeader>
      <PostInfo.Content post={post} />
    </>
  );
}

function Comments() {
  return <div></div>;
}

export default PostPage;
