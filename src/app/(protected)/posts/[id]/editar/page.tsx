import { BaseHeader } from "@/components/base-header";
import { PostForm } from "@/components/post/form";
import { api } from "@/trpc/server";

async function EditPost(params: {
  params: {
    id: string;
  };
}) {
  const [post, user] = await Promise.all([
    api.post.find.query(params.params.id),
    api.user.me.query(),
  ]);

  if (post.user.id !== user.id) {
    throw new Error("You are not the author of this post");
  }

  return (
    <>
      <BaseHeader title="Editar post" />

      <PostForm initialData={post}></PostForm>
    </>
  );
}

export default EditPost;
