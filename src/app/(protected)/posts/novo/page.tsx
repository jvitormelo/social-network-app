import { BaseHeader } from "@/components/base-header";
import { PostForm } from "@/components/post/form";

function NewPost() {
  return (
    <>
      <BaseHeader title="Novo Post" />
      <PostForm />
    </>
  );
}

export default NewPost;
