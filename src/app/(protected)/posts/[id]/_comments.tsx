"use client";

import { PostComment } from "@/components/post/comment";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";

export function PostComments({ postId }: { postId: string }) {
  const commentsQuery = api.comment.list.useQuery(postId);
  const createComment = api.comment.create.useMutation({
    onSuccess: () => {
      void commentsQuery.refetch();
    },
  });

  return (
    <div className="space-y-4">
      {commentsQuery.isLoading && (
        <>
          <Skeleton className="h-8" />
          <Skeleton className="h-8" />
        </>
      )}

      {commentsQuery.data?.map((comment) => (
        <PostComment key={comment.id} comment={comment} />
      ))}

      <form
        className="sticky bottom-4 flex space-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const content = formData.get("content") as string;

          createComment.mutate({ content, postId });
          form.reset();
        }}
      >
        <Textarea
          name="content"
          className="flex-1 rounded-lg border px-4 py-2"
          placeholder="Escreva algo..."
        />
        <Button isLoading={createComment.isLoading} type="submit">
          Postar
        </Button>
      </form>
    </div>
  );
}
