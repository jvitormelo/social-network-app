import { BaseHeader } from "@/components/base-header";
import { PostForm } from "@/components/post/form";
import { Loader } from "lucide-react";
import { Suspense } from "react";

function NewPost() {
  return (
    <>
      <BaseHeader title="Novo Post" />
      <Suspense fallback={<Loader className="mx-auto animate-spin" />}>
        <PostForm />
      </Suspense>
    </>
  );
}

export default NewPost;
